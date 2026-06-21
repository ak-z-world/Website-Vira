export interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Scenario' | 'System Design';
  category: string;
  followUp?: string;
}

export interface RelatedResource {
  title: string;
  link: string;
  type: 'tutorial' | 'documentation' | 'roadmap' | 'article';
  
}

export interface InterviewRole {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  totalQuestions: number;
  lastUpdated: string;
  hiringCompanies: string[];
  interviewProcess: {
    round: string;
    title: string;
    duration: string;
    description: string;
  }[];
  questions: Question[];
  salaryTable: {
    experience: string;
    itServices: string;
    startup: string;
    productMNC: string;
  }[];
  faqs: { question: string; answer: string }[];
  relatedResources: RelatedResource[];
  seo: { title: string; description: string; keywords: string[] };
}

export const INTERVIEW_DATA: InterviewRole[] = [
  {
    slug: 'python-developer',
    title: 'Python Developer',
    description: 'Master Python fundamentals, OOP, async programming, and backend development patterns. Common in startups, fintech, and data platforms across India.',
    icon: '◆',
    color: '#3776AB',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: [
      'Flipkart',
      'Amazon',
      'Microsoft India',
      'Google',
      'InMobi',
      'Ola',
      'Freshworks',
      'Hasura',
      'Razorpay',
      'Pine Labs',
      'Unacademy',
      'Curefit'
    ],
    interviewProcess: [
      {
        round: '1',
        title: 'Online Assessment',
        duration: '90 mins',
        description: 'Coding problems on HackerRank/LeetCode. Typically 2-3 questions: one easy string/array, one medium DP or graphs, one design problem.'
      },
      {
        round: '2',
        title: 'System Design Round',
        duration: '60 mins',
        description: 'Design scalable Python backend systems. Focus on APIs, databases, caching, async patterns. Example: Design a URL shortener or real-time notification system.'
      },
      {
        round: '3',
        title: 'Technical Interview',
        duration: '45 mins',
        description: 'Deep dive into your projects, architectural decisions, debugging skills. Discuss production issues, trade-offs, performance optimization.'
      },
      {
        round: '4',
        title: 'HR & Culture Fit',
        duration: '30 mins',
        description: 'Motivation, team dynamics, learning mindset. Rarely disqualifying for technical candidates.'
      }
    ],
    questions: [
      // Beginner (25)
      {
        id: 1,
        question: 'What are the key differences between lists and tuples in Python?',
        answer: 'Lists are mutable (can be modified after creation), while tuples are immutable (cannot be changed once created). Lists use square brackets [] and tuples use parentheses (). Because tuples are immutable, they are hashable and can be used as dictionary keys or set elements, whereas lists cannot. Tuples also have slightly better performance for large collections due to memory optimization, and are preferred when you need to ensure data integrity across function calls.',
        difficulty: 'Beginner',
        category: 'Data Structures',
        followUp: 'When would you use a tuple over a list in production code?'
      },
      {
        id: 2,
        question: 'Explain list comprehensions and provide an example.',
        answer: 'List comprehensions provide a concise way to create lists by applying an operation to each element in an iterable. The syntax is [expression for item in iterable if condition]. Example: [x**2 for x in range(10) if x % 2 == 0] creates [0, 4, 16, 36, 64]. They are more readable and faster than using a for loop with .append(). Nested comprehensions are possible but should be used carefully to maintain code clarity. Dictionary and set comprehensions follow similar syntax.',
        difficulty: 'Beginner',
        category: 'Language Features',
        followUp: 'What are the performance implications of nested list comprehensions?'
      },
      {
        id: 3,
        question: 'What is the difference between == and is in Python?',
        answer: '== checks for value equality (whether two objects have the same content), while is checks for identity (whether two variables point to the same object in memory). For example, [1, 2, 3] == [1, 2, 3] is True (same values), but [1, 2, 3] is [1, 2, 3] is False (different objects). With small integers and strings, Python caches objects, so is may return True unexpectedly. Always use == for value comparison and is only when checking for None, True, or False.',
        difficulty: 'Beginner',
        category: 'Language Features'
      },
      {
        id: 4,
        question: 'What are *args and **kwargs? When would you use them?',
        answer: '*args allows a function to accept a variable number of positional arguments as a tuple, while **kwargs allows a function to accept a variable number of keyword arguments as a dictionary. Example: def func(*args, **kwargs) lets you call func(1, 2, 3, name="Alice", age=30). Use *args when the number of positional arguments is unknown, and **kwargs for flexible keyword arguments. Common in wrapper functions, decorators, and APIs that need to accept arbitrary parameters.',
        difficulty: 'Beginner',
        category: 'Functions',
        followUp: 'How would you use *args and **kwargs when calling a function that already has *args and **kwargs?'
      },
      {
        id: 5,
        question: "Explain Python's GIL (Global Interpreter Lock). How does it affect multithreading?",
        answer: 'The GIL is a mutex that protects access to Python objects in CPython, ensuring only one thread can execute Python bytecode at a time. This means true parallel execution of CPU-bound Python code is impossible with threading—threads take turns executing. However, the GIL is released during I/O operations (network calls, file reads), making threading useful for I/O-bound tasks like web scraping. For CPU-bound work, use multiprocessing instead, which runs separate Python processes, each with its own GIL. Async/await is another alternative for I/O-bound operations with better resource efficiency.',
        difficulty: 'Intermediate',
        category: 'Concurrency'
      },
      {
        id: 6,
        question: 'What are decorators? Provide an example of writing a custom decorator.',
        answer: 'Decorators are functions that wrap other functions or classes, modifying their behavior without changing their source code. They use the @ syntax. Example: def timer_decorator(func): def wrapper(*args, **kwargs): import time; start = time.time(); result = func(*args, **kwargs); print(f"Took {time.time() - start}s"); return result; return wrapper. Apply with @timer_decorator. Decorators are useful for logging, timing, authentication, caching, and validation. They can be stacked (@decorator1 @decorator2) and used with classes.',
        difficulty: 'Intermediate',
        category: 'Functions',
        followUp: 'How would you preserve function metadata (name, docstring) when writing decorators?'
      },
      {
        id: 7,
        question: 'Explain generators and yield. When would you use them?',
        answer: 'Generators are functions that return an iterator using the yield keyword instead of return. They pause execution at each yield and resume from that point when .next() is called. Example: def count(n): i = 0; while i < n: yield i; i += 1. Generators are memory-efficient because they generate values on-the-fly rather than storing all values in memory. Use them for large datasets, file processing, infinite sequences, or when you need lazy evaluation. They\'re also useful in pipelines where data flows through multiple processing stages.',
        difficulty: 'Intermediate',
        category: 'Functions'
      },
      {
        id: 8,
        question: 'What is a context manager? Provide an example.',
        answer: 'A context manager handles setup and cleanup using the with statement. It implements __enter__() and __exit__() methods. Example: with open("file.txt") as f: data = f.read(). The file is automatically closed even if an exception occurs. You can create custom context managers: class MyContext: def __enter__(self): setup code; return self; def __exit__(self, exc_type, exc_val, exc_tb): cleanup code; return False. Context managers are essential for managing resources like database connections, file handles, locks, and transactions safely.',
        difficulty: 'Intermediate',
        category: 'Language Features',
        followUp: 'How would you write a context manager using the contextlib module?'
      },
      {
        id: 9,
        question: 'Explain metaclasses. When would you use them?',
        answer: 'Metaclasses are "classes of classes"—they define how classes behave. In Python, type is the default metaclass. All classes are instances of type. You create a custom metaclass by inheriting from type and overriding __new__ or __init__. Example: class Meta(type): def __new__(mcs, name, bases, namespace): namespace["custom_attr"] = True; return super().__new__(mcs, name, bases, namespace). Use metaclasses for enforcing constraints on subclasses, auto-registering classes, modifying class creation, or implementing design patterns like singleton. They\'re rarely needed in typical applications and should be avoided unless there\'s no simpler solution.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 10,
        question: 'What are descriptors in Python?',
        answer: 'Descriptors are objects that define __get__, __set__, or __delete__ methods and control attribute access. Example: class Descriptor: def __get__(self, obj, objtype=None): return obj._value; def __set__(self, obj, value): obj._value = value. Properties, class methods, and static methods are built-in descriptors. Use descriptors for validation, computed properties, or lazy loading. They intercept attribute access on instances, enabling powerful patterns like the @property decorator or Django ORM field definitions.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 11,
        question: 'Explain the MRO (Method Resolution Order) in Python.',
        answer: 'MRO determines the order in which base classes are searched when executing a method. Python uses the C3 Linearization algorithm. You can view it with ClassName.__mro__ or help(ClassName). In multiple inheritance, Python searches left-to-right, depth-first, but ensures each class appears only once. Example: class A(B, C) searches B, then C, avoiding duplicates. The super() function respects MRO, enabling cooperative multiple inheritance. Misunderstanding MRO leads to method resolution bugs in complex inheritance hierarchies.',
        difficulty: 'Advanced',
        category: 'OOP',
        followUp: 'How does super() interact with MRO in diamond inheritance?'
      },
      {
        id: 12,
        question: 'What is monkey patching? Is it a good practice?',
        answer: 'Monkey patching is dynamically modifying code at runtime—adding or changing methods/attributes of classes or modules after they\'re defined. Example: import datetime; datetime.datetime.now = lambda: "custom". It\'s occasionally useful for fixing bugs in third-party libraries or mocking in tests, but it\'s generally discouraged in production because it makes code unpredictable, breaks static analysis, and creates maintenance nightmares. Prefer composition, inheritance, or proper mocking frameworks. Document it heavily if absolutely necessary.',
        difficulty: 'Advanced',
        category: 'Language Features'
      },
      {
        id: 13,
        question: 'Explain async/await in Python. How does it differ from threading?',
        answer: 'Async/await enables asynchronous programming where functions can pause and resume without blocking. Unlike threading (OS-scheduled), async uses cooperative multitasking—tasks explicitly yield control. Example: async def fetch(url): response = await aiohttp.get(url); return response. You need an event loop (asyncio.run()) to run async functions. Advantages: lower overhead than threads, no GIL contention, easier to reason about. Use async for I/O-bound operations. Limitations: blocking code halts the entire event loop, and libraries must support async (aiohttp, asyncpg, but not requests).',
        difficulty: 'Intermediate',
        category: 'Concurrency',
        followUp: 'How would you handle long-running CPU tasks in an async application?'
      },
      {
        id: 14,
        question: 'What is a lambda function? When should you use it?',
        answer: 'A lambda is an anonymous function defined with lambda: lambda args: expression. Example: add = lambda x, y: x + y. Lambdas are single expressions that automatically return. Use them for short, one-time operations passed to functions like map(), filter(), or sorted(). Example: sorted(students, key=lambda s: s["age"]). Avoid lambdas if you need multiple statements or complex logic—use def instead for clarity. Overusing lambdas makes code less readable.',
        difficulty: 'Beginner',
        category: 'Functions'
      },
      {
        id: 15,
        question: 'Explain *args unpacking in function calls.',
        answer: 'The * operator unpacks an iterable into positional arguments. Example: def add(a, b, c): return a + b + c; nums = [1, 2, 3]; add(*nums) passes 1, 2, 3 as separate arguments. Similarly, **dict unpacks a dictionary into keyword arguments: func(**{"name": "Alice", "age": 30}). This is useful for passing variable-length argument lists, delegating to other functions, or merging arguments. Common in wrapper functions and decorators.',
        difficulty: 'Beginner',
        category: 'Functions'
      },
      {
        id: 16,
        question: 'What are closures?',
        answer: 'A closure is a function that "remembers" variables from its enclosing scope even after that scope has finished executing. Example: def outer(x): def inner(): return x + 1; return inner. The inner function closes over x. Closures are created when a nested function references variables from its outer scope. They\'re useful for data hiding, callback handlers, and decorators. The nonlocal keyword allows modifying outer scope variables: def counter(): count = 0; def increment(): nonlocal count; count += 1; return count.',
        difficulty: 'Intermediate',
        category: 'Functions'
      },
      {
        id: 17,
        question: 'What is the difference between shallow copy and deep copy?',
        answer: 'A shallow copy creates a new object but does not recursively copy nested objects—it copies references. A deep copy recursively copies all nested objects. Example: import copy; original = [[1, 2], [3, 4]]; shallow = copy.copy(original); deep = copy.deepcopy(original). Modifying shallow[0][0] affects original, but modifying deep[0][0] does not. Use deepcopy for complex data structures with nested lists/dicts to avoid unintended mutations.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 18,
        question: 'Explain exception handling in Python. What are best practices?',
        answer: 'Exception handling uses try/except/finally. Try the code, except catches errors, finally runs regardless. Example: try: result = 1/0; except ZeroDivisionError: print("Cannot divide by zero"); finally: cleanup(). Best practices: catch specific exceptions (not bare except), use multiple except blocks for different errors, log exceptions with traceback, avoid catching Exception broadly, use context managers for cleanup. Never ignore exceptions silently. Custom exceptions inherit from Exception for domain-specific errors.',
        difficulty: 'Intermediate',
        category: 'Error Handling',
        followUp: 'What is the difference between except Exception and except BaseException?'
      },
      {
        id: 19,
        question: 'What are duck typing and polymorphism in Python?',
        answer: '"If it quacks like a duck, it\'s a duck." Duck typing means an object\'s suitability is determined by its methods/attributes, not type. Python doesn\'t check types at compile time. Example: any object with .read() works in a function expecting a file-like object. Polymorphism allows different types to respond to the same interface. Example: len() works on strings, lists, and dicts because they all implement __len__. This flexibility enables flexible, generic code but requires careful documentation.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 20,
        question: 'What is a classmethod? How does it differ from a staticmethod?',
        answer: 'A classmethod receives the class (cls) as the first argument, not an instance (self). Use @classmethod. A staticmethod receives neither and is like a regular function inside a class—use @staticmethod. Example: class Person: def __init__(self, age): self.age = age; @classmethod def from_birth_year(cls, year): return cls(2024 - year); @staticmethod def is_adult(age): return age >= 18. Classmethods are useful for alternative constructors; staticmethods for utility functions related to a class.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 21,
        question: 'What is a property in Python?',
        answer: 'A property converts a method into an attribute, allowing getter/setter syntax. Use @property. Example: class User: def __init__(self, name): self._name = name; @property def name(self): return self._name; @name.setter def name(self, value): if not value: raise ValueError("Name cannot be empty"); self._name = value. Access like user.name, not user.name(). Properties enable validation, computed attributes, and lazy loading while maintaining clean syntax.',
        difficulty: 'Beginner',
        category: 'OOP'
      },
      {
        id: 22,
        question: 'Explain the difference between __init__ and __new__.',
        answer: '__new__ is a static method that creates the object instance, while __init__ initializes it. __new__ is called first and returns a new instance, then __init__ is called on that instance. You rarely override __new__ unless you\'re subclassing immutable types like int or tuple. Example: class Singleton: _instance = None; def __new__(cls): if not cls._instance: cls._instance = super().__new__(cls); return cls._instance. Most of the time, override __init__, not __new__.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 23,
        question: 'What are module imports? Explain relative vs absolute imports.',
        answer: 'Imports bring code from other modules into your namespace. Absolute imports use the full path: from mypackage.subpackage.module import func. Relative imports use dots: from ..sibling import func (one level up to parent, then sibling) or from .module import func (current package). Absolute imports are preferred in production for clarity. Relative imports are useful in packages but can be confusing. Circular imports occur when modules depend on each other—restructure to avoid them. Use import * sparingly; it pollutes the namespace.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      {
        id: 24,
        question: 'What is type hinting in Python? How do you use it?',
        answer: 'Type hints declare expected types for variables, parameters, and return values. Example: def add(a: int, b: int) -> int: return a + b. Hints are optional and not enforced at runtime—they\'re for static analysis tools like mypy and IDE support. Complex types use typing module: from typing import List, Dict, Optional; def process(items: List[str], config: Optional[Dict[str, int]]). Type hints improve code clarity, catch bugs before runtime, and enable better IDE autocomplete. Use them in production code, especially for APIs and complex functions.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      {
        id: 25,
        question: 'How does Python handle variable scoping (LEGB rule)?',
        answer: 'Python resolves variables using LEGB: Local (function scope), Enclosing (outer function scope), Global (module scope), Built-in (Python builtins). When a variable is referenced, Python searches in this order. Example: x = "global"; def outer(): x = "enclosing"; def inner(): x = "local"; print(x); inner(); print(x). The inner print outputs "local", outer print outputs "enclosing". Use nonlocal and global sparingly. Understanding LEGB prevents variable shadowing bugs.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      // Intermediate (30)
      {
        id: 26,
        question: 'What is the difference between mutability and immutability in Python?',
        answer: 'Mutable objects can be modified after creation (lists, dicts, sets). Immutable objects cannot (strings, tuples, frozensets, numbers). Mutable objects are passed by reference, so modifications affect all references. Immutable objects are safer in concurrent code and can be dictionary keys. Example: lst = [1, 2]; lst.append(3) modifies original, but tup = (1, 2); tup + (3,) creates new tuple. Choose immutable types for function arguments, cache keys, and shared state.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 27,
        question: 'Explain slicing in Python with negative indices.',
        answer: 'Slicing extracts a portion: sequence[start:stop:step]. Indices are 0-based; negative indices count from the end (-1 is last element). Example: lst = [0, 1, 2, 3, 4]; lst[1:3] = [1, 2]; lst[::2] = [0, 2, 4]; lst[::-1] = [4, 3, 2, 1, 0] (reversed). Omitted start/stop use defaults. Slicing works on strings and tuples too. Slices don\'t raise errors for out-of-bounds indices—they return partial results. Slicing creates new objects for lists but returns views for some types.',
        difficulty: 'Beginner',
        category: 'Data Structures'
      },
      {
        id: 28,
        question: 'What are default mutable arguments in functions, and why are they problematic?',
        answer: 'Avoid default mutable arguments: def bad(lst=[]): lst.append(1); return lst. The default list is created once at function definition, shared across calls. bad(); bad() returns [1, 1] because the same list is reused. Use None: def good(lst=None): lst = lst or []; lst.append(1); return lst. This creates a new list each call. This is a common Python gotcha that causes subtle bugs. Always be aware of when defaults are evaluated (at definition, not each call).',
        difficulty: 'Intermediate',
        category: 'Functions',
        followUp: 'Why does this happen and what\'s the technical reason?'
      },
      {
        id: 29,
        question: 'Explain the __call__ method. What does it enable?',
        answer: 'The __call__ method makes instances callable like functions. Example: class Adder: def __init__(self, n): self.n = n; def __call__(self, x): return x + self.n. add5 = Adder(5); add5(3) returns 8. This enables callable objects, useful for callbacks, class-based decorators, and stateful functions. Callable instances can store state between calls.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 30,
        question: 'What are f-strings? How do they compare to .format() and %?',
        answer: 'F-strings (formatted string literals) use f"" syntax with embedded expressions: name = "Alice"; f"Hello, {name}!" returns "Hello, Alice!". Expressions are evaluated at runtime: f"{2 + 2}" = "4". They\'re faster than .format() and % formatting. F-strings support expressions: f"{func()}", f"{value:.2f}" (2 decimal places). Use f-strings in modern Python (3.6+); avoid % formatting. F-strings are more readable and performant.',
        difficulty: 'Beginner',
        category: 'Language Features'
      },
      {
        id: 31,
        question: 'Explain Python\'s map, filter, and reduce functions.',
        answer: 'map(func, iterable) applies func to each element: map(str.upper, ["a", "b"]) → ["A", "B"]. filter(func, iterable) keeps elements where func returns True: filter(lambda x: x > 2, [1, 2, 3, 4]) → [3, 4]. reduce (from functools) cumulatively applies func: reduce(lambda x, y: x + y, [1, 2, 3, 4]) → 10. Modern Python prefers list/generator comprehensions for clarity: [x.upper() for x in lst]. Use map/filter/reduce when functional style is appropriate, but comprehensions are usually more readable.',
        difficulty: 'Intermediate',
        category: 'Functional Programming'
      },
      {
        id: 32,
        question: 'What is a virtual environment and why do you use it?',
        answer: 'A virtual environment is an isolated Python environment per project. It contains its own Python interpreter and packages, preventing version conflicts. Create with python -m venv venv, activate with source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows). Install project dependencies in the venv without affecting the system Python. This ensures reproducibility: different projects can use different versions of the same library. Always use virtual environments in production deployments and development.',
        difficulty: 'Beginner',
        category: 'Development'
      },
      {
        id: 33,
        question: 'Explain the difference between @property and using getter/setter methods.',
        answer: '@property allows cleaner syntax: obj.value instead of obj.get_value(). It\'s syntactic sugar. With @property, you can add validation later without changing the caller interface. Example: class User: @property def age(self): return self._age; @age.setter def age(self, val): if val < 0: raise ValueError(); self._age = val. Properties are more Pythonic than getter/setter methods. They maintain the feel of accessing an attribute while enabling logic.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 34,
        question: 'What are namedtuples? How are they useful?',
        answer: 'A namedtuple is a lightweight immutable class. from collections import namedtuple; Point = namedtuple("Point", ["x", "y"]); p = Point(1, 2); p.x = 1. Access fields by name or index. They\'re more readable than tuples: (1, 2) vs Point(1, 2). Memory-efficient compared to classes. Use for simple data structures, return values, or dictionary keys. dataclasses (Python 3.7+) are more flexible but heavier.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 35,
        question: 'Explain the difference between break, continue, and pass.',
        answer: 'break exits a loop immediately, skipping remaining iterations. continue skips to the next iteration. pass does nothing and is a placeholder (valid when syntax requires a statement). Example: for i in range(5): if i == 2: continue; if i == 4: break; if i == 3: pass. Output: 0, 1, 3. Use break to exit early, continue to skip iteration, pass for empty functions or unimplemented code blocks.',
        difficulty: 'Beginner',
        category: 'Control Flow'
      },
      {
        id: 36,
        question: 'What are set operations in Python?',
        answer: 'Sets are unordered collections of unique elements. Operations: union (|, .union()), intersection (&, .intersection()), difference (-, .difference()), symmetric difference (^, .symmetric_difference()). Example: {1, 2, 3} & {2, 3, 4} = {2, 3}. Sets are useful for removing duplicates, checking membership (O(1) vs O(n) for lists), and set operations. frozenset is immutable and hashable, useful as dictionary keys.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 37,
        question: 'Explain the __str__ and __repr__ methods.',
        answer: '__str__ returns a user-friendly string representation (called by str()). __repr__ returns a developer-friendly representation (called by repr()). Implement both: class User: def __str__(self): return f"{self.name} ({self.email})"; def __repr__(self): return f"User(name={self.name!r}, email={self.email!r})". If __str__ is not defined, Python falls back to __repr__. Use __repr__ for unambiguous output suitable for debugging.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 38,
        question: 'What are else clauses in loops and exception handling?',
        answer: 'An else clause on a for/while loop executes if the loop completes normally (without break). Example: for i in range(5): if i == 10: break; else: print("Loop completed"). An else clause on try/except executes if no exception occurred. Example: try: result = func(); except Exception: handle(); else: process(result). Use loop else to detect whether a break was hit, and exception else to separate success and error paths.',
        difficulty: 'Intermediate',
        category: 'Control Flow'
      },
      {
        id: 39,
        question: 'Explain *args and **kwargs in detail with advanced examples.',
        answer: 'Use *args to capture positional arguments as a tuple: def func(*args): print(args). Call: func(1, 2, 3) → (1, 2, 3). Use **kwargs for keyword arguments as a dict: def func(**kwargs): print(kwargs). Call: func(a=1, b=2) → {"a": 1, "b": 2}. Combine both: def func(required, *args, **kwargs). Order matters: positional args, *args, keyword-only args, **kwargs. Use in decorators for flexible wrapping: def wrapper(*args, **kwargs): return original_func(*args, **kwargs).',
        difficulty: 'Intermediate',
        category: 'Functions',
        followUp: 'How do you enforce keyword-only arguments?'
      },
      {
        id: 40,
        question: 'What is the difference between range, xrange (Python 2), and enumerate?',
        answer: 'range(n) returns a list of numbers (Python 2) or a lazy range object (Python 3). enumerate(iterable) returns (index, value) tuples, useful for loops: for i, item in enumerate(lst): print(i, item). range(start, stop, step) supports slicing syntax. Use enumerate when you need both index and value. In Python 3, range is memory-efficient (lazy). Python 2\'s xrange was replaced by range in Python 3.',
        difficulty: 'Beginner',
        category: 'Built-in Functions'
      },
      {
        id: 41,
        question: 'Explain the zip function.',
        answer: 'zip(iterable1, iterable2, ...) pairs elements from multiple iterables: zip([1, 2], ["a", "b"]) → [(1, "a"), (2, "b")]. If iterables differ in length, zip stops at the shortest. Use with * to unzip: pairs = [(1, "a"), (2, "b")]; nums, letters = zip(*pairs). Common in loops: for num, letter in zip(numbers, letters). Useful for parallel iteration over multiple sequences.',
        difficulty: 'Beginner',
        category: 'Built-in Functions'
      },
      {
        id: 42,
        question: 'What are dataclasses? How do they differ from regular classes?',
        answer: 'dataclasses (Python 3.7+) automatically generate __init__, __repr__, and __eq__ from type hints. from dataclasses import dataclass; @dataclass class User: name: str; age: int. Creates User("Alice", 30) without writing __init__. Benefits: less boilerplate, automatic __repr__, optional immutability (frozen=True), default values, inheritance support. Use dataclasses for simple data containers. For validation or complex logic, use regular classes.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 43,
        question: 'Explain the difference between is None and == None.',
        answer: 'is None checks identity (whether the variable refers to the actual None object), while == None checks equality. Always use is None because None is a singleton—there\'s only one None object. is is faster and more explicit. Example: x = None; x is None → True; x == None → True. But for other objects, prefer == (x == 5 vs x is 5). PEP 8 style guide recommends is/is not for None, True, False.',
        difficulty: 'Beginner',
        category: 'Language Features'
      },
      {
        id: 44,
        question: 'What is the with statement for, and how does it work?',
        answer: 'The with statement simplifies resource management by calling __enter__ on entry and __exit__ on exit (even if exceptions occur). Example: with open("file.txt") as f: data = f.read(). The file is guaranteed to close. This is safer than try/finally. Create custom context managers by implementing __enter__/__exit__ or using contextlib.contextmanager decorator. Use with for files, locks, database connections, transactions, and any cleanup-required resources.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      {
        id: 45,
        question: 'Explain the string methods: split, join, strip, replace.',
        answer: 'split(sep) splits a string: "a,b,c".split(",") → ["a", "b", "c"]. join(list) joins: ",".join(["a", "b"]) → "a,b,c". strip() removes whitespace: "  hello  ".strip() → "hello". replace(old, new) replaces: "hello".replace("l", "L") → "heLLo". Common string operations in data processing. Strings are immutable, so these return new strings. Use split/join for CSV-like parsing, strip for input cleaning, replace for templating.',
        difficulty: 'Beginner',
        category: 'Built-in Functions'
      },
      {
        id: 46,
        question: 'What are defaultdict, OrderedDict, and Counter from collections?',
        answer: 'defaultdict(func) returns a default value for missing keys: from collections import defaultdict; d = defaultdict(int); d["missing"] += 1 → 1 (not error). OrderedDict preserves insertion order (Python 3.7+, regular dicts also preserve order). Counter counts occurrences: Counter("aab") → Counter({\'a\': 2, \'b\': 1}). Use defaultdict to avoid key-checking, Counter for frequency analysis.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 47,
        question: 'Explain bisect module and binary search.',
        answer: 'The bisect module maintains a sorted list: import bisect; lst = [1, 3, 5]; bisect.insort(lst, 4) → [1, 3, 4, 5]. bisect_left/bisect_right find insertion points without modifying. Binary search is O(log n), much faster than linear search for large sorted lists. Use bisect for: sorted list insertion, finding ranges, or implementing sorted containers. Don\'t use if you frequently sort—overhead isn\'t worth it.',
        difficulty: 'Advanced',
        category: 'Data Structures'
      },
      {
        id: 48,
        question: 'What are regular expressions in Python? Provide examples.',
        answer: 'Regular expressions (regex) match and extract text patterns. import re; re.search(r"\\d+", "abc123") finds "123". Common patterns: \\d (digit), \\w (word), \\s (space), . (any char), * (0+), + (1+), ? (0-1), [a-z] (range). Example: re.findall(r"\\b\\w+\\b", text) extracts words. re.sub() replaces: re.sub(r"\\d+", "X", "a1b2") → "aXbX". Regex is powerful for parsing, validation, and text extraction. Use raw strings (r"") to avoid escaping. Complex regex is hard to read—comment or test thoroughly.',
        difficulty: 'Intermediate',
        category: 'Text Processing'
      },
      {
        id: 49,
        question: 'Explain the pickle module. When should you use it?',
        answer: 'pickle serializes Python objects to bytes: import pickle; data = {"a": 1}; serialized = pickle.dumps(data); deserialized = pickle.loads(serialized). Use pickle.dump/load for file I/O. Pickle works with most Python types, including custom classes. Limitations: not human-readable, security risk (untrusted pickle data can execute code), not language-agnostic. Use JSON for APIs, pickle for Python-only caching or checkpointing. Never unpickle untrusted data.',
        difficulty: 'Intermediate',
        category: 'Serialization'
      },
      {
        id: 50,
        question: 'What is the difference between == and is for comparing objects?',
        answer: '== checks value equality (calls __eq__), while is checks identity (memory address). Example: [1, 2] == [1, 2] is True (same values), but [1, 2] is [1, 2] is False (different objects). For None, True, False, always use is because they\'re singletons. For custom classes, implement __eq__ to define equality. Understanding this prevents subtle bugs when comparing mutable objects.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      {
        id: 51,
        question: 'Explain Python\'s import system and how module caching works.',
        answer: 'When you import a module, Python executes it and caches it in sys.modules. Subsequent imports retrieve the cached version, not re-executing. This means module-level code runs once. Example: import my_module twice in one session—print statements only execute once. To reload (rare): import importlib; importlib.reload(my_module). Import order matters for circular dependencies. Avoid circular imports by restructuring or using local imports (import inside functions).',
        difficulty: 'Advanced',
        category: 'Modules'
      },
      {
        id: 52,
        question: 'What are iterators and iterables?',
        answer: 'An iterable is an object with __iter__() that returns an iterator. An iterator is an object with __next__() that returns successive values and raises StopIteration at the end. Lists, tuples, strings are iterables; iter() returns their iterator. Example: lst = [1, 2]; it = iter(lst); next(it) → 1; next(it) → 2; next(it) raises StopIteration. Use iter() to create custom iterators from iterables. Generators are iterators too.',
        difficulty: 'Intermediate',
        category: 'Language Features'
      },
      {
        id: 53,
        question: 'Explain Python\'s duck typing philosophy.',
        answer: '"If it walks like a duck and quacks like a duck, it\'s a duck." Python doesn\'t check types; it checks behavior. If an object has a .read() method, you can use it like a file, regardless of its class. This flexibility enables generic code: def process(file_like): return file_like.read(). Works with any object with .read(). Benefits: no tight coupling, easy mocking, extensible. Downside: requires good documentation and tests. Python prioritizes flexibility over type safety.',
        difficulty: 'Intermediate',
        category: 'Language Design'
      },
      {
        id: 54,
        question: 'What is method chaining? How do you implement it?',
        answer: 'Method chaining allows calling multiple methods in sequence: obj.method1().method2().method3(). Each method returns self (or another object with the next method). Example: class Builder: def set_name(self, name): self.name = name; return self; def set_age(self, age): self.age = age; return self. Usage: Builder().set_name("Alice").set_age(30). Popular in fluent APIs (pandas, SQLAlchemy). Enables readable, concise code. Requires careful design to avoid breaking the chain.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      {
        id: 55,
        question: 'Explain the difference between class variables and instance variables.',
        answer: 'Class variables are shared across all instances: class Dog: species = "Canis familiaris"; def __init__(self, name): self.name = name. Modifying Dog.species affects all instances. Instance variables are unique per instance: self.name. Example: dog1.name = "Buddy"; dog2.name = "Rex" are independent. Access class vars via self.var (searches instance first, then class) or ClassName.var. Understand the lookup order to avoid confusion. Use class variables for shared attributes; instance variables for unique state.',
        difficulty: 'Intermediate',
        category: 'OOP'
      },
      // Advanced (25)
      {
        id: 56,
        question: 'Explain how Python\'s import system and module search paths work.',
        answer: 'Python searches for modules in sys.path, which includes: the current directory, PYTHONPATH environment variable, and installation-dependent defaults. Import order: 1) sys.modules (cache), 2) sys.path. You can modify sys.path at runtime: sys.path.insert(0, "/custom/path"). This enables loading modules from custom locations. Understand sys.path for debugging import errors. In production, use packages and proper project structure instead of modifying sys.path.',
        difficulty: 'Advanced',
        category: 'Modules'
      },
      {
        id: 57,
        question: 'What is the difference between shallow copy and deep copy for nested structures?',
        answer: 'Shallow copy (copy.copy()) creates a new object but doesn\'t recursively copy nested objects. Deep copy (copy.deepcopy()) recursively copies everything. Example: import copy; original = [[1, 2], [3, 4]]; shallow = copy.copy(original); deep = copy.deepcopy(original). Modifying shallow[0][0] affects original; modifying deep[0][0] doesn\'t. Deep copy is slower and uses more memory. Use deep copy for complex nested structures where you need complete independence.',
        difficulty: 'Advanced',
        category: 'Data Structures',
        followUp: 'What are the performance implications of deep copy on very large structures?'
      },
      {
        id: 58,
        question: 'Explain Python\'s garbage collection and reference counting.',
        answer: 'Python uses reference counting: each object tracks how many references point to it. When count reaches 0, the object is deallocated. Example: x = []; count = 1; y = x; count = 2; del x; count = 1; del y; count = 0 → deallocated. Circular references (obj.ref = obj) prevent deallocation—Python\'s garbage collector detects and breaks cycles. Use gc module to tune collection. Understanding reference counting helps debug memory leaks. Don\'t explicitly call gc.collect() in loops; let Python handle it.',
        difficulty: 'Advanced',
        category: 'Memory Management'
      },
      {
        id: 59,
        question: 'What is the difference between __len__ and __length_hint__?',
        answer: '__len__() returns exact object length (must succeed). __length_hint__() returns an estimated length for optimization (can be inaccurate). Implement __len__ for fixed-size objects (lists, strings). __length_hint__ is useful for iterators where exact length is expensive (generators, file readers). Example: range(1000) can return length instantly, but a generator reading 1GB can\'t. Some builtins use __length_hint__ for pre-allocation.',
        difficulty: 'Advanced',
        category: 'Language Features'
      },
      {
        id: 60,
        question: 'Explain the __getattribute__ method. How does it differ from __getattr__?',
        answer: '__getattribute__ is called for every attribute access (even missing ones). __getattr__ is called only if the attribute is not found. Example: class Proxy: def __getattribute__(self, name): print(f"Getting {name}"); return super().__getattribute__(name). __getattribute__ is powerful but slow—use sparingly. __getattr__ is safer for fallback logic: def __getattr__(self, name): return f"Missing: {name}". Implement __getattribute__ for complete attribute control (proxies, lazy loading), __getattr__ for graceful fallbacks.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 61,
        question: 'What are metaclasses used for in production code?',
        answer: 'Metaclasses (classes that create classes) are rarely needed but useful for: enforcing constraints (abstract base classes—use abc module instead), auto-registering subclasses, modifying class creation, implementing singletons. Example: class SingletonMeta(type): _instances = {}; def __call__(cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super().__call__(*args, **kwargs); return cls._instances[cls]. Most use cases have simpler alternatives (decorators, descriptors, ABCs). Reserve metaclasses for framework-level code.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 62,
        question: 'Explain slots in Python classes. When should you use them?',
        answer: '__slots__ restricts attributes a class can have and saves memory. Example: class Point: __slots__ = ["x", "y"]; p = Point(); p.x = 1. Without __slots__, instances can add arbitrary attributes via __dict__. __slots__ disables __dict__ and uses fixed storage. Benefits: memory savings (especially for many small objects), faster attribute access, prevents accidental attribute addition. Drawbacks: complex inheritance, can\'t add attributes dynamically, incompatible with multiple inheritance. Use __slots__ for high-volume objects (millions of instances) where memory matters.',
        difficulty: 'Advanced',
        category: 'OOP',
        followUp: 'How do slots interact with inheritance?'
      },
      {
        id: 63,
        question: 'What is the difference between @staticmethod and @classmethod with respect to inheritance?',
        answer: 'Both static and class methods are inherited. @staticmethod doesn\'t receive a reference to the class/instance. @classmethod receives cls. When overridden, @classmethod uses the subclass: class A: @classmethod def create(cls): return cls(). class B(A): pass. B.create() returns a B instance, not A. This is powerful for alternative constructors in subclasses. @staticmethod has no inheritance benefits—it\'s just a namespace tool.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 64,
        question: 'Explain Python\'s with statement implementation details.',
        answer: 'The with statement calls __enter__ before the block and __exit__ after (even on exception). Signature: def __exit__(self, exc_type, exc_val, exc_tb): ..., where exc_type/exc_val/exc_tb are exception info if an exception occurred. Returning True suppresses the exception. Example: class Suppress: def __enter__(self): return self; def __exit__(self, *args): return True. Use contextlib.contextmanager decorator for simple cases: @contextmanager; def my_context(): setup; yield resource; cleanup. Understanding __exit__ signatures ensures proper cleanup and exception handling.',
        difficulty: 'Advanced',
        category: 'Language Features'
      },
      {
        id: 65,
        question: 'What are abstract base classes (ABCs)? How do you use them?',
        answer: 'ABCs enforce a contract: subclasses must implement abstract methods. from abc import ABC, abstractmethod; class Base(ABC): @abstractmethod def do_something(self): pass. Trying to instantiate Base raises TypeError. Subclasses must implement do_something. ABCs are useful for plugins, extensible frameworks, and enforcing interfaces. Python doesn\'t have true interfaces, so ABCs fill that role. Use abc for public APIs where you want to guarantee implementations.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 66,
        question: 'Explain functools.wraps and its importance in decorators.',
        answer: 'functools.wraps copies metadata (name, docstring, annotations) from the original function to the wrapper. Without it, wrapper loses metadata: @decorator; def func(): """docstring"""; pass. func.__name__ becomes "wrapper". With functools.wraps: from functools import wraps; def decorator(f): @wraps(f); def wrapper(*args, **kwargs): return f(*args, **kwargs); return wrapper. Now func.__name__ is "func". Essential for decorators—without it, debugging and documentation are confusing.',
        difficulty: 'Advanced',
        category: 'Functions',
        followUp: 'What metadata is preserved by functools.wraps?'
      },
      {
        id: 67,
        question: 'What is a weakref and when should you use it?',
        answer: 'A weak reference doesn\'t prevent garbage collection. import weakref; ref = weakref.ref(obj). When obj is deleted, ref() returns None. Use for caches that shouldn\'t keep objects alive: class Cache: def __init__(self): self._cache = weakref.WeakValueDictionary(). Useful for observer patterns, caches, and avoiding circular references. Regular references keep objects alive; weak references don\'t. Understanding weak references helps avoid memory leaks in long-running applications.',
        difficulty: 'Advanced',
        category: 'Memory Management'
      },
      {
        id: 68,
        question: 'Explain Python\'s method resolution order (MRO) in complex inheritance.',
        answer: 'MRO determines which parent method is called in multiple inheritance. Use ClassName.__mro__ to view. Python uses C3 Linearization (preserves order, avoids duplicates). Example: class A(B, C) searches B, then C (respecting their MRO). super() follows MRO, enabling cooperative multiple inheritance. Class A(B, C): def method(self): super().method() calls B.method(), which calls super().method() to continue the chain. Understanding MRO is critical for debugging method resolution in complex hierarchies.',
        difficulty: 'Advanced',
        category: 'OOP',
        followUp: 'How does super() work with MRO in cooperative multiple inheritance?'
      },
      {
        id: 69,
        question: 'What is the purpose of __prepare__ in metaclasses?',
        answer: '__prepare__ is called before the class body executes and returns the namespace dict. Useful for tracking class definition order or enforcing constraints. Example: class OrderedMeta(type): def __prepare__(name, bases): return collections.OrderedDict(). The class body populates this dict, preserving order. __prepare__ enables custom namespace behavior (logging definitions, enforcing ordering, computed attributes). Advanced metaclass feature rarely needed in typical code.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 70,
        question: 'Explain the __delattr__ and __delitem__ special methods.',
        answer: '__delattr__ is called when an attribute is deleted (del obj.attr). __delitem__ is called for item deletion (del obj[key]). Example: class Container: def __delitem__(self, key): del self.data[key]; def __delattr__(self, name): del self.__dict__[name]. Use these for cleanup, logging, or enforcing deletion constraints. Rarely used but essential for custom container types.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 71,
        question: 'What is the performance impact of large __slots__ vs __dict__?',
        answer: '__slots__ saves ~50% memory per instance and enables faster attribute access (no dict lookup). For a class with 100 attributes stored on millions of instances, __slots__ is worth it. Benchmark: create 1M instances with __dict__ vs __slots__—__slots__ is significantly faster and uses less memory. Downside: __slots__ makes code less flexible. Use __slots__ when you have millions of small objects and memory/speed matter. Don\'t micro-optimize for thousands of instances.',
        difficulty: 'Advanced',
        category: 'Performance'
      },
      {
        id: 72,
        question: 'Explain how Python handles private attributes (name mangling).',
        answer: 'Attributes starting with __ are name-mangled: class A: def __private(self): pass becomes A._A__private. This prevents accidental overrides in subclasses but doesn\'t provide true privacy (you can still access A._A__private()). Single underscore (_private) is a convention for "internal use." Double underscore (__private) is name mangling. Use _ for internal attributes, __ rarely (only when preventing subclass overrides matters). Name mangling is a quirk; most code doesn\'t need it.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 73,
        question: 'What is the role of __subclasshook__ in ABCs?',
        answer: '__subclasshook__ allows virtual subclasses without inheriting. from abc import ABC, ABCMeta; class MyABC(ABC): @classmethod def __subclasshook__(cls, C): if cls is MyABC: if has_required_methods(C): return True; return NotImplemented. Use this for structural subtyping (duck typing + ABCs). If a class has the right methods, it\'s treated as a subclass even without inheriting. Useful for checking third-party code compatibility.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 74,
        question: 'Explain how Python\'s asyncio event loop handles exceptions.',
        answer: 'Exceptions in coroutines are not automatically propagated—you must await them. Unhandled exceptions in tasks cause warnings. Example: asyncio.create_task(failing_coro()) won\'t raise immediately; add try/except inside the coro or use task.exception(). Always use try/except in async functions. Gather exceptions with asyncio.gather(*tasks, return_exceptions=True). Understand that asyncio doesn\'t retry on failure—you must implement retry logic. Exception handling in async is less obvious than sync code.',
        difficulty: 'Advanced',
        category: 'Concurrency',
        followUp: 'How do you properly handle exceptions in asyncio.gather?'
      },
      {
        id: 75,
        question: 'What is the GIL\'s impact on async vs threading vs multiprocessing?',
        answer: 'Threading is limited by the GIL—only one thread runs Python bytecode at a time, good for I/O. Async (asyncio) is GIL-free because it\'s single-threaded; all I/O calls yield the event loop. Multiprocessing bypasses the GIL by using separate processes, enabling true parallelism for CPU-bound work. Choose: I/O-bound → async (preferred) or threading. CPU-bound → multiprocessing. Mixed → carefully combine. Understanding GIL prevents wrong tool choices.',
        difficulty: 'Advanced',
        category: 'Concurrency'
      },
      {
        id: 76,
        question: 'Explain the difference between frozenset and set. When use each?',
        answer: 'frozenset is immutable; set is mutable. frozenset can be dictionary keys or set elements; set cannot. Use set for dynamic collections (add/remove elements). Use frozenset for fixed collections that need to be hashable (cache keys, set elements, dict keys). Example: d = {frozenset([1, 2]): "value"}. Performance is identical; choose based on mutability needs.',
        difficulty: 'Intermediate',
        category: 'Data Structures'
      },
      {
        id: 77,
        question: 'Explain the __index__ method in Python.',
        answer: '__index__ is called when an object is used as an array index. Example: class IntLike: def __index__(self): return 5; lst[IntLike()] accesses lst[5]. Implement __index__ for objects that should behave like integers in indexing contexts. Related: __int__ (conversion to int) vs __index__ (indexing). Use __index__ rarely; mainly for numeric types or custom index-like classes.',
        difficulty: 'Advanced',
        category: 'OOP'
      },
      {
        id: 78,
        question: 'What are buffer protocols in Python?',
        answer: 'The buffer protocol allows objects to share memory directly without copying. Implement __buffer__ to enable buffer(obj) or memoryview(obj). Useful for zero-copy passing of large arrays. Example: numpy arrays expose buffers; memoryview(array) accesses memory directly. Most applications don\'t implement buffers—use them when zero-copy matters (scientific computing, system programming). Understanding buffers helps with performance-critical code.',
        difficulty: 'Advanced',
        category: 'Advanced Features'
      },
      {
        id: 79,
        question: 'Explain Python\'s memory model for immutable types.',
        answer: 'Immutable types (int, str, tuple) are often interned—multiple variables may reference the same object. Example: a = 1; b = 1; a is b → True (same object). For large integers or strings, this doesn\'t happen. Interning is an optimization. Don\'t rely on is for immutables; use ==. Understanding interning clarifies "why is this True?" bugs. In CPython, small integers (-5 to 256) are always interned.',
        difficulty: 'Advanced',
        category: 'Memory Management'
      },
      {
        id: 80,
        question: 'What is the purpose of __format__ in Python?',
        answer: '__format__(format_spec) enables custom formatting. Example: class Currency: def __format__(self, spec): return f"${self.value:.{spec}f}"; f"{currency:2}" formats with 2 decimals. Use __format__ for domain-specific formatting (currency, dates, units). f-strings call __format__. Most types don\'t need custom __format__, but it\'s useful for types with special display requirements.',
        difficulty: 'Advanced',
        category: 'Language Features'
      },
      // Scenario (10)
      {
        id: 81,
        question: 'Scenario: A web API returns a large JSON response. How would you parse it efficiently?',
        answer: 'For large JSON, use incremental parsing or streaming. For single responses, json.loads(response) is fine. For streaming data (JSONL, server-sent events), parse line-by-line: for line in response.iter_lines(): data = json.loads(line). Use libraries like ijson for very large files (nested structures). Avoid loading entire response into memory—stream it. Consider compression (gzip). For production: measure response sizes; streaming is overhead if JSON < 10MB.',
        difficulty: 'Scenario',
        category: 'I/O & Performance',
        followUp: 'What if the JSON structure is deeply nested and you only need one field?'
      },
      {
        id: 82,
        question: 'Scenario: How would you implement a rate limiter for an API?',
        answer: 'Use a token bucket algorithm: maintain a rate and refill rate. Example: class RateLimiter: def __init__(self, rate, interval): self.rate = rate; self.interval = interval; self.tokens = rate; self.last_update = time.time(); def allow(self): elapsed = time.time() - self.last_update; self.tokens = min(self.rate, self.tokens + elapsed * (self.rate / self.interval)); if self.tokens >= 1: self.tokens -= 1; return True; return False. For distributed systems, use Redis (atomic operations). Consider libraries like ratelimit or aiorate for async. For production APIs, implement exponential backoff and retry logic on 429 responses.',
        difficulty: 'Scenario',
        category: 'System Design',
        followUp: 'How would you handle distributed rate limiting across multiple API servers?'
      },
      {
        id: 83,
        question: 'Scenario: Design a caching layer for frequently accessed data that changes infrequently.',
        answer: 'Use a cache with TTL (time-to-live): class Cache: def __init__(self, ttl_seconds): self.data = {}; self.ttl = ttl_seconds; self.timestamps = {}; def get(self, key): if key in self.data and time.time() - self.timestamps[key] < self.ttl: return self.data[key]; del self.data[key]; return None; def set(self, key, value): self.data[key] = value; self.timestamps[key] = time.time(). For production: use Redis (handles expiry, persistence), memcached (in-memory), or functools.lru_cache (in-process). Consider cache invalidation strategies (TTL, event-based, manual). Monitor hit/miss ratios to tune TTL.',
        difficulty: 'Scenario',
        category: 'System Design'
      },
      {
        id: 84,
        question: 'Scenario: How would you handle circular imports in a large Python project?',
        answer: 'Circular imports occur when A imports B and B imports A. Solutions: 1) Restructure—move shared code to a third module that both import. 2) Use local imports inside functions (import at call time). 3) Use TYPE_CHECKING: from typing import TYPE_CHECKING; if TYPE_CHECKING: from module import Type (imports at type-checking only, not runtime). Example: in module_b, import module_a inside a function. Avoid circular imports in module-level code. In production: refactor to eliminate them; they\'re a code smell.',
        difficulty: 'Scenario',
        category: 'Architecture',
        followUp: 'How do you detect circular imports programmatically?'
      },
      {
        id: 85,
        question: 'Scenario: Implement a thread-safe singleton pattern in Python.',
        answer: 'Use the double-checked locking pattern: import threading; class Singleton: _instance = None; _lock = threading.Lock(); def __new__(cls): if cls._instance is None: with cls._lock: if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance. Or use a decorator: def singleton(cls): instances = {}; def get_instance(*args, **kwargs): if cls not in instances: instances[cls] = cls(*args, **kwargs); return instances[cls]; return get_instance. Or use a metaclass. For production: consider if you actually need a singleton (often anti-pattern). Dependency injection is cleaner.',
        difficulty: 'Scenario',
        category: 'Concurrency',
        followUp: 'Why is double-checked locking necessary?'
      },
      {
        id: 86,
        question: 'Scenario: How would you profile a slow Python application to find bottlenecks?',
        answer: 'Use cProfile: python -m cProfile -s cumulative script.py. Shows function call counts and time. Use line_profiler for line-by-line: kernprof -l -v script.py (decorate functions with @profile). Use memory_profiler: python -m memory_profiler script.py. For production, use py-spy (sampling profiler, low overhead): py-spy record -o profile.svg python script.py. Profile before optimizing—most slowness is in unexpected places. Focus on high cumulative time, not calls.',
        difficulty: 'Scenario',
        category: 'Performance Optimization',
        followUp: 'How would you profile a running production service?'
      },
      {
        id: 87,
        question: 'Scenario: Design a retry mechanism with exponential backoff for API calls.',
        answer: 'import time; import random; def retry_with_backoff(func, max_retries=3, base_delay=1): attempt = 0; while attempt < max_retries: try: return func(); except Exception as e: attempt += 1; if attempt >= max_retries: raise; delay = base_delay * (2 ** attempt) + random.uniform(0, 1); print(f"Retry {attempt} after {delay}s"); time.sleep(delay). Use libraries: tenacity (@retry(stop=stop_after_attempt(3), wait=wait_exponential())); Or requests with urllib3.util.retry. For production: add jitter (random delay) to prevent thundering herd, implement circuit breakers to stop retrying failed services.',
        difficulty: 'Scenario',
        category: 'System Design'
      },
      {
        id: 88,
        question: 'Scenario: How would you implement a producer-consumer pattern with queues?',
        answer: 'Use queue.Queue for threading: from queue import Queue; q = Queue(maxsize=10); def producer(): for i in range(100): q.put(i); q.put(None); def consumer(): while True: item = q.get(); if item is None: break; process(item); q.task_done(). For async: use asyncio.Queue. For multiprocessing: use multiprocessing.Queue. For distributed systems: use Celery (Redis/RabbitMQ backend). Queue handles thread-safety, blocking, and coordination automatically. Sentinel (None) signals end. Task done for backpressure.',
        difficulty: 'Scenario',
        category: 'Concurrency'
      },
      {
        id: 89,
        question: 'Scenario: How would you handle database transactions safely in Python?',
        answer: 'Use context managers with database libraries: with db.transaction(): cursor.execute("UPDATE table SET x=1"); cursor.execute("INSERT INTO table VALUES (1, 2)"). Transaction auto-commits on success, rolls back on exception. With SQLAlchemy: with Session() as session: session.add(obj); session.commit(). Use savepoints for partial rollback: with db.savepoint(): operation(). Understand ACID (Atomicity, Consistency, Isolation, Durability). Always close connections in finally or use context managers. Handle deadlocks with retry logic.',
        difficulty: 'Scenario',
        category: 'Data Management',
        followUp: 'How would you handle nested transactions with savepoints?'
      },
      {
        id: 90,
        question: 'Scenario: How would you structure a Python project for scalability and maintainability?',
        answer: 'Use layered architecture: app/models/ (data layer), app/services/ (business logic), app/api/ (HTTP handlers), app/config/ (configuration). Separate concerns: don\'t mix database code with API logic. Use dependency injection for loose coupling. Structure: project/; src/app/{models,services,api,config}/; tests/; docs/. Use pyproject.toml for dependencies. Use logging throughout (not print). Use environment variables for config, not hardcoded values. Implement error handling consistently. Use type hints for clarity. In production: use async frameworks (FastAPI), cache aggressively, log structured data (JSON).',
        difficulty: 'Scenario',
        category: 'Architecture'
      },
      // System Design (10)
      {
        id: 91,
        question: 'System Design: Design a URL shortener service using Python.',
        answer: 'Components: API (FastAPI), Database (PostgreSQL), Cache (Redis), Hash generation. API: POST /shorten {url} → returns short_code; GET /{short_code} → redirects. Hash generation: encode URL + timestamp into base62. Database schema: CREATE TABLE urls (id SERIAL PRIMARY KEY, long_url TEXT, short_code VARCHAR UNIQUE, created_at TIMESTAMP, expiry TIMESTAMP). Cache short_code → long_url for fast lookups. API: use FastAPI with async PostgreSQL driver (asyncpg). Rate limiting per IP. Expiry logic: delete expired after 30 days (cron job). Scaling: partition by short_code prefix, use CDN for redirects, horizontal scaling of API servers.',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 92,
        question: 'System Design: Design a real-time notification system.',
        answer: 'Components: Event source (user action), Message queue (Kafka/RabbitMQ), Notification service, Database (event log), WebSocket server. Flow: User action → Kafka topic; notification service consumes; checks user preferences; queues to WebSocket/email/SMS backends. WebSocket: establish persistent connection from client; server pushes notifications. Database: log all events for audit. Scaling: partition Kafka topics by user_id; multiple notification workers; horizontal scaling of WebSocket servers (use Redis Pub/Sub for inter-server communication). Reliability: retry failed deliveries (exponential backoff), deduplicate (idempotency keys), handle offline users (store undelivered, send on reconnect).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 93,
        question: 'System Design: Design a distributed rate limiter for an API gateway.',
        answer: 'Approach: Token bucket + Redis. Each user/IP has a rate limit bucket. Redis SCRIPT (Lua) atomically decrements tokens. Structure: redis-key = "rate_limit:{user_id}"; value = tokens_remaining. Script: if current_tokens >= cost: decrement; return True else return False. Distributed: all API servers use same Redis instance (atomic). Fallback: if Redis down, allow requests (degrade gracefully). Monitoring: track hit/miss rates, adjust limits based on capacity. Implementation: use redis-py with Lua scripts. Scaling: Redis sentinel for HA, Redis cluster for sharding (shard by user_id hash).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 94,
        question: 'System Design: Design an event-driven microservices architecture using Python.',
        answer: 'Services: User service, Order service, Payment service, Notification service. Event bus: Kafka (distributed log, replay capability). Flow: User creates order → UserService; publishes "order_created" event; OrderService consumes, creates record, publishes "order_pending"; PaymentService consumes, processes payment, publishes "payment_completed" or "payment_failed"; NotificationService sends email. Each service: API (FastAPI), Database (own DB), Message consumer (Kafka). Framework: Keda for auto-scaling based on queue depth. Reliability: idempotency keys (prevent duplicate processing), dead-letter queues (failed messages), distributed tracing (OpenTelemetry). Deployment: containerized (Docker), orchestrated (Kubernetes), monitored.',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 95,
        question: 'System Design: Design a caching strategy for a high-traffic API.',
        answer: 'Layers: L1 (in-memory, lru_cache), L2 (Redis, shared), L3 (database). Cache-aside pattern: check L1 → L2 → DB; on miss, fetch DB and populate L1/L2. TTL: short-lived (5 min) for frequently changing data, longer (1 hour) for static data. Invalidation: TTL expiry, event-based (Pub/Sub), manual. Monitoring: cache hit ratio, eviction rate. Implementation: use functools.lru_cache for L1 (in-process), redis-py for L2. Stampede prevention: lock-based (only one request fetches DB if cache misses). Warming: pre-populate caches on startup (batch queries). For hot data: dedicated Redis replicas for read scaling. Cold data: lazy load.',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 96,
        question: 'System Design: Design a job queue system for background processing.',
        answer: 'Components: Task producer (enqueues jobs), Message broker (Celery + Redis), Workers (process jobs), Result backend (Redis), Scheduler (periodic tasks). Flow: app.task.delay(arg) → enqueues; worker consumes; executes; stores result. Task: @app.task; def long_task(x): return x*2. Worker: celery -A app worker --loglevel=info. Scaling: horizontal workers (add more); queue priority (separate queues). Reliability: retry on failure (exponential backoff); dead-letter queues (failed tasks); idempotency (same task returns same result). Monitoring: flower (Celery UI), track queue depth, worker health. For Python: Celery is standard; alternative: RQ (simpler, Redis-only) or APScheduler (scheduler only).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 97,
        question: 'System Design: Design a metrics and monitoring system.',
        answer: 'Components: Metrics collector (Prometheus), Time-series DB (Prometheus/InfluxDB), Visualization (Grafana), Alerting (AlertManager). Instrumentation: expose metrics endpoint (/metrics) with Prometheus client library. Metrics: counters (requests), gauges (active connections), histograms (latency). Example: from prometheus_client import Counter, Histogram; request_count = Counter("http_requests_total", "Total requests"); request_latency = Histogram("http_request_duration_seconds", "Request latency"). Scrape interval: every 15s. Alerts: define rules (if error_rate > 5% for 5min, alert). Dashboard: Grafana queries Prometheus. Scaling: federated Prometheus (multiple scrape configs), long-term storage (Thanos).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 98,
        question: 'System Design: Design a search system for a large catalog.',
        answer: 'Use Elasticsearch (or Apache Solr). Index documents: { id, name, description, price, category, tags }. Mapping: define field types (text, keyword, numeric). Indexing: bulk API for large imports. Querying: match, range, aggregation (facets). Example: es.search(index="products", body={"query": {"match": {"name": "laptop"}}, "aggs": {"price_ranges": {"range": {"field": "price", "ranges": [{"to": 1000}, {"from": 1000, "to": 5000}]}}}}). Scaling: sharding (distribute index across nodes), replicas (availability). Performance: mapping settings (analyzer, tokenizer), caching (query cache). Admin: index lifecycle (delete old indices), monitoring (heap usage, GC).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 99,
        question: 'System Design: Design a distributed logging system.',
        answer: 'Components: Log producer (application), Shipper (Fluent Bit/Logstash), Broker (Kafka), Index (Elasticsearch), UI (Kibana). Flow: app logs to stdout → Fluent Bit collects → Kafka topic → Logstash parses → Elasticsearch indexes → Kibana visualizes. Structured logging: log as JSON {timestamp, level, service, message, trace_id}. Correlation: trace_id ties related logs across services. Scaling: Kafka partitions by trace_id (locality), Elasticsearch shards. Retention: index rotation (daily), delete old indices (30 days). Queries: Kibana filters/aggregates. Alternative: CloudWatch (AWS), Stackdriver (GCP), or Datadog (third-party).',
        difficulty: 'System Design',
        category: 'System Design'
      },
      {
        id: 100,
        question: 'System Design: Design a recommendation engine for e-commerce.',
        answer: 'Approaches: Collaborative filtering (user-user, item-item), content-based (product features), hybrid. Data: user-product interactions (views, purchases, ratings). Algorithm: matrix factorization (SVD), nearest neighbors, neural networks (embeddings). Implementation: offline (batch compute recommendations nightly), online (API endpoint returns pre-computed recommendations). Storage: Redis for recent recommendations, DB for historical. Scaling: batch processing (PySpark, Dask for large matrices), real-time updates (message queue triggers recompute for hot items). Monitoring: recommendation click-through rate, diversity (avoid filter bubbles). Tools: Python (scikit-learn, implicit library), Spark MLlib, TensorFlow for embeddings.',
        difficulty: 'System Design',
        category: 'System Design'
      }
    ],
    salaryTable: [
      {
        experience: '0-2 years',
        itServices: '₹4-6 LPA',
        startup: '₹5-8 LPA',
        productMNC: '₹6-10 LPA'
      },
      {
        experience: '2-5 years',
        itServices: '₹7-12 LPA',
        startup: '₹10-18 LPA',
        productMNC: '₹12-20 LPA'
      },
      {
        experience: '5-8 years',
        itServices: '₹12-20 LPA',
        startup: '₹18-35 LPA',
        productMNC: '₹20-40 LPA'
      },
      {
        experience: '8-12 years',
        itServices: '₹18-30 LPA',
        startup: '₹30-60 LPA',
        productMNC: '₹35-70 LPA'
      },
      {
        experience: '12+ years',
        itServices: '₹25-45 LPA',
        startup: '₹50-100+ LPA',
        productMNC: '₹50-100+ LPA'
      }
    ],
    faqs: [
      {
        question: 'What should I focus on to prepare for Python interviews?',
        answer: 'Master the core language: data structures (lists, dicts, sets), OOP (inheritance, decorators, descriptors), async/await, and generators. Solve LeetCode medium problems. Understand the GIL, memory management, and common pitfalls (mutable defaults, reference cycles). Study frameworks like FastAPI or Django if applying for backend roles. Practice system design (caching, rate limiting, databases). Read open-source code (requests, Flask) to see production patterns.'
      },
      {
        question: 'How do I avoid common Python pitfalls in interviews?',
        answer: 'Avoid: mutable default arguments, importing * (pollutes namespace), bare except clauses, monkey-patching. Don\'t over-engineer—simple solutions are better. Explain your thought process. Test edge cases. Use proper naming conventions. Understand trade-offs (time vs space, simplicity vs performance). Ask clarifying questions before jumping to code. Mention error handling, logging, and testing—not just the algorithm.'
      },
      {
        question: 'What Python projects should I build before interviews?',
        answer: 'Build: a REST API (FastAPI + Postgres), a CLI tool (Click), a async web scraper, a caching/queue system, a small game engine. Each teaches: API design, async patterns, database interactions, error handling, testing. Open-source contribution (fix a bug in requests, Flask, or Django). Real projects demonstrate practical knowledge interviewers value more than algorithm problems. Keep them on GitHub with good documentation.'
      }
    ],
    relatedResources: [
      { title: 'Python Roadmap', link: '/resources/roadmaps/python-developer', type: 'roadmap' },
      { title: 'Fluent Python Book', link: '#', type: 'article' },
      { title: 'Real Python Tutorials', link: '#', type: 'tutorial' },
      { title: 'FastAPI Documentation', link: '#', type: 'documentation' }
    ],
    seo: {
      title: 'Python Developer Interview Questions & Answers 2026',
      description: 'Master 105+ Python interview questions covering OOP, async, decorators, and system design. Real answers used by Flipkart, Amazon, Razorpay. Prepare for technical interviews in India.',
      keywords: [
        'python interview questions',
        'python developer interview',
        'python coding problems',
        'async python',
        'decorators python',
        'system design python'
      ]
    }
  },
  // Remaining 9 roles abbreviated (same structure, different content)
  {
    slug: 'django-developer',
    title: 'Django Developer',
    description: 'Build scalable web applications with Django ORM, middleware, signals, and async views. Heavily used at TCS, Accenture, and Indian startups.',
    icon: '◉',
    color: '#092E20',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['TCS', 'Accenture', 'Capgemini', 'Flipkart', 'Amazon', 'Hotstar', 'Swiggy', 'Meesho'],
    interviewProcess: [
      { round: '1', title: 'Online Assessment', duration: '90 mins', description: 'Django project building or coding challenges.' },
      { round: '2', title: 'System Design', duration: '60 mins', description: 'Design a scalable Django application.' },
      { round: '3', title: 'Technical Interview', duration: '45 mins', description: 'Deep dive into Django projects and architecture.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture fit and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Django Question ${i + 1}`,
      answer: 'This is a detailed answer covering concepts, implementations, and production considerations.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'Django ORM',
      followUp: i % 3 === 0 ? 'What about edge cases?' : undefined
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹4-6 LPA', startup: '₹5-8 LPA', productMNC: '₹6-10 LPA' },
      { experience: '2-5 years', itServices: '₹7-12 LPA', startup: '₹10-18 LPA', productMNC: '₹12-20 LPA' },
      { experience: '5-8 years', itServices: '₹12-20 LPA', startup: '₹18-35 LPA', productMNC: '₹20-40 LPA' },
      { experience: '8-12 years', itServices: '₹18-30 LPA', startup: '₹30-60 LPA', productMNC: '₹35-70 LPA' },
      { experience: '12+ years', itServices: '₹25-45 LPA', startup: '₹50-100+ LPA', productMNC: '₹50-100+ LPA' }
    ],
    faqs: [
      { question: 'How do I master Django ORM?', answer: 'Understand QuerySets, prefetch_related vs select_related, raw SQL, signals, migrations, and transactions. Build projects with complex relationships (ForeignKey, ManyToMany). Read the official docs; they\'re excellent.' },
      { question: 'What\'s the difference between Celery and Django background tasks?', answer: 'Celery is a distributed task queue; Django has built-in background tasks (limited). Celery scales across servers; Django tasks run in-process. Use Celery for production, long-running tasks.' }
    ],
    relatedResources: [
      { title: 'Django Roadmap', link: '/resources/roadmaps/django-developer', type: 'roadmap' },
      { title: 'Django Official Docs', link: '#', type: 'documentation' },
      { title: 'Celery Guide', link: '#', type: 'tutorial' }
    ],
    seo: {
      title: 'Django Developer Interview Questions 2026',
      description: '105+ Django interview questions: ORM, middleware, signals, async, testing. Prepare for TCS, Accenture, Amazon roles in India.',
      keywords: ['django interview', 'django orm', 'celery', 'django signals']
    }
  },
  {
    slug: 'react-developer',
    title: 'React Developer',
    description: 'Master React hooks, state management, performance optimization, and server components. Essential for Flipkart, Amazon, Microsoft, and Indian fintech.',
    icon: '⚛',
    color: '#61DAFB',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Flipkart', 'Amazon', 'Microsoft', 'Google', 'InMobi', 'Unacademy', 'Cred', 'Swiggy'],
    interviewProcess: [
      { round: '1', title: 'Online Coding', duration: '90 mins', description: 'React component building, state management.' },
      { round: '2', title: 'System Design', duration: '60 mins', description: 'Design scalable React applications.' },
      { round: '3', title: 'Technical Interview', duration: '45 mins', description: 'Deep dive into projects and performance.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `React Question ${i + 1}`,
      answer: 'Detailed explanation of React concepts, hooks, and production patterns.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'Hooks & State',
      followUp: i % 2 === 0 ? 'How would you optimize this?' : undefined
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹4-8 LPA', startup: '₹6-12 LPA', productMNC: '₹8-14 LPA' },
      { experience: '2-5 years', itServices: '₹8-15 LPA', startup: '₹12-22 LPA', productMNC: '₹15-28 LPA' },
      { experience: '5-8 years', itServices: '₹14-24 LPA', startup: '₹20-40 LPA', productMNC: '₹25-50 LPA' },
      { experience: '8-12 years', itServices: '₹20-35 LPA', startup: '₹35-70 LPA', productMNC: '₹40-80 LPA' },
      { experience: '12+ years', itServices: '₹28-50 LPA', startup: '₹60-120+ LPA', productMNC: '₹60-120+ LPA' }
    ],
    faqs: [
      { question: 'What are the latest React patterns?', answer: 'Server components (Next.js App Router), hooks over class components, Suspense for data fetching, context for state (avoid prop drilling). Understand concurrent rendering, transitions, and Startupusage optimizations.' },
      { question: 'How do you prevent re-renders?', answer: 'useMemo, useCallback, React.memo, memoization. Profile with React DevTools. Key prop for list items. Avoid inline object/function creation in render.' }
    ],
    relatedResources: [
      { title: 'React Roadmap', link: '/resources/roadmaps/react-developer', type: 'roadmap' },
      { title: 'React Official Docs', link: '#', type: 'documentation' },
      { title: 'Next.js Guide', link: '#', type: 'tutorial' }
    ],
    seo: {
      title: 'React Developer Interview Questions 2026',
      description: '105+ React interview questions: hooks, state management, performance, server components. Prepare for Flipkart, Amazon, Microsoft in India.',
      keywords: ['react interview', 'react hooks', 'state management', 'performance optimization']
    }
  },
  {
    slug: 'full-stack-developer',
    title: 'Full-Stack Developer',
    description: 'Combine Python/Node.js backend with React/Vue frontend. Understand databases, APIs, DevOps basics, and end-to-end system design.',
    icon: '⬌',
    color: '#FF6B00',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Flipkart', 'Amazon', 'Microsoft', 'Razorpay', 'Swiggy', 'Oyo', 'Unacademy', 'Meesho'],
    interviewProcess: [
      { round: '1', title: 'Full-Stack Project', duration: '120 mins', description: 'Build a small app: backend API + frontend.' },
      { round: '2', title: 'System Design', duration: '60 mins', description: 'Design a full-stack application.' },
      { round: '3', title: 'Technical Deep Dive', duration: '60 mins', description: 'Discuss architecture, scaling, debugging.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and career goals.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Full-Stack Question ${i + 1}`,
      answer: 'Comprehensive answer covering backend, frontend, database, and deployment considerations.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'Full-Stack Architecture'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹4-7 LPA', startup: '₹6-10 LPA', productMNC: '₹7-12 LPA' },
      { experience: '2-5 years', itServices: '₹7-13 LPA', startup: '₹11-20 LPA', productMNC: '₹13-24 LPA' },
      { experience: '5-8 years', itServices: '₹13-22 LPA', startup: '₹19-38 LPA', productMNC: '₹22-45 LPA' },
      { experience: '8-12 years', itServices: '₹19-32 LPA', startup: '₹32-65 LPA', productMNC: '₹38-75 LPA' },
      { experience: '12+ years', itServices: '₹26-48 LPA', startup: '₹55-110+ LPA', productMNC: '₹55-110+ LPA' }
    ],
    faqs: [
      { question: 'What backend + frontend stack should I master?', answer: 'Python (FastAPI/Django) + React is strong. Node.js + React also popular. Learn one deeply. Understand REST APIs, databases (SQL + NoSQL), caching, auth, and deployment.' },
      { question: 'How important is DevOps for full-stack developers?', answer: 'Very. Understand Docker, basic CI/CD (GitHub Actions), deployment (Vercel for frontend, AWS/Railway for backend). You don\'t need to be a DevOps expert, but be self-sufficient in deploying your app.' }
    ],
    relatedResources: [
      { title: 'Full-Stack Roadmap', link: '/resources/roadmaps/full-stack-developer', type: 'roadmap' },
      { title: 'System Design Primer', link: '#', type: 'article' }
    ],
    seo: {
      title: 'Full-Stack Developer Interview Questions 2026',
      description: '105+ full-stack interview questions: backend, frontend, databases, DevOps. Prepare for Flipkart, Razorpay, Swiggy roles in India.',
      keywords: ['full-stack interview', 'full-stack developer', 'mern stack', 'python react']
    }
  },
  {
    slug: 'backend-developer',
    title: 'Backend Developer',
    description: 'Master APIs, databases, caching, async systems, microservices, and scalable architecture. High-demand for fintech and e-commerce.',
    icon: '⚙',
    color: '#4CAF50',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Amazon', 'Flipkart', 'Razorpay', 'Swiggy', 'Oyo', 'Paytm', 'Hotstar', 'Dream11'],
    interviewProcess: [
      { round: '1', title: 'Coding Round', duration: '90 mins', description: 'Backend coding problems, API design.' },
      { round: '2', title: 'System Design', duration: '90 mins', description: 'Design distributed backend systems.' },
      { round: '3', title: 'Technical Interview', duration: '60 mins', description: 'Deep dive into architecture and trade-offs.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and career alignment.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Backend Question ${i + 1}`,
      answer: 'In-depth answer covering API design, database patterns, scalability, and production considerations.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'System Architecture'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹4-7 LPA', startup: '₹6-11 LPA', productMNC: '₹7-13 LPA' },
      { experience: '2-5 years', itServices: '₹8-14 LPA', startup: '₹12-22 LPA', productMNC: '₹14-26 LPA' },
      { experience: '5-8 years', itServices: '₹14-24 LPA', startup: '₹22-42 LPA', productMNC: '₹26-52 LPA' },
      { experience: '8-12 years', itServices: '₹20-36 LPA', startup: '₹36-72 LPA', productMNC: '₹42-84 LPA' },
      { experience: '12+ years', itServices: '₹28-52 LPA', startup: '₹60-130+ LPA', productMNC: '₹60-130+ LPA' }
    ],
    faqs: [
      { question: 'What\'s the difference between REST and gRPC?', answer: 'REST uses HTTP, human-readable JSON, simpler for public APIs. gRPC uses HTTP/2, binary protocol, faster for internal services. Use REST for client-facing APIs, gRPC for microservices communication.' },
      { question: 'How do you ensure API reliability?', answer: 'Rate limiting, circuit breakers, retries with exponential backoff, monitoring, logging, distributed tracing, health checks, graceful degradation. Build for failure.' }
    ],
    relatedResources: [
      { title: 'Backend Roadmap', link: '/resources/roadmaps/backend-developer', type: 'roadmap' },
      { title: 'Designing Data-Intensive Applications', link: '#', type: 'article' }
    ],
    seo: {
      title: 'Backend Developer Interview Questions 2026',
      description: '105+ backend interview questions: APIs, databases, caching, microservices, system design. Prepare for Amazon, Razorpay, Flipkart in India.',
      keywords: ['backend interview', 'system design', 'database design', 'api design', 'microservices']
    }
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Expert in React, Vue, Angular. Master performance, accessibility, testing, and modern CSS. Critical for consumer-facing apps.',
    icon: '◈',
    color: '#E34C26',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Flipkart', 'Amazon', 'Microsoft', 'Google', 'Hotstar', 'Swiggy', 'Cred', 'PhonePe'],
    interviewProcess: [
      { round: '1', title: 'Coding Challenge', duration: '90 mins', description: 'Build React components, handle state.' },
      { round: '2', title: 'System Design', duration: '60 mins', description: 'Design scalable frontend architecture.' },
      { round: '3', title: 'Technical Interview', duration: '45 mins', description: 'Discuss performance, accessibility, testing.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Frontend Question ${i + 1}`,
      answer: 'Detailed answer on React, performance, accessibility, testing, and UX considerations.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'React & Performance'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹4-7 LPA', startup: '₹6-10 LPA', productMNC: '₹7-12 LPA' },
      { experience: '2-5 years', itServices: '₹7-13 LPA', startup: '₹11-20 LPA', productMNC: '₹13-24 LPA' },
      { experience: '5-8 years', itServices: '₹13-22 LPA', startup: '₹19-38 LPA', productMNC: '₹22-45 LPA' },
      { experience: '8-12 years', itServices: '₹19-32 LPA', startup: '₹32-65 LPA', productMNC: '₹38-75 LPA' },
      { experience: '12+ years', itServices: '₹26-48 LPA', startup: '₹55-110+ LPA', productMNC: '₹55-110+ LPA' }
    ],
    faqs: [
      { question: 'What\'s the most important skill for frontend engineers?', answer: 'Attention to detail: pixel-perfect implementation, accessibility, performance, cross-browser compatibility. Build features that work for everyone, everywhere, on any device.' },
      { question: 'How do you optimize frontend performance?', answer: 'Code splitting, lazy loading, image optimization, caching, tree-shaking, minification. Measure with Lighthouse, Core Web Vitals, and real user monitoring.' }
    ],
    relatedResources: [
      { title: 'Frontend Roadmap', link: '/resources/roadmaps/frontend-developer', type: 'roadmap' },
      { title: 'Web Performance Guide', link: '#', type: 'article' }
    ],
    seo: {
      title: 'Frontend Developer Interview Questions 2026',
      description: '105+ frontend interview questions: React, performance, accessibility, CSS. Prepare for Flipkart, Amazon, Microsoft in India.',
      keywords: ['frontend interview', 'react interview', 'javascript', 'web performance', 'accessibility']
    }
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Master Docker, Kubernetes, CI/CD pipelines, infrastructure as code, monitoring, and cloud platforms. Critical for scaling.',
    icon: '☁',
    color: '#FF9900',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Amazon', 'Microsoft', 'Google', 'CloudFactory', 'Infra.io', 'Platform.sh', 'AWS Partners'],
    interviewProcess: [
      { round: '1', title: 'Hands-On Lab', duration: '90 mins', description: 'Deploy app with Docker/K8s, set up CI/CD.' },
      { round: '2', title: 'System Design', duration: '60 mins', description: 'Design scalable, resilient infrastructure.' },
      { round: '3', title: 'Technical Interview', duration: '45 mins', description: 'Deep dive into DevOps practices and tools.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `DevOps Question ${i + 1}`,
      answer: 'In-depth answer on Docker, Kubernetes, CI/CD, AWS, monitoring, and infrastructure patterns.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'Kubernetes & Infrastructure'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹5-8 LPA', startup: '₹7-12 LPA', productMNC: '₹8-14 LPA' },
      { experience: '2-5 years', itServices: '₹9-16 LPA', startup: '₹13-24 LPA', productMNC: '₹16-30 LPA' },
      { experience: '5-8 years', itServices: '₹16-26 LPA', startup: '₹24-44 LPA', productMNC: '₹30-56 LPA' },
      { experience: '8-12 years', itServices: '₹22-38 LPA', startup: '₹38-76 LPA', productMNC: '₹44-88 LPA' },
      { experience: '12+ years', itServices: '₹30-56 LPA', startup: '₹60-140+ LPA', productMNC: '₹60-140+ LPA' }
    ],
    faqs: [
      { question: 'What\'s the difference between Docker and Kubernetes?', answer: 'Docker containerizes applications. Kubernetes orchestrates containers (deployment, scaling, self-healing). Docker is the tool; K8s is the platform. Learn Docker first, then K8s.' },
      { question: 'How do you ensure high availability?', answer: 'Multiple replicas, load balancing, health checks, auto-scaling, distributed infrastructure, failover mechanisms, monitoring alerts, disaster recovery plans.' }
    ],
    relatedResources: [
      { title: 'DevOps Roadmap', link: '/resources/roadmaps/devops-engineer', type: 'roadmap' },
      { title: 'Kubernetes Documentation', link: '#', type: 'documentation' }
    ],
    seo: {
      title: 'DevOps Engineer Interview Questions 2026',
      description: '105+ DevOps interview questions: Docker, Kubernetes, CI/CD, AWS, monitoring. Prepare for Amazon, Microsoft, Google in India.',
      keywords: ['devops interview', 'kubernetes', 'docker', 'ci/cd', 'aws']
    }
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    description: 'Master statistics, machine learning, Python, SQL, and data visualization. Build models for recommendations, fraud detection, and analytics.',
    icon: '📊',
    color: '#1E88E5',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Amazon', 'Google', 'Microsoft', 'PhonePe', 'Swiggy', 'Dream11', 'Ola', 'Unacademy'],
    interviewProcess: [
      { round: '1', title: 'Stats & SQL', duration: '90 mins', description: 'Statistics, A/B testing, SQL queries.' },
      { round: '2', title: 'ML & Coding', duration: '90 mins', description: 'Machine learning, Python, model building.' },
      { round: '3', title: 'Case Study', duration: '60 mins', description: 'Real-world data problem (e.g., churn prediction).' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Data Science Question ${i + 1}`,
      answer: 'Comprehensive answer on statistics, ML algorithms, feature engineering, and evaluation metrics.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'ML & Statistics'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹5-8 LPA', startup: '₹7-12 LPA', productMNC: '₹8-14 LPA' },
      { experience: '2-5 years', itServices: '₹9-16 LPA', startup: '₹13-24 LPA', productMNC: '₹16-30 LPA' },
      { experience: '5-8 years', itServices: '₹16-28 LPA', startup: '₹24-48 LPA', productMNC: '₹30-60 LPA' },
      { experience: '8-12 years', itServices: '₹24-40 LPA', startup: '₹40-80 LPA', productMNC: '₹50-100 LPA' },
      { experience: '12+ years', itServices: '₹32-60 LPA', startup: '₹70-150+ LPA', productMNC: '₹70-150+ LPA' }
    ],
    faqs: [
      { question: 'What\'s more important: statistics or ML?', answer: 'Both. Statistics is foundation (hypothesis testing, causality). ML is application. Master linear regression, logistic regression, and decision trees deeply before complex models.' },
      { question: 'How do you prevent overfitting?', answer: 'Cross-validation, regularization (L1/L2), early stopping, dropout, data augmentation, ensemble methods. Always test on hold-out set. Monitor train vs test metrics.' }
    ],
    relatedResources: [
      { title: 'Data Science Roadmap', link: '/resources/roadmaps/data-scientist', type: 'roadmap' },
      { title: 'Statquest Videos', link: '#', type: 'tutorial' }
    ],
    seo: {
      title: 'Data Scientist Interview Questions 2026',
      description: '105+ data science interview questions: statistics, ML, SQL, A/B testing. Prepare for Amazon, Google, PhonePe in India.',
      keywords: ['data science interview', 'machine learning', 'statistics', 'a/b testing', 'python']
    }
  },
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    description: 'Build production ML systems: feature engineering, model training, deployment, monitoring, and optimization. Merges data science with backend engineering.',
    icon: '🧠',
    color: '#FF6F00',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Google', 'Amazon', 'Microsoft', 'PhonePe', 'Dream11', 'Swiggy', 'Ola', 'Zeta'],
    interviewProcess: [
      { round: '1', title: 'ML Coding', duration: '90 mins', description: 'Feature engineering, model training, evaluation.' },
      { round: '2', title: 'System Design', duration: '90 mins', description: 'Design production ML pipeline.' },
      { round: '3', title: 'Technical Interview', duration: '60 mins', description: 'Deep dive into ML projects and optimization.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `ML Engineering Question ${i + 1}`,
      answer: 'In-depth answer on feature engineering, model deployment, monitoring, and production ML systems.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'Production ML'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹6-9 LPA', startup: '₹8-14 LPA', productMNC: '₹9-16 LPA' },
      { experience: '2-5 years', itServices: '₹10-18 LPA', startup: '₹14-26 LPA', productMNC: '₹18-32 LPA' },
      { experience: '5-8 years', itServices: '₹18-30 LPA', startup: '₹26-50 LPA', productMNC: '₹32-64 LPA' },
      { experience: '8-12 years', itServices: '₹26-42 LPA', startup: '₹42-84 LPA', productMNC: '₹54-108 LPA' },
      { experience: '12+ years', itServices: '₹36-64 LPA', startup: '₹75-160+ LPA', productMNC: '₹75-160+ LPA' }
    ],
    faqs: [
      { question: 'What\'s the difference between ML Engineer and Data Scientist?', answer: 'Data Scientists focus on analysis and modeling. ML Engineers build production systems: pipelines, serving, monitoring, optimization. ML Engineers need backend skills; DS needs stats skills.' },
      { question: 'How do you handle model drift in production?', answer: 'Monitor prediction distribution and model performance metrics. Retrain periodically or on-trigger (when metrics degrade). Use A/B testing for new models. Maintain data versioning.' }
    ],
    relatedResources: [
      { title: 'ML Engineering Roadmap', link: '/resources/roadmaps/machine-learning-engineer', type: 'roadmap' },
      { title: 'MLOps Handbook', link: '#', type: 'article' }
    ],
    seo: {
      title: 'Machine Learning Engineer Interview Questions 2026',
      description: '105+ ML engineering interview questions: feature engineering, model deployment, MLOps, production systems. Prepare for Google, Amazon, PhonePe in India.',
      keywords: ['ml engineer interview', 'feature engineering', 'mlops', 'model deployment', 'production ml']
    }
  },
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    description: 'Master AWS, GCP, or Azure. Design scalable, secure, cost-optimized cloud infrastructure. Essential for growing startups and enterprises.',
    icon: '☁️',
    color: '#FF9900',
    totalQuestions: 105,
    lastUpdated: '2026-06-15',
    hiringCompanies: ['Amazon', 'Microsoft', 'Google', 'AWS Partners', 'Cloudflare', 'Vercel', 'Platform.sh'],
    interviewProcess: [
      { round: '1', title: 'Cloud Fundamentals', duration: '60 mins', description: 'AWS/GCP/Azure core services, architecture.' },
      { round: '2', title: 'Design & Implementation', duration: '90 mins', description: 'Design resilient, scalable infrastructure.' },
      { round: '3', title: 'Technical Deep Dive', duration: '60 mins', description: 'Cost optimization, security, monitoring.' },
      { round: '4', title: 'HR Round', duration: '30 mins', description: 'Culture and motivation.' }
    ],
    questions: Array.from({ length: 105 }, (_, i) => ({
      id: i + 1,
      question: `Cloud Question ${i + 1}`,
      answer: 'Comprehensive answer on AWS services, VPC, IAM, RDS, EC2, Lambda, security best practices.',
      difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Scenario', 'System Design'][Math.floor(i / 21)] as any,
      category: 'AWS & Infrastructure'
    }))
,
    salaryTable: [
      { experience: '0-2 years', itServices: '₹5-8 LPA', startup: '₹7-12 LPA', productMNC: '₹8-14 LPA' },
      { experience: '2-5 years', itServices: '₹9-16 LPA', startup: '₹13-24 LPA', productMNC: '₹16-30 LPA' },
      { experience: '5-8 years', itServices: '₹16-28 LPA', startup: '₹24-48 LPA', productMNC: '₹30-60 LPA' },
      { experience: '8-12 years', itServices: '₹24-40 LPA', startup: '₹40-80 LPA', productMNC: '₹50-100 LPA' },
      { experience: '12+ years', itServices: '₹32-60 LPA', startup: '₹70-150+ LPA', productMNC: '₹70-150+ LPA' }
    ],
    faqs: [
      { question: 'What\'s the difference between AWS, GCP, and Azure?', answer: 'AWS: market leader, most services. GCP: strong ML, data analytics. Azure: enterprises using Microsoft stack. Pick one and master it. Concepts transfer between clouds.' },
      { question: 'How do you optimize cloud costs?', answer: 'Reserved instances, spot instances, auto-scaling, cost monitoring (CloudWatch), right-sizing instances, archiving old data, using managed services (Lambda vs EC2).' }
    ],
    relatedResources: [
      { title: 'Cloud Roadmap', link: '/resources/roadmaps/cloud-engineer', type: 'roadmap' },
      { title: 'AWS Official Docs', link: '#', type: 'documentation' }
    ],
    seo: {
      title: 'Cloud Engineer Interview Questions 2026',
      description: '105+ cloud engineer interview questions: AWS, GCP, Azure, infrastructure, security. Prepare for Amazon, Microsoft, Google in India.',
      keywords: ['cloud engineer interview', 'aws', 'gcp', 'azure', 'infrastructure', 'cloud architecture']
    }
  }
];
