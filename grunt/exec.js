module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    deploy: 'rsync -e "ssh -p 666"  -az --exclude=".DS_Store" ./app/dist/ tom@k-public.cloudapp.net:/home/kinoulink/app/public'
};