# Build System


### What is a build system?
A build system is simply a collection of tasks (commonly call "task runners") that automate repetitive work.


## Components of a Modern Front-End Workflow

    1. Package managers
    2. Preprocessors
    3. Task Runnres & Build Tools
    
### 1) Package Managers
Automates packages and libraries used in your dev environment. For example: Bower (Project Files -> manages front-end dependencies) & Node.js (NPM -> manages node environment dev dependencies)

*Bower Examples* jQuery, Backbone, Angular JS
*NPM Examples* Gulp, Browser-Sync, Plumber

Package managers do the following things:

    1. Installation
    2. Removal
    3. Upgrading
    4. Dependencies
    
### 2) Preprocessors
Preprocessors are critical to an efficient modern workflow by adding additional features and an optimized syntax that compiles into its native language.

Examples:

**CSS** Sass Less, Sylus
**JavaScript** CoffeeScript, Typescript
**HTML** HAML, Jade, Markdown, Slim

### 3) Task Runners & Build Tools
Task based build tools

 - Gulp and Grunt
 - Run on Node
 - Similar anatomy


## Gulp File

Packages and their description that I am using in gulp file.

- **gulp** The streaming build system
- **gulp-plumber** Prevents pipes from breaking caused by errors from gulp plugins
- **gulp-uglify** Minify files
- **gulp-rename** Rename files
- **gulp-sass** Compiles Sass files to generate CSS files
- **gulp-autoprefixer** Prefix CSS with Autoprefixer
- **del** Delete files/folders using globs
- **gulp-browser-sync** Live CSS Reload & Browser Syncing

