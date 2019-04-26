---
slug: '/getting-started-with-github'
title: 'Getting Started With GitHub'
---

## Objectives and Overview

### Lesson Objectives


---

## GitHub Introduction

## Getting Started With GitHub

## Activity: Signing Up for GitHub

### Steps:

## Activity: Creating a Repository on GitHub

### Steps:

## Activity: Pushing Your Local Git Repository to GitHub

At this point you should have your local git repository initialized and completed your first commit. Additionally, you should have created a sample repository on GitHub. If you haven't completed these items yet, make sure to do those before moving forward.

Now you're ready to _push_ your local repository to GitHub! This is done through establishing your GitHub repository as a remote destination for your local repository. If the terminology seems a bit confusing, that's ok! Keep working through it -- you'll get it with practice!

### Steps:

- Open terminal on your Raspberry Pi and navigate to the git repository for your project
- Type `git status` to check the status of your repo.
  - You should see `On branch master nothing to commit, working tree clean`
- Next, add your GitHub repository as a _remote origin_:
  - Often, you can copy this line of code directly from the page for your GitHub repository that you created
  - It'll look something like this: `git remote add origin https://github.com/jonathanprozzi/my-sample-repo.git`
- **Note**: If you closed the page, the remote origin is your _/username/repo-name.git_
- Once you've done this, it's time to **push** your code to GitHub:
  - The command for this is `git push -u origin master`

After completing this last step you'll need to wait a moment while your code is remotely sent to GitHub. You only need to add the `-u origin` flags on the initial push. Afterward, you just use `git push`.

## Going Further
