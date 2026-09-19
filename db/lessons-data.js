// All Thedal lesson content lives here. To add a new language or topic,
// add another object to this array in the same shape, then run:
//   npm run seed
// It's safe to re-run — db/init.js upserts by slug.

module.exports = [
  // ---------------- C ----------------
  {
    slug: 'c-hello-world',
    title: 'Hello, World in C',
    language: 'C',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,c programming,print,output,first program',
    syntax: '#include <stdio.h>\n\nint main() {\n    printf("...");\n    return 0;\n}',
    facts: [
      'Every C program starts execution in main()',
      'printf() writes text to the screen',
      '\\n moves the cursor to a new line',
      'return 0 tells the OS the program succeeded'
    ],
    explanation: "Hello World is usually the first program you write in any language, since it proves your compiler and setup work before you learn anything else. In C that means including a header for input and output, then writing your first line of text from inside main().",
    code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    filename: 'hello.c',
    output: 'Hello, World!',
    steps: [
      '#include <stdio.h> pulls in the printf function.',
      'main() is where every C program begins running.',
      'printf("Hello, World!\\n") prints the text and a new line.',
      'return 0 exits the program successfully.'
    ],
    related_languages: ['C', 'C++', 'Rust']
  },
  {
    slug: 'c-for-loop',
    title: 'The for loop in C',
    language: 'C',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,for,loop,iteration,c programming,c language',
    syntax: 'for (init; condition; update) {\n    // loop body\n}',
    facts: [
      'Runs init once, before the loop starts',
      'Checks condition before every pass',
      'Runs update after each pass',
      'Stops the moment the condition is false'
    ],
    explanation: 'A for loop repeats a block of code a set number of times. It packs three things into one line: where to start, how long to keep going, and what changes on every pass, so the whole loop is easy to read at a glance. It is the loop you reach for when you already know roughly how many times you need to repeat something, like stepping through an array or counting from 1 to 10.',
    code: '#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf("count: %d\\n", i);\n    }\n    return 0;\n}',
    filename: 'loop.c',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'i = 0 runs once, before anything else.',
      'i < 5 is checked. If true, the body runs.',
      'The printf line runs, printing the current count.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Assembly']
  },
  {
    slug: 'c-variables',
    title: 'Declaring variables in C',
    language: 'C',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,int,declare,c programming',
    syntax: 'type name = value;',
    facts: [
      'C is statically typed — you must state the type',
      'A variable must be declared before it is used',
      'Common types: int, float, char, double',
      'Uninitialized variables hold garbage values, not zero'
    ],
    explanation: "In C, every variable has a fixed type decided at declaration time. That type tells the compiler how much memory to set aside and what kind of value it will hold, whether that's a whole number, some text, or a decimal.",
    code: '#include <stdio.h>\n\nint main() {\n    int age = 16;\n    float gpa = 8.5;\n    char grade = \'A\';\n\n    printf("Age: %d, GPA: %.1f, Grade: %c\\n", age, gpa, grade);\n    return 0;\n}',
    filename: 'variables.c',
    output: 'Age: 16, GPA: 8.5, Grade: A',
    steps: [
      'int age = 16 reserves space for a whole number.',
      'float gpa = 8.5 reserves space for a decimal.',
      "char grade = 'A' reserves space for a single character.",
      'printf reads each variable back out by its format specifier.'
    ],
    related_languages: ['C', 'C++', 'Java']
  },

  // ---------------- C++ ----------------
  {
    slug: 'cpp-hello-world',
    title: 'Hello, World in C++',
    language: 'C++',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,c++,cout,print,output,first program',
    syntax: '#include <iostream>\n\nint main() {\n    std::cout << "...";\n    return 0;\n}',
    facts: [
      'iostream gives you std::cout for output',
      'The << operator is called "stream insertion"',
      'std:: means the name comes from the standard library',
      'main() must return an int in C++'
    ],
    explanation: "C++ builds on C's structure but replaces printf with a stream-based approach. std::cout represents the output stream, and you push text into it with the << operator rather than calling a formatting function.",
    code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    filename: 'hello.cpp',
    output: 'Hello, World!',
    steps: [
      '#include <iostream> brings in std::cout.',
      'main() begins program execution.',
      'The << operator sends "Hello, World!" into the output stream.',
      'std::endl adds a new line and flushes the output.'
    ],
    related_languages: ['C++', 'C', 'Rust']
  },
  {
    slug: 'cpp-for-loop',
    title: 'The for loop in C++',
    language: 'C++',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,c++,iteration,loop',
    syntax: 'for (init; condition; update) {\n    // loop body\n}',
    facts: [
      "Same three-part structure as C's for loop",
      'Range-based for loops are also available in modern C++',
      'Braces are optional for a single-statement body',
      'The loop variable is scoped to the loop itself'
    ],
    explanation: "C++'s classic for loop is identical to C's, with the same three parts separated by semicolons. Modern C++ also offers a simpler range-based for loop for iterating over collections directly, without managing an index at all.",
    code: '#include <iostream>\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        std::cout << "count: " << i << std::endl;\n    }\n    return 0;\n}',
    filename: 'loop.cpp',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'int i = 0 runs once, before the loop starts.',
      'i < 5 is checked before every pass.',
      'The cout line prints the current value of i.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['C++', 'C', 'Java']
  },

  // ---------------- Java ----------------
  {
    slug: 'java-hello-world',
    title: 'Hello, World in Java',
    language: 'Java',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,java,println,print,output,first program',
    syntax: 'public class Name {\n    public static void main(String[] args) {\n        System.out.println("...");\n    }\n}',
    facts: [
      'The class name must match the file name (Main.java)',
      'main(String[] args) is the required entry point',
      'System.out.println adds a new line automatically',
      'Java code always lives inside a class'
    ],
    explanation: 'Java asks for more structure than C or Python before you can print anything: every bit of code lives inside a class, and execution starts from a specific method signature, public static void main.',
    code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    filename: 'Main.java',
    output: 'Hello, World!',
    steps: [
      'The JVM looks for a class matching the file name.',
      'It calls main(String[] args) to start the program.',
      'System.out.println prints the text plus a new line.',
      'The program ends once main() finishes.'
    ],
    related_languages: ['Java', 'C#', 'Kotlin']
  },
  {
    slug: 'java-for-loop',
    title: 'The for loop in Java',
    language: 'Java',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,java,iteration,loop',
    syntax: 'for (init; condition; update) {\n    // loop body\n}',
    facts: [
      'Same three-part structure as C and C++',
      'The + operator here joins text and numbers together',
      'Loop variables declared in the header are scoped to the loop',
      'Java also has an enhanced for loop for arrays and collections'
    ],
    explanation: "Java's for loop looks just like C's. The main difference students notice is printing: Java joins text and numbers with +, where C uses a format string like %d.",
    code: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println("count: " + i);\n        }\n    }\n}',
    filename: 'Main.java',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'int i = 0 runs once, before the loop starts.',
      'i < 5 is checked before every pass.',
      'System.out.println prints the label and current count.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['Java', 'C#', 'C++']
  },

  // ---------------- C# ----------------
  {
    slug: 'csharp-hello-world',
    title: 'Hello, World in C#',
    language: 'C#',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,c#,csharp,console,writeline,output,first program',
    syntax: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("...");\n    }\n}',
    facts: [
      'Console.WriteLine prints text plus a new line',
      'using System; imports the namespace Console lives in',
      'Main is the entry point, similar to Java',
      'C# is case-sensitive, like most C-family languages'
    ],
    explanation: 'C# looks close to Java at a glance, with a class and a Main method, but reaches for Console.WriteLine instead of System.out.println, and needs a using directive to bring in the System namespace first.',
    code: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
    filename: 'Program.cs',
    output: 'Hello, World!',
    steps: [
      'using System; makes Console available.',
      'The runtime calls Main() to start the program.',
      'Console.WriteLine prints the text and a new line.',
      'The program exits once Main() returns.'
    ],
    related_languages: ['C#', 'Java', 'C++']
  },
  {
    slug: 'csharp-for-loop',
    title: 'The for loop in C#',
    language: 'C#',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,c#,csharp,iteration,loop',
    syntax: 'for (init; condition; update) {\n    // loop body\n}',
    facts: [
      'Same three-part structure as Java and C++',
      'foreach is the usual choice for arrays and collections',
      'Loop variables declared in the header are scoped to the loop',
      'C# is case-sensitive, like Java'
    ],
    explanation: "C#'s for loop is essentially the same shape you'll see in Java or C++. Once you know one C-family for loop, you can read all of them.",
    code: 'using System;\n\nclass Program {\n    static void Main() {\n        for (int i = 0; i < 5; i++) {\n            Console.WriteLine("count: " + i);\n        }\n    }\n}',
    filename: 'Program.cs',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'int i = 0 runs once, before the loop starts.',
      'i < 5 is checked before every pass.',
      'Console.WriteLine prints the label and current count.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['C#', 'Java', 'C++']
  },

  // ---------------- Python ----------------
  {
    slug: 'python-hello-world',
    title: 'Hello, World in Python',
    language: 'Python',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,python,print,output,first program',
    syntax: 'print("...")',
    facts: [
      'print() is a built-in function — no setup needed',
      'Python has no main() requirement to start running',
      'Strings can use single or double quotes',
      'Python runs top to bottom, one line at a time'
    ],
    explanation: "Python keeps Hello World to a single line. There's no header to include and no function you're required to define first, since the interpreter just runs your file from the top, so print() is enough to see output immediately.",
    code: 'print("Hello, World!")',
    filename: 'hello.py',
    output: 'Hello, World!',
    steps: [
      'Python reads hello.py from the top.',
      'print(...) is called with the text you want shown.',
      'Python writes that text to the screen.',
      'The file ends and the program exits.'
    ],
    related_languages: ['Python', 'Ruby', 'JavaScript', 'PHP']
  },
  {
    slug: 'python-for-loop',
    title: 'The for loop in Python',
    language: 'Python',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,for,loop,iteration,python',
    syntax: 'for item in sequence:\n    # loop body',
    facts: [
      'Walks through a sequence item by item',
      'No manual counter or condition needed',
      'Works on lists, strings, ranges, and more',
      'Stops automatically at the end of the sequence'
    ],
    explanation: "Python's for loop is built around iterating over a sequence rather than counting up to a number. Instead of managing a counter yourself, you hand the loop something to walk through, such as a list, a string, or a range, and it gives you one item at a time.",
    code: 'for i in range(5):\n    print(f"count: {i}")',
    filename: 'loop.py',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'range(5) creates the sequence 0, 1, 2, 3, 4.',
      'i is set to the next value from that sequence.',
      'The print line runs using the current value of i.',
      'Once the sequence is exhausted, the loop ends.'
    ],
    related_languages: ['Python', 'C', 'C++', 'Java', 'JavaScript']
  },

  // ---------------- JavaScript ----------------
  {
    slug: 'js-hello-world',
    title: 'Hello, World in JavaScript',
    language: 'JavaScript',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,javascript,js,console.log,print,output,first program',
    syntax: 'console.log("...");',
    facts: [
      'console.log prints to the browser or Node.js console',
      "JavaScript doesn't require a main function",
      'Semicolons are optional but recommended for clarity',
      'The same code runs in a browser console or with Node.js'
    ],
    explanation: "JavaScript keeps things minimal, much like Python. console.log is enough to see output, whether you're running the code in a browser's developer console or with Node.js on a server.",
    code: 'console.log("Hello, World!");',
    filename: 'hello.js',
    output: 'Hello, World!',
    steps: [
      'The JavaScript engine reads the file top to bottom.',
      'console.log(...) is called with the text to display.',
      'The engine writes that text to the console.',
      'Execution continues to the next line, if any.'
    ],
    related_languages: ['JavaScript', 'Python', 'Ruby', 'PHP']
  },
  {
    slug: 'js-for-loop',
    title: 'The for loop in JavaScript',
    language: 'JavaScript',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,javascript,js,iteration,loop',
    syntax: 'for (let i = 0; i < n; i++) {\n    // loop body\n}',
    facts: [
      "Same three-part structure as C's for loop",
      'let scopes i to the loop body, unlike the older var',
      'for...of and for...in exist for looping over collections',
      'Template literals like `count: ${i}` are a common alternative to +'
    ],
    explanation: "JavaScript's for loop follows the same three-part pattern as C. The main thing to get right early on is using let instead of var for the counter, so it stays scoped to just this loop.",
    code: 'for (let i = 0; i < 5; i++) {\n    console.log("count: " + i);\n}',
    filename: 'loop.js',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'let i = 0 runs once, before the loop starts.',
      'i < 5 is checked before every pass.',
      'console.log prints the label and current count.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['JavaScript', 'Python', 'Java']
  },

  // ---------------- Ruby ----------------
  {
    slug: 'ruby-hello-world',
    title: 'Hello, World in Ruby',
    language: 'Ruby',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,ruby,puts,print,output,first program',
    syntax: 'puts "..."',
    facts: [
      'puts adds a new line automatically, like println',
      "Ruby doesn't require semicolons or parentheses",
      'Ruby files run top to bottom, like Python',
      'print is also available, but without the automatic new line'
    ],
    explanation: "Ruby was designed to read almost like plain English. puts, short for \"put string\", is all you need to print a line: no parentheses, no semicolon, no surrounding function required.",
    code: 'puts "Hello, World!"',
    filename: 'hello.rb',
    output: 'Hello, World!',
    steps: [
      'Ruby reads hello.rb from the top.',
      'puts is called with the text to print.',
      'Ruby writes the text followed by a new line.',
      'The program ends after the last line runs.'
    ],
    related_languages: ['Ruby', 'Python', 'PHP']
  },
  {
    slug: 'ruby-for-loop',
    title: 'The for loop in Ruby',
    language: 'Ruby',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,ruby,iteration,loop,range',
    syntax: 'for item in range\n  # loop body\nend',
    facts: [
      '0..4 is a Range covering 0 through 4, inclusive',
      "#{i} inside a string interpolates the variable's value",
      'Ruby loops end with the end keyword, not braces',
      'Most Rubyists prefer 5.times do |i| ... end for this exact case'
    ],
    explanation: "Ruby supports a classic for loop over a range, but idiomatic Ruby usually reaches for methods like .times or .each instead. It's worth knowing both — this form reads closest to loops in other languages.",
    code: 'for i in 0..4\n  puts "count: #{i}"\nend',
    filename: 'loop.rb',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      '0..4 creates a range from 0 to 4.',
      'i takes each value in that range, one at a time.',
      'puts prints the interpolated string for that value.',
      'The loop ends automatically after the last value.'
    ],
    related_languages: ['Ruby', 'Python', 'PHP']
  },

  // ---------------- PHP ----------------
  {
    slug: 'php-hello-world',
    title: 'Hello, World in PHP',
    language: 'PHP',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,php,echo,print,output,first program',
    syntax: '<?php\necho "...";\n?>',
    facts: [
      'PHP code lives inside <?php ... ?> tags',
      'echo outputs one or more strings',
      'PHP is typically embedded inside HTML files',
      'Each statement ends with a semicolon'
    ],
    explanation: 'PHP was built to mix with HTML, so code is wrapped in <?php ?> tags to mark where it starts and stops. echo is the most common way to send text to the page.',
    code: '<?php\necho "Hello, World!";\n?>',
    filename: 'hello.php',
    output: 'Hello, World!',
    steps: [
      '<?php marks the start of PHP code.',
      'echo outputs the string that follows.',
      'The semicolon ends the statement.',
      '?> closes the PHP block.'
    ],
    related_languages: ['PHP', 'JavaScript', 'Ruby']
  },
  {
    slug: 'php-for-loop',
    title: 'The for loop in PHP',
    language: 'PHP',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,php,iteration,loop',
    syntax: '<?php\nfor ($i = 0; $i < n; $i++) {\n    // loop body\n}\n?>',
    facts: [
      "Same three-part structure as C's for loop",
      'Variables in PHP always start with a $ sign',
      'Double-quoted strings interpolate variables automatically',
      '\\n only creates a visible new line in a terminal, not in raw HTML'
    ],
    explanation: "PHP's for loop looks almost identical to C's, with one visible difference: every variable name carries a $ prefix, including the loop counter.",
    code: '<?php\nfor ($i = 0; $i < 5; $i++) {\n    echo "count: $i\\n";\n}\n?>',
    filename: 'loop.php',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      '$i = 0 runs once, before the loop starts.',
      '$i < 5 is checked before every pass.',
      'echo prints the current count using string interpolation.',
      '$i++ runs, then the condition is checked again.'
    ],
    related_languages: ['PHP', 'JavaScript', 'C']
  },

  // ---------------- Go ----------------
  {
    slug: 'go-hello-world',
    title: 'Hello, World in Go',
    language: 'Go',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,go,golang,fmt.println,print,output,first program',
    syntax: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("...")\n}',
    facts: [
      'Every Go file belongs to a package — main is special',
      'func main() is the entry point for an executable',
      'fmt is the standard library package for formatted I/O',
      'Go requires every import to actually be used'
    ],
    explanation: 'Go keeps its Hello World close to C in shape, with a main function and an import, but organizes code into packages from the very first line, and reaches for the fmt package for anything printed to the screen.',
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}',
    filename: 'main.go',
    output: 'Hello, World!',
    steps: [
      'package main marks this as a runnable program.',
      'import "fmt" brings in printing functions.',
      'func main() is where execution starts.',
      'fmt.Println prints the text and a new line.'
    ],
    related_languages: ['Go', 'Rust', 'C']
  },
  {
    slug: 'go-for-loop',
    title: 'The for loop in Go',
    language: 'Go',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,go,golang,iteration,loop',
    syntax: 'for i := 0; i < n; i++ {\n    // loop body\n}',
    facts: [
      'for is the only loop keyword in Go — no while or do-while',
      'No parentheses are used around the three parts',
      ':= declares and initializes i in one step',
      'Braces are required, even for a single-statement body'
    ],
    explanation: 'Go simplifies loops by having exactly one loop keyword, for, that can be shaped to act like a for, while, or infinite loop. This version, with init, condition, and update, will look the most familiar coming from C.',
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfor i := 0; i < 5; i++ {\n\t\tfmt.Println("count:", i)\n\t}\n}',
    filename: 'main.go',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      'i := 0 declares and sets i to 0.',
      'i < 5 is checked before every pass.',
      'fmt.Println prints the label and current count.',
      'i++ runs, then the condition is checked again.'
    ],
    related_languages: ['Go', 'C', 'Rust']
  },

  // ---------------- Rust ----------------
  {
    slug: 'rust-hello-world',
    title: 'Hello, World in Rust',
    language: 'Rust',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'hello world,rust,println,print,output,first program',
    syntax: 'fn main() {\n    println!("...");\n}',
    facts: [
      'fn declares a function; main is the entry point',
      'println! is a macro, marked by the exclamation mark',
      "Rust doesn't need a semicolon after the closing brace",
      'The compiler checks types and memory safety before it will run this'
    ],
    explanation: "Rust's Hello World looks lean, but println! is doing more under the hood than it appears: it's a macro that expands into safe, formatted output code at compile time, one of many places Rust favors compile-time checks.",
    code: 'fn main() {\n    println!("Hello, World!");\n}',
    filename: 'main.rs',
    output: 'Hello, World!',
    steps: [
      'fn main() defines the entry point.',
      'println! is called with the text to print.',
      'The macro expands into code that writes to standard output.',
      'The program exits once main finishes.'
    ],
    related_languages: ['Rust', 'C', 'Go']
  },
  {
    slug: 'rust-for-loop',
    title: 'The for loop in Rust',
    language: 'Rust',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'for loop,rust,iteration,loop,range',
    syntax: 'for item in iterable {\n    // loop body\n}',
    facts: [
      "Rust's for loop always iterates over something iterable",
      '0..5 is a Range, exclusive of 5',
      '{} inside the string is a placeholder filled by the argument after it',
      "There's no C-style for loop in Rust — this range-based form replaces it"
    ],
    explanation: 'Rust deliberately left out the classic three-part for loop from C. Instead, every for loop iterates over a range or a collection, which removes a whole category of off-by-one bugs from counting loops.',
    code: 'fn main() {\n    for i in 0..5 {\n        println!("count: {}", i);\n    }\n}',
    filename: 'main.rs',
    output: 'count: 0\ncount: 1\ncount: 2\ncount: 3\ncount: 4',
    steps: [
      '0..5 creates a range of 0 up to (not including) 5.',
      'i takes each value from that range in turn.',
      'println! prints the label with i filled into {}.',
      'The loop ends automatically after the last value.'
    ],
    related_languages: ['Rust', 'Go', 'Python']
  },

  // ---------------- Variables (remaining languages — C already has one) ----------------
  {
    slug: 'cpp-variables',
    title: 'Declaring variables in C++',
    language: 'C++',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,c++,int,declare',
    syntax: 'type name = value;',
    facts: [
      'C++ is statically typed, like C',
      'auto lets the compiler infer the type from the value',
      'Common types: int, double, char, bool, std::string',
      "A variable must be declared before it's used"
    ],
    explanation: "C++ inherits C's type system but adds a few conveniences, like auto for type inference and std::string for text that behaves more like a real string type than a raw character array.",
    code: '#include <iostream>\n#include <string>\n\nint main() {\n    int age = 16;\n    double gpa = 8.5;\n    std::string name = "Arun";\n\n    std::cout << name << " is " << age << " years old, GPA " << gpa << std::endl;\n    return 0;\n}',
    filename: 'variables.cpp',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'int age = 16 reserves space for a whole number.',
      'double gpa = 8.5 reserves space for a decimal.',
      'std::string name = "Arun" stores text.',
      'cout prints each variable back out, joined by <<.'
    ],
    related_languages: ['C++', 'C', 'Java']
  },
  {
    slug: 'java-variables',
    title: 'Declaring variables in Java',
    language: 'Java',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,java,int,declare',
    syntax: 'type name = value;',
    facts: [
      'Java is statically typed — every variable needs a declared type',
      'Common types: int, double, char, boolean, String',
      "String starts with a capital letter because it's a class, not a primitive",
      'Variables declared inside a method only exist inside that method'
    ],
    explanation: "Java's variable declarations look almost identical to C++'s. The one thing that trips people up early is String — it looks like a built-in type, but it's actually a class, which is why it's capitalized.",
    code: 'public class Main {\n    public static void main(String[] args) {\n        int age = 16;\n        double gpa = 8.5;\n        String name = "Arun";\n\n        System.out.println(name + " is " + age + " years old, GPA " + gpa);\n    }\n}',
    filename: 'Main.java',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'int age = 16 reserves space for a whole number.',
      'double gpa = 8.5 reserves space for a decimal.',
      'String name = "Arun" creates a String object holding text.',
      'println joins everything with + and prints it.'
    ],
    related_languages: ['Java', 'C#', 'C++']
  },
  {
    slug: 'csharp-variables',
    title: 'Declaring variables in C#',
    language: 'C#',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,c#,csharp,int,declare',
    syntax: 'type name = value;',
    facts: [
      'C# is statically typed, like Java',
      'var lets the compiler infer the type from the value on the right',
      'Common types: int, double, char, bool, string',
      'string (lowercase) is an alias for the .NET String type'
    ],
    explanation: 'C# variables look close to Java\'s, with one extra option: var, which infers the type automatically from whatever you assign, while still being fully statically typed underneath.',
    code: 'using System;\n\nclass Program {\n    static void Main() {\n        int age = 16;\n        double gpa = 8.5;\n        string name = "Arun";\n\n        Console.WriteLine(name + " is " + age + " years old, GPA " + gpa);\n    }\n}',
    filename: 'Program.cs',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'int age = 16 reserves space for a whole number.',
      'double gpa = 8.5 reserves space for a decimal.',
      'string name = "Arun" stores text.',
      'Console.WriteLine joins everything with + and prints it.'
    ],
    related_languages: ['C#', 'Java', 'C++']
  },
  {
    slug: 'python-variables',
    title: 'Declaring variables in Python',
    language: 'Python',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,python,declare',
    syntax: 'name = value',
    facts: [
      'Python is dynamically typed — no type keyword needed',
      "A variable's type is decided by whatever value you assign",
      'The same name can be reassigned to a different type later',
      'type(name) tells you what a variable currently holds'
    ],
    explanation: "Python skips type declarations entirely. You just assign a value, and Python figures out what kind of value it is, whether a number, text, or anything else, for you.",
    code: 'age = 16\ngpa = 8.5\nname = "Arun"\n\nprint(f"{name} is {age} years old, GPA {gpa}")',
    filename: 'variables.py',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'age = 16 creates an integer variable.',
      'gpa = 8.5 creates a float variable.',
      'name = "Arun" creates a string variable.',
      "The f-string fills in each variable's current value."
    ],
    related_languages: ['Python', 'Ruby', 'JavaScript']
  },
  {
    slug: 'js-variables',
    title: 'Declaring variables in JavaScript',
    language: 'JavaScript',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,javascript,js,let,const,declare',
    syntax: 'let name = value;\nconst name = value;',
    facts: [
      'let creates a variable that can be reassigned later',
      "const creates one that can't be reassigned",
      'var is the old way — avoid it in new code',
      'JavaScript is dynamically typed, like Python'
    ],
    explanation: 'Modern JavaScript uses let and const instead of the older var. Reach for const by default, and switch to let only when you know the value needs to change.',
    code: 'let age = 16;\nconst name = "Arun";\nlet gpa = 8.5;\n\nconsole.log(`${name} is ${age} years old, GPA ${gpa}`);',
    filename: 'variables.js',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'let age = 16 creates a reassignable number.',
      'const name = "Arun" creates a value that can\'t change.',
      'let gpa = 8.5 creates another reassignable number.',
      "The template literal fills in each variable's value."
    ],
    related_languages: ['JavaScript', 'Python', 'Java']
  },
  {
    slug: 'ruby-variables',
    title: 'Declaring variables in Ruby',
    language: 'Ruby',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,ruby,declare',
    syntax: 'name = value',
    facts: [
      'Ruby is dynamically typed, like Python',
      'No declaration keyword is needed — assignment is enough',
      'Local variable names start with a lowercase letter',
      "#{name} inside a string interpolates the variable's value"
    ],
    explanation: "Ruby variables work much like Python's: just assign a value and Ruby infers the type. String interpolation with #{} is the idiomatic way to build text from variables.",
    code: 'age = 16\ngpa = 8.5\nname = "Arun"\n\nputs "#{name} is #{age} years old, GPA #{gpa}"',
    filename: 'variables.rb',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'age = 16 creates an integer variable.',
      'gpa = 8.5 creates a float variable.',
      'name = "Arun" creates a string variable.',
      "The interpolated string fills in each variable's value."
    ],
    related_languages: ['Ruby', 'Python', 'PHP']
  },
  {
    slug: 'php-variables',
    title: 'Declaring variables in PHP',
    language: 'PHP',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,php,dollar sign,declare',
    syntax: '$name = value;',
    facts: [
      'Every PHP variable name starts with a $ sign',
      'PHP is dynamically typed — no type keyword needed',
      'Double-quoted strings interpolate variables automatically',
      'Single-quoted strings do not interpolate — $name stays literal'
    ],
    explanation: 'PHP variables are easy to spot in code: every one carries a $ prefix. Beyond that, PHP is dynamically typed, so a plain assignment is all you need.',
    code: '<?php\n$age = 16;\n$gpa = 8.5;\n$name = "Arun";\n\necho "$name is $age years old, GPA $gpa";\n?>',
    filename: 'variables.php',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      '$age = 16 creates a variable holding a whole number.',
      '$gpa = 8.5 creates a variable holding a decimal.',
      '$name = "Arun" creates a variable holding text.',
      'echo prints the double-quoted string with variables interpolated.'
    ],
    related_languages: ['PHP', 'JavaScript', 'Ruby']
  },
  {
    slug: 'go-variables',
    title: 'Declaring variables in Go',
    language: 'Go',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,go,golang,declare',
    syntax: 'var name type = value\nname := value',
    facts: [
      'Go is statically typed, but often infers the type for you',
      ':= declares and assigns in one step, inferring the type',
      'var name type = value is the explicit, longer form',
      "Every declared variable must be used, or Go won't compile"
    ],
    explanation: "Go gives you two ways to declare a variable: the explicit var form with a type, or the shorthand := that lets Go infer the type from the value. Most Go code inside functions favors the shorthand.",
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tage := 16\n\tgpa := 8.5\n\tname := "Arun"\n\n\tfmt.Println(name, "is", age, "years old, GPA", gpa)\n}',
    filename: 'variables.go',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'age := 16 declares and infers an int.',
      'gpa := 8.5 declares and infers a float64.',
      'name := "Arun" declares and infers a string.',
      'fmt.Println prints all three values, space-separated.'
    ],
    related_languages: ['Go', 'Rust', 'C']
  },
  {
    slug: 'rust-variables',
    title: 'Declaring variables in Rust',
    language: 'Rust',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    keywords: 'variable,variables,rust,mut,declare',
    syntax: 'let name = value;\nlet mut name = value;',
    facts: [
      'Variables in Rust are immutable by default',
      'mut must be added explicitly to allow reassignment',
      'Rust usually infers the type from the value',
      'This immutable-by-default design catches accidental changes early'
    ],
    explanation: "Rust flips the usual default: variables can't be changed once set, unless you explicitly mark them mut. This is one of the ways Rust catches bugs, like accidentally changing a value you meant to keep fixed, at compile time.",
    code: 'fn main() {\n    let age = 16;\n    let gpa = 8.5;\n    let name = "Arun";\n\n    println!("{} is {} years old, GPA {}", name, age, gpa);\n}',
    filename: 'variables.rs',
    output: 'Arun is 16 years old, GPA 8.5',
    steps: [
      'let age = 16 creates an immutable integer.',
      'let gpa = 8.5 creates an immutable float.',
      'let name = "Arun" creates an immutable string slice.',
      'println! fills each {} placeholder in order.'
    ],
    related_languages: ['Rust', 'Go', 'C']
  },

  // ---------------- if / else (all languages) ----------------
  {
    slug: 'c-if-else',
    title: 'if / else in C',
    language: 'C',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,c programming',
    syntax: 'if (condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      'The condition must be inside parentheses',
      'else if lets you chain multiple conditions',
      'Any nonzero value counts as true in C',
      'The else block is optional'
    ],
    explanation: "An if/else statement runs one block of code or another, depending on whether a condition is true. C checks the condition once and picks a single path.",
    code: '#include <stdio.h>\n\nint main() {\n    int age = 16;\n\n    if (age >= 18) {\n        printf("Adult\\n");\n    } else {\n        printf("Minor\\n");\n    }\n    return 0;\n}',
    filename: 'if_else.c',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['C', 'C++', 'Java']
  },
  {
    slug: 'cpp-if-else',
    title: 'if / else in C++',
    language: 'C++',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,c++',
    syntax: 'if (condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      "Identical syntax to C's if/else",
      'else if chains multiple conditions',
      'Any nonzero value counts as true',
      'Braces are optional for a single-statement block'
    ],
    explanation: "C++'s if/else is inherited directly from C, same syntax and behavior. This is one of the few things you don't need to relearn moving between the two.",
    code: '#include <iostream>\n\nint main() {\n    int age = 16;\n\n    if (age >= 18) {\n        std::cout << "Adult" << std::endl;\n    } else {\n        std::cout << "Minor" << std::endl;\n    }\n    return 0;\n}',
    filename: 'if_else.cpp',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['C++', 'C', 'Java']
  },
  {
    slug: 'java-if-else',
    title: 'if / else in Java',
    language: 'Java',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,java',
    syntax: 'if (condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      'Same syntax as C and C++',
      'The condition must evaluate to a genuine boolean',
      'else if chains multiple conditions',
      'The else block is optional'
    ],
    explanation: "Java's if/else looks just like C's, with one real difference: the condition must be a genuine boolean expression. Unlike C, you can't test a plain number for truthiness.",
    code: 'public class Main {\n    public static void main(String[] args) {\n        int age = 16;\n\n        if (age >= 18) {\n            System.out.println("Adult");\n        } else {\n            System.out.println("Minor");\n        }\n    }\n}',
    filename: 'Main.java',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['Java', 'C#', 'C++']
  },
  {
    slug: 'csharp-if-else',
    title: 'if / else in C#',
    language: 'C#',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,c#,csharp',
    syntax: 'if (condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      'Same syntax as Java and C++',
      'The condition must evaluate to a genuine boolean',
      'else if chains multiple conditions',
      'The else block is optional'
    ],
    explanation: "C#'s if/else follows the same C-family pattern as Java, requiring a genuine boolean condition rather than treating any number as truthy.",
    code: 'using System;\n\nclass Program {\n    static void Main() {\n        int age = 16;\n\n        if (age >= 18) {\n            Console.WriteLine("Adult");\n        } else {\n            Console.WriteLine("Minor");\n        }\n    }\n}',
    filename: 'Program.cs',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['C#', 'Java', 'C++']
  },
  {
    slug: 'python-if-else',
    title: 'if / else in Python',
    language: 'Python',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,elif,conditional,python',
    syntax: 'if condition:\n    ...\nelse:\n    ...',
    facts: [
      'No parentheses or braces are required',
      'Indentation defines which lines belong to each block',
      'elif chains additional conditions',
      'A colon follows if, elif, and else'
    ],
    explanation: "Python drops both the parentheses around the condition and the braces around the block. Indentation alone tells Python which lines belong to the if branch and which belong to else.",
    code: 'age = 16\n\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
    filename: 'if_else.py',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is False.',
      'Python runs the indented block under else instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['Python', 'Ruby', 'JavaScript']
  },
  {
    slug: 'js-if-else',
    title: 'if / else in JavaScript',
    language: 'JavaScript',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,javascript,js',
    syntax: 'if (condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      "Same syntax as C's if/else",
      'else if chains multiple conditions',
      'Falsy values (0, "", null, undefined) act like false',
      'Braces are optional for a single-statement block'
    ],
    explanation: "JavaScript's if/else follows the same pattern as C. The main thing to watch for is JavaScript's looser idea of truthiness: several values besides false, like 0 and an empty string, are treated as false too.",
    code: 'let age = 16;\n\nif (age >= 18) {\n    console.log("Adult");\n} else {\n    console.log("Minor");\n}',
    filename: 'if_else.js',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['JavaScript', 'Python', 'Java']
  },
  {
    slug: 'ruby-if-else',
    title: 'if / else in Ruby',
    language: 'Ruby',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,elsif,conditional,ruby',
    syntax: 'if condition\n  ...\nelse\n  ...\nend',
    facts: [
      'No parentheses or braces are needed',
      'elsif (not else if) chains additional conditions',
      'Every if block ends with the end keyword',
      'Only false and nil count as false — even 0 is true in Ruby'
    ],
    explanation: "Ruby's if/else reads close to plain English, ending each block with end instead of a closing brace. One surprise for newcomers: unlike many languages, 0 is treated as true in Ruby.",
    code: 'age = 16\n\nif age >= 18\n  puts "Adult"\nelse\n  puts "Minor"\nend',
    filename: 'if_else.rb',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'Ruby runs the code after else instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['Ruby', 'Python', 'PHP']
  },
  {
    slug: 'php-if-else',
    title: 'if / else in PHP',
    language: 'PHP',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,elseif,conditional,php',
    syntax: 'if ($condition) {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      "Same syntax as C's if/else",
      'elseif (one word) chains additional conditions in PHP',
      'The condition variable still needs its $ prefix',
      'Braces are optional for a single-statement block'
    ],
    explanation: "PHP's if/else mirrors C's structure closely — the one PHP-specific detail is that chaining conditions uses elseif written as one word, rather than else if.",
    code: '<?php\n$age = 16;\n\nif ($age >= 18) {\n    echo "Adult";\n} else {\n    echo "Minor";\n}\n?>',
    filename: 'if_else.php',
    output: 'Minor',
    steps: [
      '$age >= 18 is checked first.',
      'Since $age is 16, the condition is false.',
      'The else block runs instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['PHP', 'JavaScript', 'C']
  },
  {
    slug: 'go-if-else',
    title: 'if / else in Go',
    language: 'Go',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,go,golang',
    syntax: 'if condition {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      'No parentheses around the condition',
      'Braces are required, even for a single statement',
      'else must start on the same line as the closing brace above it',
      'Go has no ternary operator — if/else is used instead'
    ],
    explanation: "Go drops the parentheses that C, Java, and JavaScript put around conditions, but keeps the braces mandatory — there's no shorthand for a one-line if in Go.",
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tage := 16\n\n\tif age >= 18 {\n\t\tfmt.Println("Adult")\n\t} else {\n\t\tfmt.Println("Minor")\n\t}\n}',
    filename: 'if_else.go',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'Go runs the else block instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['Go', 'C', 'Rust']
  },
  {
    slug: 'rust-if-else',
    title: 'if / else in Rust',
    language: 'Rust',
    category: 'Control flow',
    difficulty: 'Beginner',
    keywords: 'if,else,conditional,rust',
    syntax: 'if condition {\n    // runs if true\n} else {\n    // runs if false\n}',
    facts: [
      'No parentheses around the condition',
      'The condition must be a genuine bool — no implicit numbers',
      'if can also be used as an expression that returns a value',
      'Braces are required around every branch'
    ],
    explanation: "Rust's if/else looks close to Go's, no parentheses, braces required. Rust adds one twist: since if is an expression, you can use it directly to produce a value, not just to choose which statements run.",
    code: 'fn main() {\n    let age = 16;\n\n    if age >= 18 {\n        println!("Adult");\n    } else {\n        println!("Minor");\n    }\n}',
    filename: 'if_else.rs',
    output: 'Minor',
    steps: [
      'age >= 18 is checked first.',
      'Since age is 16, the condition is false.',
      'Rust runs the else block instead.',
      '"Minor" is printed.'
    ],
    related_languages: ['Rust', 'Go', 'C']
  }
];
