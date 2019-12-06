## CLI

The package can also be used from the CLI.

<argufy>types/arguments.xml</argufy>

<fork>src/bin -h</fork>

The program will exit with status code 1 if one of the scripts exited with non-zero code.

<table>
<tr><th>pass</th><th>fail</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: test/fixture/pass%
</td>
<td>

%EXAMPLE: test/fixture/fail%
</td></tr>
</table>

**yarn-s pass fail**

<fork>src/bin pass fail</fork>

%~%