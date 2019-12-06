## CLI

The package can also be used from the CLI.

<argufy>types/arguments.xml</argufy>

<fork>src/bin -h</fork>

The program will exit with status code 1 if one of the scripts exited with non-zero code.

**pass**
%EXAPMLE: test/fixture/pass%
**fail**
%EXAPMLE: test/fixture/fail%

**yarn-s pass fail**

<fork>src/bin pass fail</fork>

%~%