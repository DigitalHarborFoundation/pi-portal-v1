---
slug: '/command-line-basics'
title: 'Command Line Basics'
---

## Objectives and Overview

This lesson introduces basic Linux command line commands and some basic activities to build comfort using the command line.

### Lesson Objectives

- Explain what the command line is and the benefits of knowing how to use it to interact with a system.
- Use basic commands to navigate the file system of the Raspberry Pi.
- Use the command line to update the Raspberry Pi’s software.

---

## What is the Command Line?

The **Command Line Interface (CLI)** is a method of interacting and sending commands to the computer that predates a Graphical User Interface (GUI). Understanding and becoming familiar with the command-line is a valuable and increasingly required skill for developers.

You're able to interact with the command line via the Terminal application on your Raspberry Pi. This is opened by clicking on this icon from the GUI desktop:

[insert image of terminal]

### Why Use the Command Line?

While it may seem that this is an unnecessary tool to use when you can achieve the same results using Finder, becoming familiar with navigating the command line will enable you to move through your file system much faster.

## Common Commands

Understanding how to navigate the filesystem from the command line is useful for web development since you won't always have access to a GUI.
Raspberry Pi's Operating System is Linux, so let's dive into some basic commands. After developing a basic understanding you'll be comfortable enough to look up other commands and options in Linux.

### File System Basics

This lesson is going to introduce commands that will mainly be used to move through your file system. There aren't many commands- mainly you'll be using these commands in different sequences. Here is each command, with an explanation and a screenshot:

**Note:** The { } shows an argument that should be entered. When writing this in the command line, you wouldn't include the { }.

- `ls`: listing. ls lists files in the current directory path. This command takes several options, but if you were to just use "ls" it would list the files.
  - The options are: `-l` for long, which lists permissions and sizes, and then `-a` which shows hidden files.
    If you want to use options, it would look like this: `ls -la`
- `cd`: change directory. This command changes directories. This command is combined with `ls` to move through directories.
  - `cd {directory}` would change to the directory (folder) listed. Note that you would write this without the {}, so cd projects would navigate to a directory named "projects."
  - `cd {folder1/subfolder1/subfolder2}` would navigate to this path. You can use this if you know the full path.
  - `cd ~` is a shortcut to move back to your home directory. This is useful if you get lost in the filesystem.
  - `cd ..` is a shortcut used to navigate up one directory.
- `pwd`: print working directory. This command shows where you are in the file system, displayed as a full path. Use this to confirm where you are, especially if you're lost!
- `mkdir`: make directory. This command creates a new directory (folder). Combine this with cd and ls to create a new directory (mkdir), then move into that directory (cd) and list the files (ls).
  - `mkdir {dir name}`
- `touch`: creates a new file if it doesn't already exist. There is other functionality, but this is the primary purpose of touch.
  - `touch index.html` would create a file named _index.html_ in the current directory.
  - `touch index.html style.css index.js` would create all three files in the current directory. Note that these are separated by spaces.
- Other commands:
  - `mv`: move or rename files.
  - `mv {oldname} {newname}` is used to rename a file.
  - `rm`: remove (delete) a file.
  - **Caution:** Files removed in this way do not go to Trash. They are gone forever!
  - `cp`: copy file/files. This is done with `cp {file1} {file2}`
  - `rmdir`: removes (deletes) an entire directory. This does not go to the Trash. Files deleted in this way are gone forever.

Adam Bouhmad has prepared this quick tutorial on command line basics. This will help get you familiarized with the terminal, and get you off to a good starting point:

<video width="600" height="400" controls>
    <source src="https://dhf-website.s3.amazonaws.com/videos/Intro%20RaspPi%20-%20Basic%20Linux%20Commands.mp4"></source>
</video>

## Linux Quick Reference

This is a quick cheat sheet for some of the useful commands you'll often use in Linux.

### Remote Connection

- `ssh user@host`
  - **Example:** `ssh pi@127.168.0.12`

### Basic Navigation

- `pwd` - Print working directory. Find out where you are!
- `cd path` - Change directory
  - **Tip:** typing just `cd` without a directory following will send you back to the home directory!
  - **Example:** `cd /src/styles`
- `pwd` - Show current directory
- `ls` - List files in the working directory.
  - **Example:** `ls /src/styles`

### System Information

