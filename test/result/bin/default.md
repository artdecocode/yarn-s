## passes
pass

/* stdout */
$ node test/fixture/pass
this file is fine
/**/

## passes x 2
pass pass

/* stdout */
$ node test/fixture/pass
this file is fine$ node test/fixture/pass
this file is fine
/**/

## fails
fail

/* stdout */
$ node test/fixture/fail
hello worinfo Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Command "fail" existed with code 1
/**/

/* stderr */
error Command failed with exit code 1.
/**/

/* code */
1
/**/