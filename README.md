## About

This is Andrew Richardson's coding test for SchoolsBuddy.

As specified in the Word document it is built using *AngularJS* rather than the newer Angular.

I based this on Angular Seed (https://github.com/angular/angular-seed) to get things running quickly. As a result, it's using no 
build system or task runner. If this was a production AngularJS app I'd set up something like Gulp to bundle all the JS and do other
build steps. Also, Angular Seed seems to specify NPM modules that are so out of date they now have security problems. Again, for a 
production app I wouldn't be happy leaving it like that, but I guess that's not what you're checking for here?

The UI is Bootstrap 4.0, it has some basic responsive behaviour. I could do more, but the document says not to spend more than about 
2 hours on this, which doesn't leave a lot of time for refinement. Hopefully you'll think it's good enough!

## Running the app

You'll need to check out the code, then:

```
npm install
```

Once done:

```
npm start
```

It will run a simple web server on http://localhost:8000.

I used node 10 to build this, try using *nvm* or similar if you can't get it to run.