- `date` - Show the current date and time
- `cal` - Show this month's calendar
- `whoami` - Print your current user
- `man` - Show the manual. VERY USEFUL!
  - **Example:** `man whoami`

### Compression

- `tar xvf` - Decompress a tar file using tar
- `tar xvf secretpasswords.tar`
- `tar cvf`  - Compress a file using tar
  - **Example:** `tar secretpasswords.txt secretpasswords.tar`

### Downloading a File

- `wget url` - Retrieve file, download it
  - **Example:** `wget https://digitalharbor.org/downloads.zip`
- `curl url` - Retrieve file, download it

### Reading/Editing a File

- `cat filename` - Read out a file's contents
  - **Example:** `cat secretpasswords.txt`
- texteditor(see below for specific editor examples) filename - Open the file specified in the nano text editor
  - **Example 1, nano editor:** `nano secretpasswords.txt`
  - **Example 2, vi editor:** `vi secretpasswords.txt`
  - **Example 3, emacs editor:** `emacs secretpassword.txt`
- `mv filename directorypath` - Move a file to specified folder
  - **Example:** `mv secretpasswords.txt ~/Desktop/AdamsFolder`

### Creating a File or Directory

- `mkdir foldername` - Create a directory
  - **Example:** `mkdir AdamsFolder`
- `touch filename` - Create a file
  - **Example:** `touch passwords.txt`

### Removing a File or Directory

- `rm filename`: remove a file
  - **Example:** `rm secretpasswords.txt`
- `rm -rf directorypath` - force remove a directory
  - **Example:** `rm -rf ~/Desktop/AdamsFolder`
  - **Caution:** This is _NOT REVERSIBLE_!

## Unix Naming Suggestions

When you're making directories and files, you'll want to avoid using spaces. If you use spaces in the names you'll need to use an escape character (\) to represent the space. It's much easier to use either a dash - or an underscore \_ to name your files:

- example-project
- example_project

## Activity: Command Line Exploration

This quick project is an opportunity to practice the commands in this lesson. Let's get started!

### Steps:

1. Find out what is in your current folder using the `ls` command
2. Make a folder in your Raspberry Pi home directory called "test"
   - Find out what's in your current folder again
   - Hint: remember, the command for making folders differs from making individual files!
3. Move into the newly created folder
4. Create a text file called _hello.txt_ in the test directory
5. Add a sentence to the _hello.txt_ file
6. Save and quit your editor
7. Using the `cat` command, print out the text in your _hello.txt_ file.

## Installing and Updating Software

Managing software is a crucial concept. In this course, you'll be responsible for installing and updating the server software on your Pi. These skills carry over beyond the Pi -- the commands you're using apply to any Linux based server. The commands are slightly different for the Mac, but the concepts remain the same.

The main command line tool for managing software is `apt-get`. APT stands for Advanced Packaging Tool and is used to get software packages, including updates. There are some key commands that you'll be using:

`apt-get update` -  Checks installed software and tells the local machine to check available software updates. Should always be done before an `upgrade` or `dist-upgrade`
`apt-get upgrade` - Actually installs the available software updates. If update isn't done first, apt-get won't know which updates are available.
`apt-get dist-upgrade` - This is a "smarter" upgrade tool that handles dependencies. This usually is preferred over upgrade.
`apt-get install` - Installs a specific tool/software, such as `apt-get install php` would install PHP on the server.
`apt-get remove` - Removes a specific tool/software, such as `apt-get remove php` would remove PHP from the server.

**Note:** These commands require admin access. You'll need to prefix them with `sudo`, such as `sudo apt-get update`.

## Activity: Updating the Pi Software

Keeping your server (and other software on the Pi) up to date is crucial. There are often security patches or other vital software updates that are released. Server and software maintenance should become part of your daily routine, especially when working with web technology. This activity walks through the process of updating your Raspberry Pi via the command line.

**Note:** Before starting, you'll need to have administrator access to your system. You have this for your Raspberry Pi, but you'll still need to start each command with `sudo`. If you're working on a server at another point in your tech explorations, remember that for these types of updates you'll need admin access.

### Steps:

1. Open terminal and run `sudo apt-get update`
2. Once that finishes, run `sudo apt-get dist-upgrade`
   - Note that you may be prompted to answer 'yes' or 'no' throughout this process
