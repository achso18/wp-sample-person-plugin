WP Sample Person Plugin
=======================

### Dependencies

I have tried to keep it simple regarding dependencies.
I have only used *reactjs* for building the UI as this was part of the job description.

For the final version in the master branch, I have also made use of jQuery which is also included in WP anyway.

### Code organization

The code resides mainly in two folders.

The folder named *sample_person_plugin* can be directly added as a plugin in Wordpress.
It compromises of the main plugin php file and other subfolders for the assets and the script files.
The script files are already the newest build of the reactjs ui.

The other folder contains the reactjs code base. It was created with *create-react-app*.
When making changes to the code it needs to be rebuild and moved to the *sample-person-plugin/js/* and *sample-person-plugin/css/* directories, respectively.
