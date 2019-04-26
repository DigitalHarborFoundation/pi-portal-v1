---
slug: '/git-version-control'
title: 'Git and Version Control'
---

## Objectives and Overview

This lesson introduces the concept of version control and the core technology Git. You'll learn some key Git terminology, work through an activity where you create a local repos, and then create a repository for your website.

### Lesson Objectives

- Understand and explain the benefits of version control and how it impacts programmers.
- Recognize and explain key Git terminology.
- Demonstrate an understanding of the Git workflow by creating a repository, tracking changes to files, and committing your changes.

---

## What is Version Control?

**Version control** is a system for recording changes to files or groups of files over time that allows you to revert back to previous versions of your files whenever you need. This is critical for programmers. Being able to track every modification not only helps maintain your own code but enables you to work collaboratively on projects. This is a core technology in the open source community as it boosts collaboration on projects across the world.

### Why Is This Helpful?

Let's say that you're working on your website and you have everything exactly how you want it, but you decide to add a new feature. Before adding the new feature you want to "lock" a version of your working site in case your new feature breaks the site's functionality. Version control enables you to do this.

Before you start writing any code for the new feature, you can create a perfect record of your working site. Let's suppose that you start working on the new feature and make a small mistake that breaks your live site. Version control enables you to revert back to the previously working version of your site! You can then compare this previous working version with your recent, broken version to help fix the problem.

## What is Git?

The technology behind this process is called [Git](https://git-scm.com/), and it's one of the most important tools for programmers. Git was developed in 2005 by Linux Torvalds, the creator of Linux. Git is at the core of many projects across the world and is one of the best things you can learn as a young programmer.

Projects that are stored in your repository can be visualized as being a tree. The first time you _commit_ your project, you're creating the main branch of the tree.

Watch this excellent video from Daniel Shiffman of [Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for a great explanation of Git and version control:

<iframe src="https://www.youtube.com/embed/BCQHnlnPusY" width="600" height="400" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>

## Activity: Git Basics

Since your source code resides on your Pi, you're going to be installing Git on the Pi and using it to place your code under version control.

Here's a great resource to download while you work: [Atlassian: Git Cheat Sheet](https://www.atlassian.com/dam/jcr:8132028b-024f-4b6b-953e-e68fcce0c5fa/atlassian-git-cheatsheet.pdf)

## Installing Git on Linux

- Update available packages: `sudo apt-get update`
- Install the git package: `sudo apt-get install git`
- After the update and installation, verify that git is installed by checking the version:
  - `git --version`
- If it's installed, you should see the version, such as `git version 2.21.0`
- Once git is installed, you need to configure your username and email address:
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "yname@youth.dhftc.org"`

Git is now installed! You're ready to start using version control.

## Activity: Your First Commit

Before you start working with your site’s code, let’s go through a practice commit.

- Make a new directory named “first-commit” or something similar
  - Remember, `mkdir` is used to create a folder
- Navigate into this new folder with `cd`
- Create a file and place some content into it:
  - `nano index.html` or `touch index.html` and open in VS Code and add content
- Write some very basic HTML boilerplate in this file and save
- Next, you need to tell Git that this folder should be a repository with version control:
  - To initialize a repository, use `git init`
- You’ll see a message that says `Initialized empty Git repository in …`
- Once you see this, the folder has been initialized as a repository and now has version control!

### Adding and Committing Changes

Now that you have a repository with a file in it, it’s time to _add_ and _commit_ our changes.

- Make changes to one of the files in the Git repository, then check the new status:
  - `git status` reports the status of the Git repository
  - This will inform you that there are _Untracked files_. These are files that Git sees but doesn’t know anything about yet.
- To have Git control and track the file, you need to use `git add .`
  - Note: Using “.” adds all files. You can specify a file as well such as `git add index.html`
  - Git is now aware of the file and it’s ready to be committed.
- Commit the changes with `git commit -m ‘this is my first commit!'`
  - The `-m` option is to include a message, which is then included in the commit history. You need a message!
- You can now check git status to view your commit and message!

## Git Terminology

There is often a lot of confusion around the difference between `git add` and `git commit`. This is understandable as it’s a lot different than what you may have experienced before when working with files. Think of the process of saving and committing a file in three steps:

1. Make changes and save the file in your text editor.
2. When ready for Git to track it, add the file to the repository with `git add [filename]`
3. When ready for Git to store a version, commit the file to the repository using `git commit -m ‘message’`

### Commands You Used

- `git init`: initializes the directory as a Git repository
- `git status`: checks the current status of the repository. This informs you of any changes or untracked files.
- `git add`: Adds a file. This is necessary before committing. It tells Git that this is a file to track.
- `git commit`: Commits the file (saves a version) to the repository.
  - Remember to add a message! `git commit -m 'descriptive message about the changes in this commit'`
