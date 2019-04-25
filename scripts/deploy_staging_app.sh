echo "{ \"alias\": \"staging-ci-travis-pre-prod\" }" > now-staging-app.json
now --public --token $NOW_TOKEN
now alias --token $NOW_TOKEN --local-config now-staging-app.json