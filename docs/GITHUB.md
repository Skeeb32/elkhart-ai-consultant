# Public GitHub repository

Repository: https://github.com/Skeeb32/elkhart-ai-consultant

If starting from an untracked copy, run:

```sh
git init -b main
git add .
git commit -m "Build Elkhart AI consulting website and demo platform"
gh auth login
gh repo create elkhart-ai-consultant --public --source=. --remote=github
git push -u github main
```

For the already-created repository, add its remote and push the committed project:

```sh
git remote add github https://github.com/Skeeb32/elkhart-ai-consultant.git
git push -u github main
```

If the remote already exists, inspect `git remote -v` rather than adding it again. Never force-push over existing work. The Sites source remote is separate from the public GitHub remote.
