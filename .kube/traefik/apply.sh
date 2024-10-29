alias k=kubectl \
k apply -f ./ingress-role.yaml \
              -f ./ingress-account.yaml \
              -f ./ingress-role-binding.yaml \
              -f ./traefik-deployment.yaml \
              -f ./traefik-service.yaml