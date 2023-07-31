Why is a Git around ?
	=> Git is a version control system 
		+> easily recover files 
		+> who introduced an issue and when 
		+> Roll back to previously working state

Histroy of version control System?
	=> Made Local VCS DB to keep track of files
		=> Pros
			+> can tract files and rollback
		=> Cons
			+> if you loose ur harddisk , everything is lost 

	=> Centralized VSC 

			>------>------>------>------>------->
			|	   files pulled		    |			
		    +-=-=-=-=+				+-=-=-=-=+
		    | SERVER |				|  USER  |
 		    +-=-=-=-=+				+-=-=-=-=+
 			|	   files pushed	            |
 			<------<------<------<------<-------<

 	=> Distributed VCS
 		+> currently we are using Distributed VCS

Git : Features 
	=> snapshot not difference
	=> Almost every operation is local 
	=> Git has Integrity
	=> Git generally only adds data


Git Installation 
	|
	+=> Git command line tool
	|
	+=> Git bash (terminal program)

Git Setup commands
	
	+> git config --global user.name "<name>"
	+> git config --global user.email "<email_id>"
	+> git config --list
	+> git config --global core.editor "<code_editior_nmae>"

To set up account authentication tour computer
	=> First generate a SSH in your cmd using command 
		+> git ssh-keygen -t ed25519 -C "your_email@example.com"

	=> start the ssh-agent in the background (prefered to use Git Bash) for this
		+> eval "$(ssh-agent -s)"
		+> ssh-add ~/.ssh/id_ed25519

	=> Follow this steps to further procedure "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"
		+> tail  ~/.ssh/id_ed25519.pub
			+> Copy the whole SSH-KEY : "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIBsEsJKuiHBjnChqDG0HHSgm0z11AYIKWUQk0A2J6sk" 

	=> Go to github account setting 
		=> click on "SSH and GPG Keys"
			=> Click on "New SSH Key"
				+> Add Title as ur computer name "Home Computer"
				+> Paste the SSH key here 



Git - Three stage architecture 

			-=-=-=-="Local Operations"=-=-=-=-

+-=-=-=-=-=-=-=-=-=-=-=-+			+-=-=-=-=-=-=-=-=-=-=-=-+			+-=-=-=-=-=-=-=-=-=-=-=-+
|	Working 	|			|	 staging	|			|	git directory 	|
|	directory	|			|	  area		|			|	 (repository)	|
+-=-=-=-=-=-=-=-=-=-=-==+			+-=-=-=-=-=-=-=-=-=-=-=-=+			+-=-=-=-=-=-=-=-=-=-=-=-+
	  ||						  ||						  ||
	  ||						  ||						  ||
	  ||					  checkout the project					  ||
	  |<-----<------<------<------<------<------<-----<-----<------<------<------<------<------<------+|
	  ||						  ||						  ||
	  ||						  ||						  ||
	  ||---->---->----> stage files ---->---->---->--->|						  ||
	  ||						  ||						  ||
	  ||						  ||				 		  ||
	  ||						  |------>------>------> commit ----->----->----->||
	  ||						  ||						  ||
	  ||						  ||						  ||

Git uses = "git-scm.com/docs/git-log"
	
	+> git status  								// to check it directory is git repositary or not 
	+> git init 								// to make this repo to git directory
	+> git status								// now we are ready to use this directory on git 
	+> git add --a								// send all files to staging area ..... files are ready to be commit
	+> git commit -m "Initial commit" 			// to commit file 
	+> git status 								// show the status of file weather it is modified/ changed / deletion 
		
	+> git add <file_name> 						// to add any specific file to git
	+> git commit -m "modifieed first file" 	// to add the commit in file after change
	+> git log 									// to check all the logs of file such as author/Date / commit details
		=> git log -p 							// to see the detailed version of logs such as what are the changes and where and who change it along with difference
		=> git log -p <3> 						// to see last <3> the details in brief of logs with difference
		=> git log stat 						// to see the stats of the file logs in short summary 
		=> git log --pretty=online				// to see the all logs in oneline prett format 
		=> git log --pretty=short/full 			// in short/lomg details
		=> git log --since=2.days 				// give filter result and return logs of last 2 days 
		=> git log --since=2.weeks/months 		// give filter result according to months and weeks
		=> git log --amend 						// to change commit 

	+> rm -rf .git 								// to delete the repo as git initalized 
	+> git clone <https:github.com/......git> 	// to clone any repo from github to ur local 
	+> touch .gitignore 						// to create .gitignore file in which u can add a file which u want to ignore 
		=> .gitignore
			+> <filename>.<extension>			// too add file in .gitignore
			+> error.log 						// too add specific file 
			+> *.log 							// too add all files of same extension 

	+> git add --a/. 							// to add all the files in stage 
	+> git diff 								// to compare working directory and staging directory 
	+> git rm <file_name>						// to remove the file 
	+> git mv <prev_name> <new_name>			// to change the name of a file
	+> git rm --cached <file_name>				// to remove file from tracking 
	+> git restore --staged <file_name>			// to get back the file in unstage
	+> git checkout  -- <file_name> 			// to unmodify the file or to undo changes in the file 
	+> git checkout -f 							// to delete all the current changes and get back to the older one 

	+> git remote 
	+> git remote add <local_name> <github_URL.git>
	+> git remote -v 							// to check the file on under process or not 
	+> git push -u <local_name> master 

Tip 
	=> git clone <github_URL.github.com>
	add the files
	=> git add <file_name> 
	=> git status
	=> git commit -m "i modified this"
	=> git remote -v
	=> git add <file_name>
	=> git push 


