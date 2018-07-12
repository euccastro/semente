#!/usr/bin/python -u

import os
from pprint import pprint
import subprocess
import time

import edn_format as ef


compute_group = "deitomique-Compute-DDPNTO5YMSNB"


def run():
    print
    print "pushing..."
    print
    try:
        push_out = subprocess.check_output(["clojure", "-A:dev", "-m", "datomic.ion.dev", '{:op :push :uname "wip"}'])
    except subprocess.CalledProcessError as e:
        print "ERROR!"
        pprint(ef.loads(e.output))
        return
    print push_out
    deploy_cmd = ef.loads(' '.join(push_out.strip().split('\n')[1:]))[ef.Keyword('deploy-command')]
    args, quoted, _ = deploy_cmd.split("'")
    args = args.strip().split() + [quoted.replace("<deployment-group-name>", compute_group)]

    print
    print "deploying..."
    print
    try:
        deploy_out = subprocess.check_output(args)
    except subprocess.CalledProcessError as e:
        print "ERROR!"
        pprint(ef.loads(e.output))
        return
    print deploy_out
    status_cmd = ef.loads(deploy_out)[ef.Keyword('status-command')]
    args, quoted, _ = status_cmd.split("'")
    args = args.strip().split() + [quoted]

    print
    print "waiting for deployment..."
    print
    while True:
        time.sleep(5)
        try:
            status_out = subprocess.check_output(args)
        except subprocess.CalledProcessError as e:
            print "ERROR!"
            pprint(ef.loads(e.output))
            continue
        print status_out
        if status_out == '{:deploy-status "SUCCEEDED", :code-deploy-status "SUCCEEDED"}\n':
            break

    print "testing..."
    os.system('curl -i https://datomique.icbink.org')


if __name__ == '__main__':
    run()
