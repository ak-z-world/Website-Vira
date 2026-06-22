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
    questions: [
      {
        id: 1,
        question: 'What is Django and what is it used for?',
        answer:
          'Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It follows the MVT (Model-View-Template) pattern and comes with a built-in ORM, admin panel, authentication system, and URL routing. Django is used to build web applications ranging from simple blogs to complex e-commerce platforms and APIs. Its philosophy is "batteries included," meaning it provides most tools developers need out of the box.',
        difficulty: 'Beginner',
        category: 'Framework Basics',
      },
      {
        id: 2,
        question: 'Explain the MVT architecture in Django.',
        answer:
          'MVT stands for Model-View-Template. The Model defines the data structure and handles database operations using the Django ORM. The View contains the business logic — it receives HTTP requests, processes data, and returns responses. The Template is the HTML layer that renders the response using Django template language. Unlike MVC, Django\'s "controller" role is handled by the framework itself (URL routing dispatches to views). This separation makes code organized and maintainable.',
        difficulty: 'Beginner',
        category: 'Framework Basics',
        followUp: 'How does Django\'s MVT differ from traditional MVC?',
      },
      {
        id: 3,
        question: 'What is the Django ORM? How do you define a model?',
        answer:
          'The Django ORM (Object-Relational Mapper) allows you to interact with the database using Python classes instead of raw SQL. Each model class maps to a database table, and each attribute maps to a column. Example: class Post(models.Model): title = models.CharField(max_length=200); body = models.TextField(); created_at = models.DateTimeField(auto_now_add=True). You then run makemigrations and migrate to create the table. The ORM supports all major databases (PostgreSQL, MySQL, SQLite, Oracle) with the same Python code.',
        difficulty: 'Beginner',
        category: 'ORM',
        followUp: 'What is the difference between CharField and TextField?',
      },
      {
        id: 4,
        question: 'What are Django migrations? How do you run them?',
        answer:
          'Migrations are Django\'s way of propagating model changes to the database schema. When you modify a model, run python manage.py makemigrations to generate a migration file describing the change. Then run python manage.py migrate to apply it. Migration files are version-controlled and allow teams to sync schema changes. Use showmigrations to list applied migrations and migrate app_name 0003 to roll back to a specific state. Avoid editing migration files manually unless absolutely necessary.',
        difficulty: 'Beginner',
        category: 'Migrations',
      },
      {
        id: 5,
        question: 'What is the Django admin? How do you register a model?',
        answer:
          'Django admin is a built-in web interface for managing database records. Register a model in admin.py: from django.contrib import admin; from .models import Post; admin.site.register(Post). Access at /admin/ with a superuser account. Customize with ModelAdmin: @admin.register(Post); class PostAdmin(admin.ModelAdmin): list_display = ["title", "created_at"]; search_fields = ["title"]. Django admin is excellent for internal tools and content management but should not be exposed publicly in production without additional security measures.',
        difficulty: 'Beginner',
        category: 'Admin',
      },
      {
        id: 6,
        question: 'Explain Django URL routing.',
        answer:
          'Django routes URLs to views using urlpatterns in urls.py. Example: from django.urls import path; urlpatterns = [path("posts/", views.post_list), path("posts/<int:pk>/", views.post_detail)]. The <int:pk> is a path converter that captures an integer and passes it as a keyword argument to the view. Include app-level URLs in the main urls.py: path("blog/", include("blog.urls")). Named URLs (name="post_list") allow reverse URL resolution with reverse() or {% url %} in templates.',
        difficulty: 'Beginner',
        category: 'URL Routing',
        followUp: 'What is the difference between path() and re_path()?',
      },
      {
        id: 7,
        question: 'What is a Django view? How do function-based views (FBVs) work?',
        answer:
          'A view is a Python function (or class) that receives an HTTP request and returns an HTTP response. FBV example: def post_list(request): posts = Post.objects.all(); return render(request, "posts/list.html", {"posts": posts}). The render() shortcut combines template + context. Views can return JsonResponse, redirect(), or HttpResponse. FBVs are simple and explicit — good for simple endpoints. For complex logic with multiple HTTP methods, class-based views (CBVs) may be cleaner.',
        difficulty: 'Beginner',
        category: 'Views',
      },
      {
        id: 8,
        question: 'What are class-based views (CBVs) in Django?',
        answer:
          'CBVs are views defined as classes, inheriting from Django\'s generic views. Example: class PostListView(ListView): model = Post; template_name = "posts/list.html"; context_object_name = "posts". Django provides built-in CBVs: ListView, DetailView, CreateView, UpdateView, DeleteView. CBVs reduce repetitive code through inheritance and mixins. Use as_view() in URLs: path("posts/", PostListView.as_view()). CBVs are powerful but require understanding the method resolution order (get, post, dispatch) for customization.',
        difficulty: 'Intermediate',
        category: 'Views',
        followUp: 'When would you choose FBV over CBV?',
      },
      {
        id: 9,
        question: 'What is Django\'s QuerySet? Explain lazy evaluation.',
        answer:
          'A QuerySet is a collection of database queries represented as Python objects. QuerySets are lazy — they don\'t hit the database until evaluated (iterated, sliced, or converted). Example: qs = Post.objects.filter(published=True) builds the query but doesn\'t run it. Evaluation happens at: list(qs), for post in qs:, qs[0], or bool(qs). This allows chaining multiple filters efficiently: Post.objects.filter(published=True).exclude(draft=True).order_by("-created_at"). Knowing when queries execute is critical to avoid N+1 problems.',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 10,
        question: 'What is the N+1 query problem? How do you fix it in Django?',
        answer:
          'The N+1 problem occurs when fetching a list of N objects and then making N additional queries to fetch related data. Example: for post in Post.objects.all(): print(post.author.name) makes 1 query for posts + N queries for each author. Fix with select_related() for ForeignKey/OneToOne: Post.objects.select_related("author").all() — one JOIN query. For ManyToMany or reverse ForeignKey, use prefetch_related(): Post.objects.prefetch_related("tags").all() — two queries with Python-side merging. Use Django Debug Toolbar to detect N+1 problems.',
        difficulty: 'Intermediate',
        category: 'ORM',
        followUp: 'What is the difference between select_related and prefetch_related?',
      },
      {
        id: 11,
        question: 'What are Django signals? Provide an example.',
        answer:
          'Signals allow decoupled components to get notified when actions occur. Common signals: pre_save, post_save, pre_delete, post_delete. Example: from django.db.models.signals import post_save; from django.dispatch import receiver; @receiver(post_save, sender=User); def send_welcome_email(sender, instance, created, **kwargs): if created: send_email(instance.email). Signals run synchronously in the request cycle, which can slow responses. For heavy work, trigger Celery tasks inside signals instead. Avoid overusing signals — they make code flow harder to trace.',
        difficulty: 'Intermediate',
        category: 'Signals',
      },
      {
        id: 12,
        question: 'What is Django middleware? How does it work?',
        answer:
          'Middleware is a hook framework for processing requests and responses globally, before they reach a view or after the view returns. Middleware classes implement process_request(), process_view(), process_response(), or process_exception() methods. Example: class LogRequestMiddleware: def __init__(self, get_response): self.get_response = get_response; def __call__(self, request): log(request.path); response = self.get_response(request); return response. Register in MIDDLEWARE setting. Order matters — middleware is applied in order for requests, reverse order for responses.',
        difficulty: 'Intermediate',
        category: 'Middleware',
        followUp: 'In what order is middleware executed?',
      },
      {
        id: 13,
        question: 'What is Django REST Framework (DRF)? Why use it?',
        answer:
          'DRF is a powerful toolkit for building REST APIs on top of Django. It provides serializers (like forms for API data), ViewSets, routers, authentication classes, permissions, pagination, and browsable API UI. Example serializer: class PostSerializer(serializers.ModelSerializer): class Meta: model = Post; fields = ["id", "title", "body"]. ViewSet: class PostViewSet(viewsets.ModelViewSet): queryset = Post.objects.all(); serializer_class = PostSerializer. Register with a router and get all CRUD endpoints automatically. DRF is the standard for Django APIs in production.',
        difficulty: 'Intermediate',
        category: 'DRF',
      },
      {
        id: 14,
        question: 'What are DRF serializers? How do you validate data?',
        answer:
          'Serializers convert complex data types (model instances) to Python primitives for JSON rendering, and deserialize incoming JSON back to model instances with validation. Validation: define validate_<field> methods or a global validate() method. Example: def validate_title(self, value): if len(value) < 5: raise serializers.ValidationError("Title too short"); return value. Call serializer.is_valid(raise_exception=True) to validate. ModelSerializer auto-generates fields from the model; use fields, exclude, or read_only_fields to customize. Nested serializers handle related objects.',
        difficulty: 'Intermediate',
        category: 'DRF',
        followUp: 'How do you handle write-only and read-only fields in a serializer?',
      },
      {
        id: 15,
        question: 'How does Django\'s authentication system work?',
        answer:
          'Django ships with a full authentication system: users, groups, permissions, sessions. The User model stores credentials. authenticate(request, username=..., password=...) validates credentials. login(request, user) creates a session. logout(request) destroys it. Use @login_required decorator to protect views. Django stores sessions in the database by default (django.contrib.sessions). For APIs, replace session auth with token auth (DRF TokenAuthentication or JWT). Never store passwords in plain text — Django uses PBKDF2 hashing by default.',
        difficulty: 'Intermediate',
        category: 'Authentication',
      },
      {
        id: 16,
        question: 'What are Django permissions and how do you use them?',
        answer:
          'Django has a built-in permission system: add, change, delete, view permissions per model. Check: user.has_perm("app.add_post"). Protect views: @permission_required("app.add_post"). In DRF: class PostView(APIView): permission_classes = [IsAuthenticated, DjangoModelPermissions]. Custom permissions: class IsAuthor(BasePermission): def has_object_permission(self, request, view, obj): return obj.author == request.user. Group permissions allow assigning sets of permissions. Object-level permissions (row-level) require custom implementation or libraries like django-guardian.',
        difficulty: 'Intermediate',
        category: 'Authentication',
      },
      {
        id: 17,
        question: 'What is Django caching? How do you implement it?',
        answer:
          'Django caching stores expensive computation results to speed up subsequent requests. Configure in settings: CACHES = {"default": {"BACKEND": "django_redis.cache.RedisCache", "LOCATION": "redis://127.0.0.1:6379/0"}}. Use: from django.core.cache import cache; cache.set("key", value, timeout=300); cache.get("key"). View-level caching: @cache_page(60 * 15) on a view. Template fragment caching: {% cache 500 sidebar %}. Per-site caching: add CacheMiddleware. Always set sensible TTLs and have an invalidation strategy. Redis is the preferred backend for production.',
        difficulty: 'Intermediate',
        category: 'Performance',
        followUp: 'How do you invalidate the cache when a model changes?',
      },
      {
        id: 18,
        question: 'What are Django forms? How do they differ from DRF serializers?',
        answer:
          'Django forms handle HTML form rendering and validation. class PostForm(forms.ModelForm): class Meta: model = Post; fields = ["title", "body"]. Forms are for HTML responses and template-rendered views. DRF serializers are for API (JSON) data. Forms render HTML inputs; serializers return JSON. Both validate data, but serializers support nested objects, read/write control, and API-specific patterns. Use forms for traditional server-rendered HTML apps, serializers for REST APIs. DRF ModelSerializer and ModelForm have similar `fields` and `Meta` patterns.',
        difficulty: 'Intermediate',
        category: 'Forms',
      },
      {
        id: 19,
        question: 'Explain Django\'s settings.py. How do you manage settings for multiple environments?',
        answer:
          'settings.py is a Python module with all configuration: databases, installed apps, middleware, static files, etc. For multiple environments, split into settings/base.py, settings/development.py, settings/production.py. Use environment variables via python-decouple or django-environ: SECRET_KEY = config("SECRET_KEY"). Never hardcode secrets. Set DJANGO_SETTINGS_MODULE env var to point to the right file. In production: DEBUG=False, ALLOWED_HOSTS=["yourdomain.com"], use PostgreSQL, Redis, and S3 for media storage.',
        difficulty: 'Intermediate',
        category: 'Configuration',
      },
      {
        id: 20,
        question: 'What is Celery? How does it integrate with Django?',
        answer:
          'Celery is an asynchronous task queue. Django runs synchronously, so heavy work (emails, PDF generation, third-party API calls) blocks the response. Offload to Celery. Setup: install celery, configure broker (Redis), create celery.py in your Django project. Define tasks: @shared_task; def send_email(user_id): .... Call: send_email.delay(user.id). Workers process tasks independently. Use celery beat for scheduled tasks (cron-like). Monitor with flower. Celery with Redis is the standard production pattern for background tasks in Django.',
        difficulty: 'Intermediate',
        category: 'Background Tasks',
      },
      {
        id: 21,
        question: 'What is the difference between ForeignKey, OneToOneField, and ManyToManyField?',
        answer:
          'ForeignKey creates a many-to-one relationship: many Post objects can have one Author. OneToOneField creates a one-to-one relationship: each UserProfile belongs to exactly one User (extends User model). ManyToManyField creates a many-to-many relationship: a Post can have many Tags, and a Tag can belong to many Posts. ForeignKey adds a _id column to the table. ManyToMany creates a junction table. OneToOne is like ForeignKey with unique=True. Use on_delete= (CASCADE, SET_NULL, PROTECT) on FK and OneToOne.',
        difficulty: 'Beginner',
        category: 'ORM',
      },
      {
        id: 22,
        question: 'What is Django\'s static file handling?',
        answer:
          'Static files (CSS, JS, images) are collected from each app\'s static/ folder. In development, Django serves them automatically with DEBUG=True. In production, run collectstatic to copy all static files to STATIC_ROOT, then serve via Nginx or a CDN like AWS CloudFront. Settings: STATIC_URL = "/static/"; STATICFILES_DIRS = [BASE_DIR / "static"]; STATIC_ROOT = BASE_DIR / "staticfiles". For user-uploaded files, use MEDIA_ROOT and MEDIA_URL. Use WhiteNoise library for zero-config static serving in production.',
        difficulty: 'Beginner',
        category: 'Configuration',
      },
      {
        id: 23,
        question: 'What is the difference between get(), filter(), and get_or_create() in the ORM?',
        answer:
          'get() returns a single object matching the query, raising DoesNotExist if not found or MultipleObjectsReturned if more than one matches. filter() returns a QuerySet (possibly empty) of matching objects — never raises an exception. get_or_create() tries to get an object with the given kwargs; if not found, creates one. Returns (object, created) tuple where created is a boolean. Example: obj, created = Post.objects.get_or_create(slug="hello", defaults={"title": "Hello"}). Use update_or_create() for the same pattern with updates.',
        difficulty: 'Beginner',
        category: 'ORM',
      },
      {
        id: 24,
        question: 'How does Django template language work?',
        answer:
          'Django Template Language (DTL) renders dynamic HTML. Variables: {{ variable }}. Tags: {% for item in items %}...{% endfor %}, {% if condition %}...{% endif %}. Filters: {{ date|date:"Y-m-d" }}, {{ text|truncatechars:50 }}. Template inheritance: base.html defines {% block content %}{% endblock %}; child templates extend and override blocks. Load custom templatetags with {% load mytags %}. DTL is deliberately simple (no arbitrary Python) for security. For modern frontends, use React/Vue instead; Django serves JSON via DRF.',
        difficulty: 'Beginner',
        category: 'Templates',
      },
      {
        id: 25,
        question: 'What is Django\'s manage.py? What are common commands?',
        answer:
          'manage.py is the command-line utility for administrative tasks. Common commands: runserver (dev server), makemigrations (create migration), migrate (apply migration), createsuperuser (create admin user), shell (interactive Python shell with Django context), test (run tests), collectstatic (gather static files), dbshell (raw DB shell). You can create custom management commands in app/management/commands/. In production, use gunicorn or uvicorn instead of runserver. Always specify settings module for multi-environment projects.',
        difficulty: 'Beginner',
        category: 'Framework Basics',
      },

      // ── INTERMEDIATE (30) ─────────────────────────────────────
      {
        id: 26,
        question: 'Explain Django\'s transaction management.',
        answer:
          'Django wraps each request in a transaction by default (ATOMIC_REQUESTS=True) or you can manually use transaction.atomic(). Example: with transaction.atomic(): order = Order.objects.create(...); Payment.objects.create(order=order). If any exception occurs, both operations roll back. Use savepoints: with transaction.atomic(): with transaction.atomic(): ... for nested rollback. Use transaction.on_commit() to run code only after the transaction commits — useful for triggering Celery tasks after a DB write. Never trigger Celery tasks outside on_commit, or the task may run before the record exists.',
        difficulty: 'Intermediate',
        category: 'ORM',
        followUp: 'What is the risk of triggering Celery tasks inside a transaction?',
      },
      {
        id: 27,
        question: 'What is Q object in Django ORM? How do you use it for complex queries?',
        answer:
          'Q objects allow complex queries with OR, AND, NOT logic. Example: from django.db.models import Q; Post.objects.filter(Q(published=True) | Q(author=request.user)) retrieves posts that are published OR belong to the current user. Combine: Q(published=True) & Q(created_at__year=2026). Negate: ~Q(deleted=True). Without Q, filter() only supports AND. Q objects can be combined dynamically: q = Q(); if search: q &= Q(title__icontains=search). This is essential for building search and filter APIs.',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 28,
        question: 'What is the F() expression in Django ORM?',
        answer:
          'F() expressions reference model field values in database-level operations without pulling data into Python. Example: Product.objects.update(stock=F("stock") - 1) decrements stock atomically at the DB level — race-condition safe. Without F(): product.stock -= 1; product.save() has a race condition if two requests run simultaneously. F() also works in annotations and filters: Product.objects.filter(price__gt=F("cost") * 2). Use F() for atomic increments/decrements, comparing fields, and computed updates.',
        difficulty: 'Intermediate',
        category: 'ORM',
        followUp: 'How is F() different from Python-level field updates?',
      },
      {
        id: 29,
        question: 'How do you implement custom model managers in Django?',
        answer:
          'Custom managers add convenience methods to QuerySets. Example: class PublishedManager(models.Manager): def get_queryset(self): return super().get_queryset().filter(status="published"). In model: class Post(models.Model): objects = models.Manager(); published = PublishedManager(). Use: Post.published.all(). Also use QuerySet subclasses for chainable methods: class PostQuerySet(models.QuerySet): def published(self): return self.filter(status="published"); def by_author(self, author): return self.filter(author=author). Register: objects = PostQuerySet.as_manager(). Call: Post.objects.published().by_author(user).',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 30,
        question: 'What is Django\'s content types framework?',
        answer:
          'The contenttypes framework tracks all installed models using a ContentType model. This enables generic relations — a single model can relate to any other model. Example: likes, comments, or tags that can be attached to any model. class Like(models.Model): content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE); object_id = models.PositiveIntegerField(); content_object = GenericForeignKey("content_type", "object_id"). Query: like.content_object returns the actual related object. Use when you need polymorphic relationships across multiple models.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 31,
        question: 'What are DRF ViewSets and Routers?',
        answer:
          'A ViewSet combines multiple related views into a single class. ModelViewSet provides list, create, retrieve, update, partial_update, destroy actions automatically. Router generates URLs: router = DefaultRouter(); router.register("posts", PostViewSet). This creates /posts/, /posts/{pk}/ endpoints. Customize actions with @action decorator: @action(detail=True, methods=["post"]); def publish(self, request, pk): .... Access at /posts/{pk}/publish/. Use ReadOnlyModelViewSet for read-only APIs. Routers reduce URL boilerplate significantly.',
        difficulty: 'Intermediate',
        category: 'DRF',
      },
      {
        id: 32,
        question: 'How do you implement JWT authentication in Django?',
        answer:
          'Use djangorestframework-simplejwt. Install, then: REST_FRAMEWORK = {"DEFAULT_AUTHENTICATION_CLASSES": ["rest_framework_simplejwt.authentication.JWTAuthentication"]}. Add URL: path("token/", TokenObtainPairView.as_view()). Client POSTs credentials, gets access + refresh tokens. Pass access token in headers: Authorization: Bearer <token>. Refresh: POST to /token/refresh/ with refresh token. Configure token expiry in SIMPLE_JWT settings. Store tokens in httpOnly cookies (not localStorage) to prevent XSS. Use short-lived access tokens (15min) and long-lived refresh tokens (7 days).',
        difficulty: 'Intermediate',
        category: 'Authentication',
      },
      {
        id: 33,
        question: 'How do you write unit tests in Django?',
        answer:
          'Django\'s test framework extends unittest. Use TestCase for DB tests (wrapped in a transaction): class PostTests(TestCase): def setUp(self): self.user = User.objects.create_user("alice", password="pass"); def test_post_creation(self): post = Post.objects.create(title="Hello", author=self.user); self.assertEqual(post.title, "Hello"). Use Client for view tests: self.client.get("/posts/"). Use APIClient for DRF: from rest_framework.test import APIClient. Mock external services with unittest.mock.patch. Run: python manage.py test. Use factory_boy for test data generation instead of manual setUp code.',
        difficulty: 'Intermediate',
        category: 'Testing',
      },
      {
        id: 34,
        question: 'What is Django\'s select_related vs prefetch_related in depth?',
        answer:
          'select_related uses SQL JOIN for forward ForeignKey/OneToOne relationships: Post.objects.select_related("author") — one query. It\'s a SQL JOIN, so it\'s synchronous and efficient for single-level relations. prefetch_related handles reverse ForeignKey, ManyToMany, and GenericRelation: Post.objects.prefetch_related("tags") — two queries (one for posts, one for tags, merged in Python). Use Prefetch() for custom queryset on the prefetch: Prefetch("comments", queryset=Comment.objects.filter(approved=True)). For deeply nested relations, chain: Post.objects.select_related("author__profile").prefetch_related("tags").',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 35,
        question: 'How does Django handle file uploads?',
        answer:
          'Define a FileField or ImageField on the model: class Post(models.Model): image = models.ImageField(upload_to="posts/"). Configure MEDIA_ROOT and MEDIA_URL. In a form/serializer, handle the file: serializer = PostSerializer(data=request.data). Files are in request.FILES. For large files, use chunked upload (streaming). In production, store files on S3 using django-storages and boto3: DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage". Never store user files on the local filesystem in a multi-server setup. Validate file type and size on upload to prevent abuse.',
        difficulty: 'Intermediate',
        category: 'File Handling',
      },
      {
        id: 36,
        question: 'What is Django\'s custom User model? Why extend it?',
        answer:
          'Django\'s default User model uses username as the login field. For production, always define a custom User model before running the first migration: class User(AbstractUser): email = models.EmailField(unique=True). Set AUTH_USER_MODEL = "accounts.User". Extending AbstractUser preserves all Django auth features while letting you add fields. Extending AbstractBaseUser gives full control but requires more setup. Never add AUTH_USER_MODEL after data is in the DB — it requires a complex migration. Define a custom User model in every project from day one.',
        difficulty: 'Intermediate',
        category: 'Authentication',
      },
      {
        id: 37,
        question: 'Explain Django ORM aggregation and annotation.',
        answer:
          'aggregate() returns summary statistics across a QuerySet: Post.objects.aggregate(total=Count("id"), avg_views=Avg("views")). Returns a dict. annotate() adds a calculated column per object: Post.objects.annotate(comment_count=Count("comments")) adds comment_count to each Post. Use in combination: Post.objects.annotate(comment_count=Count("comments")).filter(comment_count__gte=5).order_by("-comment_count"). Common functions: Count, Sum, Avg, Max, Min, Coalesce, Case/When. These run at the DB level — much faster than Python-side aggregation.',
        difficulty: 'Intermediate',
        category: 'ORM',
        followUp: 'What is the difference between values() and values_list()?',
      },
      {
        id: 38,
        question: 'What are DRF permissions? How do you write a custom one?',
        answer:
          'DRF permissions control access to API views. Built-in: IsAuthenticated, IsAdminUser, AllowAny, IsAuthenticatedOrReadOnly. Apply globally: REST_FRAMEWORK = {"DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.IsAuthenticated"]}. Override per-view: permission_classes = [IsAuthenticated, IsOwner]. Custom permission: class IsOwner(BasePermission): def has_object_permission(self, request, view, obj): return obj.owner == request.user. has_permission() checks list-level access; has_object_permission() checks object-level. Return True/False or raise PermissionDenied.',
        difficulty: 'Intermediate',
        category: 'DRF',
      },
      {
        id: 39,
        question: 'How do you implement pagination in DRF?',
        answer:
          'DRF supports multiple pagination styles. PageNumberPagination: page=2&page_size=20. CursorPagination: cursor-based (efficient for large datasets, no offset). LimitOffsetPagination: limit=20&offset=40. Configure globally: REST_FRAMEWORK = {"DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination", "PAGE_SIZE": 20}. Custom: class MyPagination(PageNumberPagination): page_size = 20; page_size_query_param = "page_size"; max_page_size = 100. Apply to ViewSet: pagination_class = MyPagination. Cursor pagination is best for real-time feeds (avoids offset drift).',
        difficulty: 'Intermediate',
        category: 'DRF',
      },
      {
        id: 40,
        question: 'What is the difference between null=True and blank=True in Django fields?',
        answer:
          'null=True tells the database to allow NULL in that column. blank=True tells Django form/serializer validation to allow empty values. They serve different layers. For string-based fields (CharField, TextField), Django convention is blank=True only (empty string, not NULL) for optional strings. For non-string fields (IntegerField, ForeignKey, DateField), use null=True to allow NULL in DB and blank=True for form validation. Using null=True on string fields creates two possible "empty" values (NULL and ""), which complicates queries.',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 41,
        question: 'How do you deploy a Django application?',
        answer:
          'Production deployment: 1) Web server: Nginx as reverse proxy. 2) WSGI server: Gunicorn (sync) or uvicorn (async). 3) Process manager: systemd or supervisor. 4) Database: PostgreSQL. 5) Cache: Redis. 6) Static files: Nginx or CDN. 7) Media files: S3. 8) Env vars: python-decouple or AWS Secrets Manager. Dockerfile: FROM python:3.12; COPY . .; RUN pip install -r requirements.txt; CMD ["gunicorn", "myproject.wsgi"]. Use Docker + ECS or Kubernetes in production. Set DEBUG=False, ALLOWED_HOSTS, HTTPS-only, HSTS, secure cookies. Automate with CI/CD (GitHub Actions).',
        difficulty: 'Intermediate',
        category: 'Deployment',
      },
      {
        id: 42,
        question: 'What are Django abstract models?',
        answer:
          'Abstract models define common fields/methods shared by multiple models without creating a database table. class TimestampedModel(models.Model): created_at = models.DateTimeField(auto_now_add=True); updated_at = models.DateTimeField(auto_now=True); class Meta: abstract = True. Subclass it: class Post(TimestampedModel): title = models.CharField(max_length=200). Post gets created_at and updated_at columns. Use abstract models for shared behavior (timestamps, soft delete, UUID primary keys). Django won\'t create a table for the abstract model itself.',
        difficulty: 'Intermediate',
        category: 'ORM',
      },
      {
        id: 43,
        question: 'What is multi-table inheritance in Django?',
        answer:
          'Multi-table inheritance creates a separate DB table for each model in the hierarchy, with an implicit OneToOneField linking child to parent. class Animal(models.Model): name = models.CharField(max_length=100); class Dog(Animal): breed = models.CharField(max_length=100). Django creates animal and dog tables; dog has a OneToOneField to animal. Access: dog.name (from Animal), dog.breed. This is different from abstract models — each table is separate. Multi-table inheritance can cause complex JOINs. Proxy models are a third option: same table, different Python behavior.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 44,
        question: 'Explain Django\'s prefetch_related with a custom Prefetch object.',
        answer:
          'Prefetch() gives fine control over the prefetch queryset: from django.db.models import Prefetch; approved_comments = Comment.objects.filter(approved=True).select_related("author"); Post.objects.prefetch_related(Prefetch("comments", queryset=approved_comments, to_attr="approved_comments")). The to_attr stores results in a custom attribute (post.approved_comments) instead of post.comments.all(). This avoids re-querying and allows filtered prefetches. Nest multiple Prefetch objects for complex related data. Essential for high-performance list APIs with related data.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 45,
        question: 'How do you profile and optimize slow Django queries?',
        answer:
          'Step 1: Enable Django Debug Toolbar locally to see all queries per request. Step 2: Check QuerySet.explain() to see the query plan. Step 3: Add database indexes on filtered columns: class Meta: indexes = [models.Index(fields=["created_at", "status"])]. Step 4: Use select_related/prefetch_related to eliminate N+1. Step 5: Use .only() or .defer() to limit selected columns: Post.objects.only("id", "title"). Step 6: Use values() or values_list() when you don\'t need model instances. Step 7: Move heavy aggregations to raw SQL if ORM is too slow. Step 8: Consider read replicas for SELECT-heavy workloads.',
        difficulty: 'Advanced',
        category: 'Performance',
      },
      {
        id: 46,
        question: 'What is Django Channels? When do you use it?',
        answer:
          'Django Channels extends Django to handle WebSockets, HTTP/2, and other asynchronous protocols. It uses ASGI (Async Server Gateway Interface) instead of WSGI. Consumer classes replace views: class ChatConsumer(AsyncWebsocketConsumer): async def connect(self): await self.accept(); async def receive(self, text_data): await self.send(text_data=text_data). Use Channel Layers (Redis-backed) for broadcasting to groups. Use Channels for: real-time chat, live notifications, collaborative editing, live sports scores. Run with uvicorn or daphne. For simple push notifications, Server-Sent Events via async views may be simpler.',
        difficulty: 'Advanced',
        category: 'Async',
      },
      {
        id: 47,
        question: 'What is Django\'s async support? How do async views work?',
        answer:
          'Django 3.1+ supports async views. Define: async def my_view(request): data = await fetch_data(); return JsonResponse(data). Run with ASGI server (uvicorn, daphne). Async views allow non-blocking I/O — great for views that call external APIs. Caveats: the ORM is synchronous; use sync_to_async: from asgiref.sync import sync_to_async; posts = await sync_to_async(list)(Post.objects.all()). Third-party packages must support async. Don\'t mix sync and async code without sync_to_async/async_to_sync wrappers. Async views improve throughput for I/O-bound endpoints.',
        difficulty: 'Advanced',
        category: 'Async',
      },
      {
        id: 48,
        question: 'Explain Django\'s database routing for multiple databases.',
        answer:
          'Django supports multiple databases via DATABASE_ROUTERS. Define a router class: class ReadRouter: def db_for_read(self, model, **hints): return "replica"; def db_for_write(self, model, **hints): return "default"; def allow_migrate(self, db, app_label, **hints): return db == "default". Set DATABASE_ROUTERS = ["myapp.routers.ReadRouter"]. Configure DATABASES with "default" (primary) and "replica". Use in queries: Post.objects.using("replica").all(). Routers enable read replica setups, app-level database separation, and sharding. Test thoroughly — routing bugs cause silent data issues.',
        difficulty: 'Advanced',
        category: 'Database',
      },
      {
        id: 49,
        question: 'How do you implement soft delete in Django?',
        answer:
          'Soft delete marks records as deleted without removing them. Pattern: class SoftDeleteModel(models.Model): deleted_at = models.DateTimeField(null=True, blank=True); class Meta: abstract = True; def delete(self): self.deleted_at = timezone.now(); self.save(). Override the default manager to exclude soft-deleted: class SoftDeleteManager(Manager): def get_queryset(self): return super().get_queryset().filter(deleted_at__isnull=True). Add an unfiltered manager: all_objects = Manager(). Restore: obj.deleted_at = None; obj.save(). Library django-safedelete automates this pattern. Ensure foreign keys handle soft-deletes correctly.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 50,
        question: 'What are Django proxy models? How are they useful?',
        answer:
          'Proxy models use the same DB table as the parent but allow adding Python behavior (methods, managers, ordering) without changing the schema. Example: class OrderedPost(Post): class Meta: proxy = True; ordering = ["-views"]. class PublishedManager(Manager): def get_queryset(self): return super().get_queryset().filter(status="published"). Useful for: different orderings, different managers, admin customization, or adding methods to a model from a third-party app you can\'t modify. Proxy models don\'t create new tables. Use instead of multi-table inheritance when you only need behavioral differences.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 51,
        question: 'How do you implement rate limiting in a Django API?',
        answer:
          'Use DRF\'s built-in throttling: REST_FRAMEWORK = {"DEFAULT_THROTTLE_CLASSES": ["rest_framework.throttling.AnonRateThrottle", "rest_framework.throttling.UserRateThrottle"], "DEFAULT_THROTTLE_RATES": {"anon": "100/day", "user": "1000/day"}}. Custom throttle: class BurstRateThrottle(UserRateThrottle): scope = "burst"; THROTTLE_RATES = {"burst": "60/min"}. For distributed rate limiting (multiple servers), use Redis backend: throttle class can use cache. For production, also implement rate limiting at Nginx or API Gateway level. Return 429 with Retry-After header.',
        difficulty: 'Advanced',
        category: 'DRF',
      },
      {
        id: 52,
        question: 'What is Django\'s CSRF protection? How does it work?',
        answer:
          'CSRF (Cross-Site Request Forgery) protection prevents malicious sites from submitting forms on behalf of authenticated users. Django\'s CsrfViewMiddleware issues a CSRF cookie and requires a csrftoken form field or X-CSRFToken header for POST/PUT/DELETE. In templates: {% csrf_token %}. For AJAX: read cookie with document.cookie and pass as header. For APIs (DRF with JWT/token auth), CSRF is not needed for stateless auth. Use @csrf_exempt sparingly (only for webhook endpoints). Never disable CSRF globally in web apps.',
        difficulty: 'Intermediate',
        category: 'Security',
      },
      {
        id: 53,
        question: 'How do you handle database indexes in Django?',
        answer:
          'Indexes speed up read queries at the cost of slower writes and storage. Add to model: class Meta: indexes = [models.Index(fields=["email"]), models.Index(fields=["created_at", "status"])]. Field-level: db_index=True on ForeignKey (auto-added), or CharField(db_index=True). For unique constraints: unique=True or UniqueConstraint. Composite unique: class Meta: constraints = [models.UniqueConstraint(fields=["email", "tenant_id"], name="unique_email_per_tenant")]. Analyze slow queries with EXPLAIN ANALYZE. Over-indexing slows writes. Index columns used in WHERE, ORDER BY, and JOIN clauses.',
        difficulty: 'Intermediate',
        category: 'Database',
      },
      {
        id: 54,
        question: 'What are the differences between Gunicorn and uWSGI?',
        answer:
          'Both are WSGI servers for Django in production. Gunicorn (Green Unicorn) is simpler, Python-native, easier to configure. uWSGI is more feature-rich (supports WSGI, ASGI, FastCGI), written in C (lower overhead). Gunicorn is preferred for most Django apps due to simplicity. uWSGI is preferred for high-performance setups or polyglot architectures. Both are reverse-proxied behind Nginx. For async Django (Channels, async views), use uvicorn or daphne (ASGI servers). Gunicorn workers: use 2*CPU+1 as worker count.',
        difficulty: 'Intermediate',
        category: 'Deployment',
      },
      {
        id: 55,
        question: 'How do you implement search functionality in Django?',
        answer:
          'Basic: Post.objects.filter(title__icontains=search_term) — case-insensitive SQL LIKE. Full-text: Django supports PostgreSQL full-text search: Post.objects.annotate(search=SearchVector("title", "body")).filter(search=SearchQuery(search_term)). Add SearchVectorField for performance. For ranking: SearchRank(). For production search, use Elasticsearch (django-elasticsearch-dsl) or Typesense. Elasticsearch handles typos, stemming, facets, and relevance scoring — far more powerful than SQL LIKE. Use Celery to sync DB changes to Elasticsearch index.',
        difficulty: 'Intermediate',
        category: 'Search',
      },

      // ── ADVANCED (25) ─────────────────────────────────────────
      {
        id: 56,
        question: 'How does Django\'s ORM handle database locking?',
        answer:
          'select_for_update() acquires a row-level lock (SELECT ... FOR UPDATE): with transaction.atomic(): product = Product.objects.select_for_update().get(pk=pk); product.stock -= qty; product.save(). Prevents race conditions in inventory systems. nowait=True raises DatabaseError instead of waiting. skip_locked=True skips locked rows (useful for job queues). Use within transaction.atomic(). Deadlock prevention: always lock in a consistent order. For Postgres, use advisory locks for cross-row coordination. select_for_update() works on supported databases (Postgres, MySQL, Oracle).',
        difficulty: 'Advanced',
        category: 'Database',
      },
      {
        id: 57,
        question: 'Explain Django\'s migration dependency resolution.',
        answer:
          'Django resolves migration order via a directed acyclic graph (DAG). Each migration declares dependencies: dependencies = [("myapp", "0003_previous"), ("otherapp", "0001_initial")]. Django sorts migrations topologically before applying. Squashing: squashmigrations app_name 0001 0010 creates a single optimized migration replacing 0001-0010. Circular dependencies cause MigrationError — fix by restructuring. Data migrations: use RunPython to transform data during schema changes. Always test migrations on a copy of production data before deploying.',
        difficulty: 'Advanced',
        category: 'Migrations',
      },
      {
        id: 58,
        question: 'How do you implement a multi-tenant SaaS in Django?',
        answer:
          'Two main strategies: 1) Shared schema: add tenant_id ForeignKey to all models. Use middleware to identify tenant from subdomain or header. Filter all queries by tenant_id. Risk: query forgetting tenant filter exposes cross-tenant data. Use a custom manager that always filters by tenant. 2) Separate schema (PostgreSQL): each tenant has its own schema. Use django-tenants library. Safer but complex migrations. Strategy 1 is simpler and sufficient for most SaaS applications. Enforce isolation at the ORM layer with custom managers, middleware, and unit tests that verify tenant isolation.',
        difficulty: 'Advanced',
        category: 'Architecture',
      },
      {
        id: 59,
        question: 'How do you write custom migration operations in Django?',
        answer:
          'Custom migration operations handle complex schema changes the ORM can\'t express. Use RunPython: def populate_slugs(apps, schema_editor): Post = apps.get_model("blog", "Post"); for post in Post.objects.all(): post.slug = slugify(post.title); post.save(update_fields=["slug"]); migrations.RunPython(populate_slugs, migrations.RunPython.noop). Always provide a reverse function (or noop). Use RunSQL for raw SQL. Use apps.get_model() (not direct import) to get the historical model state. Test: python manage.py test and use migrate --run-syncdb to verify.',
        difficulty: 'Advanced',
        category: 'Migrations',
      },
      {
        id: 60,
        question: 'What is the Django ORM\'s values() and its performance implications?',
        answer:
          'values() returns dicts instead of model instances, skipping the overhead of instantiating Python objects. values_list() returns tuples. values_list("id", flat=True) returns a flat list of IDs. These are significantly faster for bulk reads: Post.objects.filter(published=True).values("id", "title") is much lighter than fetching full Post instances. Use when you don\'t need model methods or need to pass data to serializers efficiently. Combine with annotate(): Post.objects.annotate(count=Count("comments")).values("id", "title", "count"). Avoid values() if you need model-level validation or business logic.',
        difficulty: 'Advanced',
        category: 'ORM',
      },
      {
        id: 61,
        question: 'What is a database view in Django? How do you expose it?',
        answer:
          'A database view is a virtual table defined by a SQL SELECT. Create it via RunSQL migration. Map to a Django model with managed=False: class PostSummaryView(models.Model): title = models.CharField(); comment_count = models.IntegerField(); class Meta: managed = False; db_table = "post_summary_view". Query it like a model: PostSummaryView.objects.filter(comment_count__gte=5). Use for complex aggregations, reporting queries, or read-optimized projections. Views are read-only (no insert/update). Materialized views (PostgreSQL) cache results for faster reads on expensive aggregations.',
        difficulty: 'Advanced',
        category: 'Database',
      },
      {
        id: 62,
        question: 'How do you implement webhooks in Django?',
        answer:
          'Receiving webhooks: create an endpoint, parse the payload, verify signature (HMAC-SHA256 with the provider\'s secret), and process asynchronously via Celery. @csrf_exempt (webhook sender has no session). Sending webhooks: when a model changes (post_save signal), enqueue a Celery task that POSTs to subscriber URLs. Implement retry logic (exponential backoff) for failed deliveries. Track delivery attempts in a WebhookDelivery model. Validate outgoing payloads with a signature. Rate limit sending (avoid overwhelming subscribers). Log all events for debugging.',
        difficulty: 'Advanced',
        category: 'API',
      },
      {
        id: 63,
        question: 'What are Django system checks? How do you create custom ones?',
        answer:
          'Django runs system checks before starting or migrating to detect configuration errors. Define custom checks: from django.core.checks import Error, register; @register(); def check_required_settings(app_configs, **kwargs): errors = []; if not settings.STRIPE_KEY: errors.append(Error("STRIPE_KEY missing", id="myapp.E001")); return errors. Run: python manage.py check. Levels: Debug, Info, Warning, Error, Critical. Register for specific apps: @register(deploy=True) runs only in production checks (python manage.py check --deploy). Use to enforce security settings, required configurations, and integration sanity.',
        difficulty: 'Advanced',
        category: 'Framework Basics',
      },
      {
        id: 64,
        question: 'How does Django handle connection pooling?',
        answer:
          'Django creates a new DB connection per thread by default and closes it after each request (CONN_MAX_AGE=0). Set CONN_MAX_AGE to reuse connections: DATABASES = {"default": {"CONN_MAX_AGE": 60}}. For production, use PgBouncer (PostgreSQL connection pooler) between Django and Postgres. PgBouncer pools connections at the TCP level — much more efficient. In async Django with asyncpg, use a connection pool directly. Without pooling, each gunicorn worker holds one connection. With 20 workers and no pooling, 20 DB connections per Django server.',
        difficulty: 'Advanced',
        category: 'Database',
      },
      {
        id: 65,
        question: 'Explain Django\'s security checklist for production.',
        answer:
          'Run python manage.py check --deploy. Key items: DEBUG=False; ALLOWED_HOSTS set; SECRET_KEY is random and not in code; HTTPS only (SECURE_SSL_REDIRECT=True); HSTS enabled (SECURE_HSTS_SECONDS=31536000); secure cookies (SESSION_COOKIE_SECURE=True, CSRF_COOKIE_SECURE=True); X-Content-Type-Options (SECURE_CONTENT_TYPE_NOSNIFF=True); X-Frame-Options (X_FRAME_OPTIONS="DENY"); use PostgreSQL (not SQLite); use Redis for sessions (not DB or cookie); rotate SECRET_KEY with downtime or use signing keys. Use Django Defender to block brute-force login attempts.',
        difficulty: 'Advanced',
        category: 'Security',
      },
      {
        id: 66,
        question: 'How does DRF handle nested serializers with write support?',
        answer:
          'Nested read is simple: class PostSerializer(ModelSerializer): author = UserSerializer(read_only=True). For writable nested serializers, override create() and update(): def create(self, validated_data): tags_data = validated_data.pop("tags"); post = Post.objects.create(**validated_data); for tag in tags_data: post.tags.add(tag); return post. DRF won\'t auto-create nested objects — you must handle it. Use drf-writable-nested library for automation. Validate nested data in validate(): validate that all tag IDs exist. Be careful with partial updates (PATCH) — update only provided nested fields.',
        difficulty: 'Advanced',
        category: 'DRF',
      },
      {
        id: 67,
        question: 'What is Django\'s AppConfig and how do you use it?',
        answer:
          'AppConfig is the configuration class for a Django app. Define in apps.py: class BlogConfig(AppConfig): default_auto_field = "django.db.models.BigAutoField"; name = "blog"; verbose_name = "Blog Module"; def ready(self): import blog.signals. ready() runs when Django starts — use it to register signals (not in models.py or apps.py top-level to avoid import issues). Set default_app_config = "blog.apps.BlogConfig" in __init__.py (or rely on default_auto_field). Use AppConfig to configure default_auto_field, run startup code, and set app metadata for the admin.',
        difficulty: 'Advanced',
        category: 'Framework Basics',
      },
      {
        id: 68,
        question: 'How do you implement API versioning in Django REST Framework?',
        answer:
          'DRF supports multiple versioning schemes. URLPathVersioning: /api/v1/posts/, /api/v2/posts/. QueryParameterVersioning: /api/posts/?version=2. NamespaceVersioning: URL namespaces. Configure: REST_FRAMEWORK = {"DEFAULT_VERSIONING_CLASS": "rest_framework.versioning.URLPathVersioning", "DEFAULT_VERSION": "v1", "ALLOWED_VERSIONS": ["v1", "v2"]}. In view: if request.version == "v2": serializer = PostSerializerV2. Or use separate ViewSets per version. Maintain backwards compatibility — breaking changes go in new versions. Document API versions clearly.',
        difficulty: 'Advanced',
        category: 'DRF',
      },
      {
        id: 69,
        question: 'What is django-storages? How do you use it with S3?',
        answer:
          'django-storages provides custom storage backends. For S3: install django-storages, boto3. Settings: DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"; AWS_STORAGE_BUCKET_NAME = "my-bucket"; AWS_S3_REGION_NAME = "ap-south-1". Files uploaded via FileField/ImageField go directly to S3. For static files: STATICFILES_STORAGE = "storages.backends.s3boto3.S3StaticStorage". Use separate buckets for static and media. Configure ACLs (private vs public). Use signed URLs for private media: storage.url(name) generates a presigned S3 URL. Set AWS credentials via IAM role (never hardcode keys).',
        difficulty: 'Advanced',
        category: 'File Handling',
      },
      {
        id: 70,
        question: 'How do you implement background tasks with Celery and Django signals safely?',
        answer:
          'The danger: triggering Celery inside a signal handler that runs within a transaction. If Celery runs before the transaction commits, the data doesn\'t exist yet. Fix: use transaction.on_commit(): from django.db import transaction; @receiver(post_save, sender=Order); def order_created(sender, instance, created, **kwargs): if created: transaction.on_commit(lambda: process_order.delay(instance.pk)). This guarantees Celery only runs after data is committed. Also: make Celery tasks idempotent (safe to retry), handle celery revoke for cancelled tasks, and use task.apply_async(countdown=5) for delayed execution.',
        difficulty: 'Advanced',
        category: 'Background Tasks',
      },

      // ── SCENARIO (10) ─────────────────────────────────────────
      {
        id: 71,
        question: 'Scenario: A Django API endpoint returns data in 3 seconds. Walk me through how you would debug and optimize it.',
        answer:
          'Step 1: Install Django Debug Toolbar and identify query count and duration. Step 2: Look for N+1 queries — add select_related/prefetch_related. Step 3: Check if indexes exist on filtered columns (EXPLAIN ANALYZE in Postgres). Step 4: Check if you\'re loading more data than needed — use .only() or .values(). Step 5: Add Redis caching for data that doesn\'t change frequently. Step 6: Check if computation (serialization, aggregation) is heavy — move to DB-level (annotate, aggregate) or precompute. Step 7: Profile serializer performance — nested serializers cause hidden queries. Step 8: If external API calls are in the request path, offload to Celery.',
        difficulty: 'Scenario',
        category: 'Performance Optimization',
      },
      {
        id: 72,
        question: 'Scenario: How would you migrate a legacy Django application from SQLite to PostgreSQL in production?',
        answer:
          'Step 1: Add psycopg2 dependency. Step 2: Update settings to point to PostgreSQL (test in staging first). Step 3: Export SQLite data: python manage.py dumpdata --output=data.json (use --natural-foreign and --natural-primary). Step 4: Create PostgreSQL database: createdb myapp. Step 5: Run migrate on Postgres: python manage.py migrate. Step 6: Load data: python manage.py loaddata data.json. Step 7: Verify data integrity. Step 8: For large datasets (>1GB), use direct SQL dump/restore — dumpdata is slow. Step 9: Test all migrations against Postgres before go-live. SQLite and Postgres have different type handling (JSON, arrays, custom types).',
        difficulty: 'Scenario',
        category: 'Database',
      },
      {
        id: 73,
        question: 'Scenario: Your Django application is processing payment webhooks and occasionally missing events. How would you fix this?',
        answer:
          'Root cause: missing webhooks usually means the endpoint is too slow (times out), crashes (500 errors), or is blocked by CSRF/auth. Fix: 1) Make the webhook endpoint @csrf_exempt and skip auth (use HMAC signature verification instead). 2) Store the raw payload immediately and return 200 quickly. 3) Process asynchronously in a Celery task. 4) Implement idempotency: store event IDs in a WebhookEvent table — skip if already processed. 5) Implement retry logic on the Stripe/Razorpay side (or manually replay missed events from their dashboard). 6) Log all incoming webhooks with timestamp and status.',
        difficulty: 'Scenario',
        category: 'API',
      },
      {
        id: 74,
        question: 'Scenario: How would you add multi-language support to an existing Django app?',
        answer:
          'Step 1: Set USE_I18N = True, USE_L10N = True in settings. Step 2: Add LocaleMiddleware to MIDDLEWARE. Step 3: Wrap strings: from django.utils.translation import gettext_lazy as _; name = _("Name"). Step 4: Generate .po files: django-admin makemessages -l hi for Hindi. Step 5: Translate strings in .po files. Step 6: Compile: django-admin compilemessages. Step 7: For models, use django-parler or modeltranslation for translated model fields. Step 8: Set LANGUAGE_CODE and LANGUAGES in settings. For Indian apps, support Hindi, Tamil, Telugu, Bengali. RTL languages need CSS direction: rtl.',
        difficulty: 'Scenario',
        category: 'Internationalization',
      },
      {
        id: 75,
        question: 'Scenario: How would you design a permission system for a SaaS where users have different roles per organization?',
        answer:
          'Model: Organization, User, Role (admin/member/viewer), OrganizationMembership(user, org, role). Custom permission backend: class OrgPermissionBackend: def has_perm(self, user, perm, obj): membership = OrgMembership.objects.get(user=user, org=obj.org); return perm in ROLE_PERMISSIONS[membership.role]. Register: AUTHENTICATION_BACKENDS = ["myapp.backends.OrgPermissionBackend"]. In DRF: class IsOrgMember(BasePermission): def has_object_permission(self, request, view, obj): return OrgMembership.objects.filter(user=request.user, org=obj.org).exists(). Cache membership queries in Redis to avoid per-request DB hits.',
        difficulty: 'Scenario',
        category: 'Authentication',
      },
      {
        id: 76,
        question: 'Scenario: How would you implement audit logging in a Django app?',
        answer:
          'Options: 1) django-simple-history: tracks all model changes automatically, stores a history table per model — easiest to implement. 2) Custom: use post_save, post_delete signals to write to an AuditLog model {user, action, model, object_id, old_data, new_data, timestamp}. Capture request user in middleware via thread-local storage. 3) PostgreSQL logical replication: capture all DB changes at the DB level. For GDPR compliance: scrub PII from logs after retention period. For compliance-critical systems (fintech, healthcare), use immutable audit logs (write to append-only storage like AWS CloudWatch Logs or S3).',
        difficulty: 'Scenario',
        category: 'Architecture',
      },
      {
        id: 77,
        question: 'Scenario: How would you handle bulk data imports (10,000+ rows) in Django?',
        answer:
          'Avoid: creating objects one at a time in a loop (10,000 DB calls). Use bulk_create(): Post.objects.bulk_create([Post(**row) for row in rows], batch_size=500). For updates: bulk_update(objects, fields, batch_size=500). For very large imports (CSV, Excel), process in a Celery task to avoid HTTP timeout. Streaming: read CSV in chunks (pandas read_csv with chunksize). Validation: validate all rows before inserting — collect errors and report. Use ignore_conflicts=True to skip duplicates. Track import progress in Redis (celery task ID → progress %). Email report on completion.',
        difficulty: 'Scenario',
        category: 'Performance Optimization',
      },
      {
        id: 78,
        question: 'Scenario: How do you roll out a zero-downtime migration in Django?',
        answer:
          'Zero-downtime migration strategy: Step 1: Add new column (nullable) — backward compatible. Step 2: Deploy code that writes to both old and new columns. Step 3: Backfill old data (batch, low-priority). Step 4: Deploy code that reads from new column. Step 5: Make column non-nullable (all data filled). Step 6: Remove old column in a later release. Dangerous operations (renaming columns, dropping columns, adding non-nullable columns) require staging. Use pg_repack for table rewrites without locking. Deploy in multiple releases. Test migration rollback: python manage.py migrate app_name 0003.',
        difficulty: 'Scenario',
        category: 'Deployment',
      },
      {
        id: 79,
        question: 'Scenario: Design a notification system in Django that supports email, SMS, and push.',
        answer:
          'Model: Notification(user, type, title, body, channel, status, sent_at, read_at). Channel abstractions: NotificationChannel base class; EmailChannel, SMSChannel, PushChannel implementations. Notification service: def send(user, type, channels): for ch in channels: NotificationChannelModel.objects.create(user=user, channel=ch, ...).then trigger Celery task. Celery tasks per channel: send_email.delay(), send_sms.delay(), send_push.delay(). Use Twilio for SMS, FCM for push, SES for email. Preferences: UserNotificationPreference model (user, notification_type, email_enabled, sms_enabled). Retry on failure with exponential backoff.',
        difficulty: 'Scenario',
        category: 'System Design',
      },
      {
        id: 80,
        question: 'Scenario: How would you implement a search API with filters, sorting, and pagination in DRF?',
        answer:
          'Use django-filter for declarative filtering: class PostFilter(FilterSet): title = CharFilter(lookup_expr="icontains"); published = BooleanFilter(); class Meta: model = Post; fields = ["title", "published"]. In ViewSet: filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]; filterset_class = PostFilter; ordering_fields = ["created_at", "views"]; search_fields = ["title", "body"]. Pagination: pagination_class = PageNumberPagination. Query: GET /posts/?title=django&ordering=-created_at&search=orm&page=2. For advanced search (fuzzy, typo-tolerant), integrate Elasticsearch or Typesense via a separate endpoint.',
        difficulty: 'Scenario',
        category: 'DRF',
      },

      // ── SYSTEM DESIGN (10) ────────────────────────────────────
      {
        id: 81,
        question: 'System Design: Design a scalable Django-based e-commerce backend.',
        answer:
          'Services: Product Catalog, Order Management, Inventory, Payment, User Auth. Django monolith to start: apps for each domain. Database: PostgreSQL (primary), read replicas for catalog. Cache: Redis (product data, sessions, cart). Async: Celery for order confirmation emails, inventory updates. File storage: S3 for product images via django-storages. Payment: Razorpay integration with webhook-based confirmation. Search: Elasticsearch (django-elasticsearch-dsl) for product search. Queue: Kafka or RabbitMQ for order events to Inventory service. API: DRF with JWT auth, versioning (/api/v1/). Deployment: Docker + Kubernetes on AWS EKS. Scaling: horizontal Gunicorn workers, Redis cluster, RDS Multi-AZ.',
        difficulty: 'System Design',
        category: 'System Design',
      },
      {
        id: 82,
        question: 'System Design: Design a Django-based multi-tenant SaaS billing system.',
        answer:
          'Models: Tenant, Subscription(tenant, plan, status), Invoice(tenant, amount, period, paid_at), UsageRecord(tenant, metric, quantity, timestamp). Billing logic: cron job (Celery beat) runs on billing cycle end, calculates usage, creates Invoice, charges via Stripe/Razorpay. Webhook: payment confirmation updates Invoice.paid_at. Dunning: retry failed payments (3 attempts over 7 days), then suspend account. Tenant isolation: all models have tenant ForeignKey + custom manager filters by tenant. API: /api/billing/invoices/, /api/billing/subscription/. Currency: store in paise/cents (integer). Notifications: email on invoice generated, payment failed, account suspended.',
        difficulty: 'System Design',
        category: 'System Design',
      },
      {
        id: 83,
        question: 'System Design: Design a Django API for a real-time collaborative document editor.',
        answer:
          'Components: REST API (DRF) for document CRUD; WebSocket server (Django Channels) for real-time collaboration; Operational Transformation (OT) or CRDT for conflict resolution; Redis Channel Layers for broadcasting. Flow: User connects via WebSocket to document room; sends edit operations; server validates, applies to document state (CRDT in Redis), broadcasts to all connected clients. Persistence: save document state to PostgreSQL every N operations or on disconnect. Presence: track connected users per document in Redis. Auth: JWT token in WebSocket URL. Conflict resolution: CRDT (conflict-free replicated data type) is simpler than OT. Use Yjs (CRDT library) over WebSockets.',
        difficulty: 'System Design',
        category: 'System Design',
      },
      {
        id: 84,
        question: 'System Design: Design a Django-based content delivery system for a news platform.',
        answer:
          'Models: Article, Author, Category, Tag. Publishing workflow: draft → review → published. CDN: CloudFront in front of Django; cache article pages (TTL=5min). Invalidation: trigger CloudFront invalidation via boto3 when article updates. Database: PostgreSQL; read replicas for article queries. Full-text search: Elasticsearch for article search; sync on post_save signal via Celery. Comments: separate service (Disqus or custom). Pagination: cursor-based for infinite scroll feeds. Personalization: recommend articles based on read history (collaborative filtering). AMP: generate AMP-compatible responses for mobile. Sitemaps: django.contrib.sitemaps for SEO. Rate limiting: protect API from scraping.',
        difficulty: 'System Design',
        category: 'System Design',
      },
      {
        id: 85,
        question: 'System Design: How would you design Django-based analytics tracking API?',
        answer:
          'Ingestion: lightweight API endpoint (POST /track) that accepts events JSON, validates minimal fields, writes immediately to Kafka (fire-and-forget) and returns 200. Never block ingestion on DB writes. Kafka consumer: Celery or Faust stream processor reads events, normalizes, enriches (GeoIP, device parsing), writes to ClickHouse (OLAP database, excellent for analytics). Django admin dashboard: queries ClickHouse via HTTP API for aggregate reports. Cold storage: raw events in S3 (Parquet) for ML/BI. Deduplication: idempotency keys in Redis (24h TTL). Client SDKs: JS, Android, iOS that batch events and retry on failure.',
        difficulty: 'System Design',
        category: 'System Design',
      },
      {
        id: 86, question: 'System Design: Design an HRMS API using Django.', answer: 'Models: Employee, Department, Designation, Attendance(employee, date, check_in, check_out), LeaveRequest(employee, type, from_date, to_date, status), Payroll(employee, month, gross, deductions, net). Auth: JWT, role-based (HR Manager, Employee, Admin). Attendance: biometric device POSTs to /api/attendance/; store raw entry, compute hours worked. Leave: employee submits request; manager approves/rejects (workflow via status field + DRF action). Payroll: Celery Beat triggers monthly payroll computation; generates PDF slip (WeasyPrint). Notifications: email on leave approval, payslip ready. Reports: attendance summary, leave balance, headcount by department — DRF + Pandas. Export: CSV/Excel via openpyxl.', difficulty: 'System Design', category: 'System Design'
      },
      {
        id: 87, question: 'System Design: Design a Django-based API Gateway for microservices.', answer: 'API Gateway responsibilities: authentication, rate limiting, routing, logging, response transformation. Implementation: Django as the gateway. Middleware stack: AuthMiddleware (verify JWT → attach user), RateLimitMiddleware (Redis token bucket), LoggingMiddleware (structured JSON logs). Routing: URL patterns map to upstream services. Proxy: use httpx (async) to forward requests to upstream microservices. Service registry: Redis or Consul stores service URLs. Circuit breaker: if upstream returns 5xx 5 times in 30s, open circuit — return 503 for 30s. Response transformation: strip internal headers, add request IDs. Health checks: /health aggregates upstream service health.', difficulty: 'System Design', category: 'System Design'
      },
      {
        id: 88, question: 'System Design: Design a Django-based job board platform.', answer: 'Models: Company, JobPost(company, title, description, skills, location, salary_range, type, status), Candidate, Application(candidate, job, status, resume, cover_letter), SavedJob. Auth: separate roles (Recruiter, Candidate). Job search: Elasticsearch (skills, title, location, salary filter). Applications: workflow status (applied → screening → interview → offer → hired/rejected). Notifications: email on application status change. Analytics: Recruiter dashboard — views per job, conversion funnel. Alerts: Candidate can set job alerts (Celery beat checks daily). Resume storage: S3. Recommendations: match candidate skills to job requirements (TF-IDF or embeddings). Rate limit: prevent mass applications.', difficulty: 'System Design', category: 'System Design'
      },
      {
        id: 89, question: 'System Design: Design a real-time stock price notification system using Django.', answer: 'Data ingestion: consume market data from NSE/BSE WebSocket feed in a Celery worker (or dedicated microservice) → publish price updates to Redis Pub/Sub channel per stock. Subscription API: POST /api/alerts/ {stock: "INFY", condition: "price_above", value: 1500}. Store alerts in PostgreSQL. Alert evaluator: Celery worker subscribes to Redis Pub/Sub; on each price tick, query Redis for active alerts on that stock, evaluate conditions, trigger notifications. Notification: push to client WebSocket (Django Channels), email, or SMS. Deduplication: mark alert as triggered, avoid repeated fire. Reset: user-configurable alert reset (one-time or recurring).', difficulty: 'System Design', category: 'System Design'
      },
      {
        id: 90, question: 'System Design: Design a scalable file processing pipeline using Django and Celery.', answer: 'Flow: user uploads file to S3 via presigned URL (bypass Django for large files); upload completion triggers SNS event → SQS queue → Django webhook endpoint; Django creates FileJob record (status=queued) and enqueues Celery task. Celery worker: download from S3, process (parse CSV, convert PDF, resize image), store output back to S3, update FileJob status. Progress: real-time updates via WebSocket or polling /api/jobs/{id}/status/. Error handling: retry 3 times with exponential backoff; after max retries, mark failed and notify user. Concurrent processing: worker concurrency controlled by Celery. Large files: stream process in chunks to avoid memory issues.', difficulty: 'System Design', category: 'System Design'
      },

      // ── REMAINING ADVANCED/INTERMEDIATE to reach 105 ─────────
      {
        id: 91, question: 'What is the purpose of the related_name argument in ForeignKey?', answer: 'related_name defines the reverse accessor from the related model back to the model with the FK. Example: author = ForeignKey(User, related_name="posts"). Access: user.posts.all() instead of the default user.post_set.all(). Use related_name="+" to disable the reverse accessor if you don\'t need it. In abstract models, use related_name="%(class)s_set" to avoid clashes across subclasses. Choosing descriptive related names makes ORM queries more readable.', difficulty: 'Beginner', category: 'ORM'
      },
      {
        id: 92, question: 'What is the difference between redirect() and HttpResponseRedirect in Django?', answer: 'redirect() is a shortcut that accepts a URL string, model instance (calls get_absolute_url()), or view name with args. It returns a 302 redirect by default (or 301 with permanent=True). HttpResponseRedirect takes a URL string only. redirect() is more flexible and preferred in views. For named URLs: redirect("post-detail", pk=post.pk). For model instances: redirect(post) (requires get_absolute_url on Post). Use HttpResponsePermanentRedirect for 301s or set permanent=True in redirect().', difficulty: 'Beginner', category: 'Views'
      },
      {
        id: 93, question: 'What is the CONN_MAX_AGE setting in Django?', answer: 'CONN_MAX_AGE sets how long (in seconds) Django keeps a database connection open between requests. Default is 0 (new connection per request). Set to 60 to reuse connections for 60 seconds. This reduces connection overhead for high-traffic apps. Caveat: with PgBouncer (transaction-mode pooling), set CONN_MAX_AGE=0 — PgBouncer manages pooling. With session-mode PgBouncer, CONN_MAX_AGE can be set. Set to None for persistent connections (not recommended without pooler). Test under load to find the optimal value.', difficulty: 'Intermediate', category: 'Database'
      },
      {
        id: 94, question: 'How do you implement field-level encryption in Django?', answer: 'Use django-encrypted-fields or django-fernet-fields to encrypt sensitive data (national ID, bank account) at the application level. Fields are encrypted before writing to DB and decrypted when read. Example: from fernet_fields import EncryptedCharField; class Profile(models.Model): national_id = EncryptedCharField(max_length=20). Caveats: encrypted fields cannot be filtered/indexed efficiently (no SQL WHERE on encrypted data). For indexed lookups, store a hash of the value separately (HMAC) and query by hash. Key management: store encryption keys in AWS KMS or HashiCorp Vault, not in settings.', difficulty: 'Advanced', category: 'Security'
      },
      {
        id: 95, question: 'What is a Django management command? How do you write one?', answer: 'Custom management commands extend manage.py. Create at app/management/commands/my_command.py: from django.core.management.base import BaseCommand; class Command(BaseCommand): help = "My custom command"; def add_arguments(self, parser): parser.add_argument("--dry-run", action="store_true"); def handle(self, *args, **options): if options["dry_run"]: self.stdout.write("Dry run"); return; # actual logic. Run: python manage.py my_command --dry-run. Use for: data migrations, scheduled tasks (called by cron), maintenance scripts. Use self.stdout.write() instead of print() for proper output handling.', difficulty: 'Intermediate', category: 'Framework Basics'
      },
      {
        id: 96, question: 'How do you handle file validation in Django?', answer: 'Validate in serializer/form: def validate_image(self, value): if value.size > 5 * 1024 * 1024: raise serializers.ValidationError("Max 5MB"); ext = value.name.split(".")[-1].lower(); if ext not in ["jpg", "jpeg", "png"]: raise ValidationError("Only JPG/PNG"); return value. For deeper validation, read the file magic bytes (not just extension): import magic; mime = magic.from_buffer(value.read(1024), mime=True). Never trust file extensions alone — an attacker can rename a PHP file to .jpg. Also set max upload size at Nginx level (client_max_body_size) to reject oversized files before hitting Django.', difficulty: 'Intermediate', category: 'File Handling'
      },
      {
        id: 97, question: 'What is Django\'s database constraint vs model validation?', answer: 'Model validation (clean(), validators) runs in Python — only enforced in forms and serializers, not in bulk DB operations (bulk_create, update()). Database constraints (unique, check constraints, FK) are enforced at the DB level — always enforced regardless of how data is inserted. Best practice: use both. Define DB constraints in model Meta.constraints for integrity, and Python validators for user-friendly error messages. Example: UniqueConstraint(fields=["email", "tenant_id"]) in Meta.constraints creates a real DB unique index. Never rely on Python-only validation for data integrity in production.', difficulty: 'Advanced', category: 'ORM'
      },
      {
        id: 98, question: 'How does Django\'s session framework work?', answer: 'Sessions store user data server-side, identified by a session ID cookie. Backends: database (default, stores in django_session table), cache (Redis — fast, recommended for production), file, signed cookie (data in cookie, signed but visible). Configure: SESSION_ENGINE = "django.contrib.sessions.backends.cache"; SESSION_CACHE_ALIAS = "default". Access: request.session["key"] = value. Session middleware reads session ID from cookie, fetches session data, attaches to request. Sessions expire: SESSION_COOKIE_AGE (default 2 weeks). Use SESSION_COOKIE_SECURE=True in production. For APIs, prefer JWT over sessions.', difficulty: 'Intermediate', category: 'Authentication'
      },
      {
        id: 99, question: 'How do you implement full-text search with PostgreSQL in Django?', answer: 'Django 1.10+ has PostgreSQL full-text search support. SearchVector("title", "body") creates a tsvector. SearchQuery("django orm") parses the query. SearchRank ranks results by relevance. Full query: Post.objects.annotate(rank=SearchRank(SearchVector("title", "body"), SearchQuery(query))).filter(rank__gte=0.1).order_by("-rank"). For performance, add a SearchVectorField: body_vector = SearchVectorField(null=True). Update on save with a signal. Create a GIN index: GinIndex(fields=["body_vector"]). This is fast for <1M records; use Elasticsearch for larger datasets.', difficulty: 'Advanced', category: 'Search'
      },
      {
        id: 100, question: 'What is a Django receiver decorator and how does it prevent signal from being registered multiple times?', answer: 'The @receiver decorator connects a function to a signal. If signals.py is imported multiple times (e.g., in AppConfig.ready() and also in models.py), receivers register multiple times — handler fires twice. Fix: register signals only in AppConfig.ready(): def ready(self): import myapp.signals. Don\'t import signals at module level elsewhere. Alternatively, use dispatch_uid: @receiver(post_save, sender=Post, dispatch_uid="myapp.signals.send_email") — dispatch_uid ensures the handler is registered once globally, even if imported multiple times.', difficulty: 'Advanced', category: 'Signals'
      },
      {
        id: 101, question: 'What is the difference between .save() and .update() in Django ORM?', answer: '.save() instantiates the model in Python, triggers pre_save/post_save signals, calls clean(), and saves all fields. .update() runs a single SQL UPDATE without loading objects into Python — no signals, no validation. Performance: Post.objects.filter(status="draft").update(status="published") is one SQL query; looping and calling .save() is N queries. Use .update() for bulk updates where you don\'t need signals or validation. Use .save(update_fields=["status"]) to save specific fields only and avoid overwriting concurrent changes.', difficulty: 'Intermediate', category: 'ORM'
      },
      {
        id: 102, question: 'How do you prevent SQL injection in Django?', answer: 'Django\'s ORM parameterizes queries automatically, so standard ORM usage is safe. Never use string formatting in queries: Post.objects.raw(f"SELECT * FROM post WHERE title=\'{user_input}\'") — this is vulnerable. Use parameterized raw queries: Post.objects.raw("SELECT * FROM post WHERE title=%s", [user_input]). For execute(): cursor.execute("SELECT * FROM post WHERE title=%s", [user_input]). Validate and sanitize user input. Never pass user input directly to filter() with **dict without validation. Django admin and forms escape HTML by default. Use mark_safe() with extreme caution.', difficulty: 'Intermediate', category: 'Security'
      },
      {
        id: 103, question: 'What is the purpose of Meta class in Django models?', answer: 'The inner Meta class provides model metadata. Common options: db_table (custom table name), ordering (default sort: ordering = ["-created_at"]), verbose_name and verbose_name_plural (admin labels), abstract = True (abstract base model), unique_together or UniqueConstraint (composite unique), indexes (database indexes), constraints (DB-level constraints), get_latest_by (default field for .latest() and .earliest()). Example: class Meta: ordering = ["-created_at"]; db_table = "blog_post"; verbose_name = "Blog Post". Meta doesn\'t affect Python behavior — it\'s metadata for the ORM and admin.', difficulty: 'Beginner', category: 'ORM'
      },
      {
        id: 104, question: 'How do you implement rate limiting per user and per IP in DRF?', answer: 'DRF throttling: create scope-based throttles. Per-user: class UserBurstThrottle(UserRateThrottle): scope = "user_burst"; rates["user_burst"] = "30/min". Per-IP: class AnonThrottle(AnonRateThrottle): scope = "anon"; rates["anon"] = "10/min". Apply to ViewSet: throttle_classes = [UserBurstThrottle, AnonThrottle]. Store throttle counters in cache (Redis). For dynamic rate limits based on plan (free vs paid): override get_rate(): class PlanAwareThrottle(UserRateThrottle): def get_rate(self): plan = self.request.user.subscription.plan; return PLAN_LIMITS[plan]. Return 429 with Retry-After header.', difficulty: 'Advanced', category: 'DRF'
      },
      {
        id: 105, question: 'System Design: Design a Django-based audit-compliant fintech transaction API.', answer: 'Requirements: every transaction is immutable, traceable, auditable. Models: Account(user, balance_paise), Transaction(id=UUID, from_account, to_account, amount_paise, status, idempotency_key, created_at). Rules: never update or delete transactions — only append. Use database-level constraint: status can only move forward (pending → processing → completed/failed). Idempotency: unique idempotency_key per client request — return existing transaction if key seen. Concurrency: select_for_update() on Account during debit. Double-entry bookkeeping: for every debit, create a corresponding credit. Audit log: immutable append-only log (write to S3 + PostgreSQL). Encryption: encrypt account numbers at rest. API: POST /transactions/ with idempotency key in header. Reconciliation: daily Celery job compares sum of all debits/credits per account.', difficulty: 'System Design', category: 'System Design'
      },
    ],
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
    questions: [
      // ── BEGINNER (25) ─────────────────────────────────────────
      { id: 1, question: 'What is React and why is it used?', answer: 'React is a JavaScript library for building user interfaces, developed and maintained by Meta. It uses a component-based architecture where UIs are broken into reusable, self-contained components. React uses a virtual DOM to efficiently update the real DOM, minimizing expensive DOM operations. It\'s used for building single-page applications (SPAs), mobile apps (React Native), and server-rendered apps (Next.js). React\'s one-way data flow and declarative approach make it predictable and easier to debug compared to two-way binding frameworks.', difficulty: 'Beginner', category: 'Fundamentals' },
      { id: 2, question: 'What is JSX? How does it work under the hood?', answer: 'JSX is a syntax extension for JavaScript that looks like HTML. <div className="box">Hello</div> is transpiled by Babel to React.createElement("div", {className: "box"}, "Hello"). JSX is not HTML — it\'s syntactic sugar for React.createElement() calls. JSX requires a single root element (or <> fragments). Class is className (reserved JS keyword). JSX expressions use {} for embedding JavaScript: <p>{name.toUpperCase()}</p>. Attributes use camelCase: onClick, onChange. JSX is optional but universal in React development.', difficulty: 'Beginner', category: 'Fundamentals', followUp: 'What does React.createElement return?' },
      { id: 3, question: 'What are React components? What is the difference between functional and class components?', answer: 'Components are reusable UI building blocks. Functional components are plain JavaScript functions that return JSX: const Button = ({ label }) => <button>{label}</button>. Class components extend React.Component: class Button extends React.Component { render() { return <button>{this.props.label}</button>; }}. Functional components are preferred today because hooks provide all lifecycle functionality. Class components are legacy but still encountered in older codebases. Functional components are simpler, more concise, and easier to test.', difficulty: 'Beginner', category: 'Components' },
      { id: 4, question: 'What are props? How do you pass data between components?', answer: 'Props (properties) are read-only inputs passed from parent to child components. Example: <Button label="Submit" onClick={handleClick} />. Inside Button: function Button({ label, onClick }) { return <button onClick={onClick}>{label}</button>; }. Props flow one way — parent to child. To pass data from child to parent, pass a callback as a prop. Props can be any JavaScript value: strings, numbers, arrays, objects, functions, or components. Default props: function Button({ label = "Click" }) { ... } or defaultProps.', difficulty: 'Beginner', category: 'Components' },
      { id: 5, question: 'What is state in React? How do you use useState?', answer: 'State is mutable data that lives inside a component and triggers re-renders when updated. const [count, setCount] = useState(0). useState returns [currentValue, setterFunction]. Calling setCount(count + 1) triggers a re-render with the new value. State is local to the component unless lifted up or managed by a state library. Don\'t mutate state directly (count++ won\'t work). For objects: setUser(prev => ({...prev, name: "Alice"})). Functional updates avoid stale closures in async operations.', difficulty: 'Beginner', category: 'Hooks', followUp: 'What happens if you call setState inside a render?' },
      { id: 6, question: 'What is the useEffect hook? When does it run?', answer: 'useEffect runs side effects (data fetching, subscriptions, DOM manipulation) after rendering. Runs after every render by default. With empty dependency array [], runs only on mount. With [dep1, dep2], runs when deps change. Cleanup: return a function from useEffect to run on unmount or before next effect. Example: useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []). Common mistake: missing deps in array causes stale closures; adding all deps can cause infinite loops (useCallback helps).', difficulty: 'Intermediate', category: 'Hooks', followUp: 'What is the cleanup function and when does it run?' },
      { id: 7, question: 'What is the virtual DOM? How does React reconciliation work?', answer: 'The virtual DOM is an in-memory JavaScript representation of the real DOM. When state changes, React creates a new virtual DOM tree and diffs it against the previous one (reconciliation). Only changed parts are updated in the real DOM (minimal DOM operations). React\'s diffing algorithm (Fiber) is O(n) — it assumes elements of the same type produce similar trees and uses keys for list items. Keys help React identify which items changed, were added, or removed. Without keys, React may re-render entire lists inefficiently.', difficulty: 'Intermediate', category: 'Internals' },
      { id: 8, question: 'What are React keys and why are they important?', answer: 'Keys uniquely identify list items across renders, helping React efficiently update lists. <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>. Without keys, React re-renders the entire list on any change. With keys, React tracks which items moved, changed, or were removed. Key must be unique among siblings, not globally. Don\'t use array indices as keys when the list can reorder — this causes subtle bugs. Keys are not passed as props to components; use a separate prop if you need the ID value.', difficulty: 'Beginner', category: 'Lists & Keys' },
      { id: 9, question: 'What is conditional rendering in React?', answer: 'Render different UI based on state: use ternary operator ({isLoggedIn ? <Dashboard /> : <Login />}), logical AND ({isLoading && <Spinner />}), or early return inside the component. Avoid if/else in JSX expressions (not supported) — use variables instead: const element = isLoggedIn ? <Dashboard /> : <Login />, then render {element}. Switch statements work in JavaScript sections, not JSX expressions. null, undefined, and false don\'t render anything — useful for conditional rendering.', difficulty: 'Beginner', category: 'Rendering' },
      { id: 10, question: 'How do you handle events in React?', answer: 'React events are camelCase and accept functions: <button onClick={handleClick}>. Event handlers receive a SyntheticEvent (React wrapper for native events). Prevent default: e.preventDefault() (e.g., form submit). Stop propagation: e.stopPropagation(). Pass arguments: <button onClick={() => handleDelete(item.id)}>. Don\'t call the function immediately: onClick={handleClick} (correct), onClick={handleClick()} (wrong — runs on render). For performance, define handlers outside JSX (avoid creating new functions on each render in hot paths).', difficulty: 'Beginner', category: 'Events' },
      { id: 11, question: 'What is the difference between controlled and uncontrolled components?', answer: 'Controlled components: form data is controlled by React state. <input value={name} onChange={e => setName(e.target.value)} />. React is the source of truth. Uncontrolled components: form data is handled by the DOM. Use a ref to access values: const ref = useRef(); <input ref={ref} />; ref.current.value. Controlled components are preferred for complex forms (validation, dependent fields). Uncontrolled components are simpler for basic forms or integrating with third-party DOM libraries. React Hook Form uses uncontrolled inputs for performance.', difficulty: 'Intermediate', category: 'Forms', followUp: 'Why does React Hook Form use uncontrolled inputs?' },
      { id: 12, question: 'What is the useRef hook?', answer: 'useRef returns a mutable object with a .current property that persists across renders without triggering re-renders. Two use cases: 1) Accessing DOM nodes: const inputRef = useRef(); <input ref={inputRef} />; inputRef.current.focus(). 2) Storing mutable values that shouldn\'t cause re-renders (like timers, previous values): const timerRef = useRef(null); timerRef.current = setInterval(...). Unlike useState, updating a ref doesn\'t re-render. Use refs for: focusing inputs, measuring elements, storing setTimeout IDs, or keeping previous values.', difficulty: 'Intermediate', category: 'Hooks' },
      { id: 13, question: 'What is the useContext hook? How does it work?', answer: 'useContext provides a way to share data across the component tree without prop drilling. Step 1: Create context: const ThemeContext = React.createContext("light"). Step 2: Provide: <ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>. Step 3: Consume: const theme = useContext(ThemeContext). Components re-render when context value changes. Context is good for: theme, auth user, language, global config. For frequent updates (every keystroke), context re-renders all consumers — prefer Zustand or Redux for high-frequency state.', difficulty: 'Intermediate', category: 'State Management' },
      { id: 14, question: 'What is useMemo? How does it differ from useCallback?', answer: 'useMemo memoizes a computed value: const result = useMemo(() => expensiveCalc(a, b), [a, b]). Returns cached result when deps unchanged. useCallback memoizes a function: const fn = useCallback(() => doSomething(id), [id]). Returns the same function reference when deps unchanged. Use useMemo to avoid expensive recalculations. Use useCallback to prevent child re-renders (when passing functions as props to memoized components). Both only help when re-renders are actually expensive — don\'t add them prematurely (has cost itself).', difficulty: 'Intermediate', category: 'Hooks', followUp: 'When should you NOT use useMemo?' },
      {
        id: 15, question: 'What is React.memo?', answer: 'React.memo is a higher-order component that memoizes a functional component — skips re-rendering if props haven\'t changed (shallow equality). const MemoButton = React.memo(({ label, onClick }) => <button onClick={onClick}>{label}</button>). Re-renders if label or onClick changes. Problem: if onClick is a new function on each parent render, memo is useless — wrap with useCallback. Use memo for: expensive components, frequently rendered list items, components with stable props. Shallow equality check — nested objects always fail equality.',
        difficulty: 'Intermediate', category: 'Performance'
      },
      { id: 16, question: 'What is prop drilling and how do you avoid it?', answer: 'Prop drilling is passing props through multiple intermediary components that don\'t use the prop themselves. <App> → <Layout> → <Sidebar> → <UserMenu user={user} /> — Layout and Sidebar don\'t need user, but must pass it down. Solutions: 1) useContext for widely-needed data (theme, auth user). 2) State management library (Redux, Zustand) for complex shared state. 3) Component composition: pass components as children or render props instead of data. 4) React Router state for route-level data. Prop drilling isn\'t always bad for 2-3 levels; optimize only when it causes maintenance issues.', difficulty: 'Intermediate', category: 'State Management' },
      { id: 17, question: 'What are React fragments?', answer: 'Fragments let you group elements without adding extra DOM nodes. Instead of wrapping in <div>, use <React.Fragment> or shorthand <>. Example: return (<><h1>Title</h1><p>Body</p></>). Useful when adding a wrapper div would break CSS (flexbox/grid parent-child structure). Fragments with keys: <React.Fragment key={id}> (shorthand <> doesn\'t support keys). Fragments don\'t appear in the DOM — they\'re a grouping mechanism. Use in lists, table rows, and any case where an extra DOM wrapper is undesirable.', difficulty: 'Beginner', category: 'Rendering' },
      { id: 18, question: 'What are default props and prop types?', answer: 'PropTypes validates prop types at runtime (development only): import PropTypes from "prop-types"; Button.propTypes = { label: PropTypes.string.isRequired, onClick: PropTypes.func }. Throws console warnings if props don\'t match. Default props: Button.defaultProps = { label: "Click" } or use ES6 default parameters: function Button({ label = "Click" }) {}. In TypeScript projects, use interfaces instead of PropTypes — compile-time checking is more powerful. PropTypes are useful in plain JavaScript projects for catching type errors during development.', difficulty: 'Beginner', category: 'Components' },
      { id: 19, question: 'What is the difference between state and props?', answer: 'Props are external, read-only data passed from parent to child. State is internal, mutable data owned by the component. Props make components reusable; state makes components interactive. A parent passes data via props; the child can request changes via callback props. State changes trigger re-renders; prop changes trigger re-renders too (because the parent re-rendered). Rule of thumb: if data is shared across components, lift it up to the closest common ancestor. If data is local to one component, keep it in state.', difficulty: 'Beginner', category: 'Fundamentals' },
      { id: 20, question: 'What is the React component lifecycle?', answer: 'Class component lifecycle: Mount (constructor → render → componentDidMount), Update (render → componentDidUpdate), Unmount (componentWillUnmount). In functional components with hooks: Mount = useEffect(() => {}, []) (empty deps). Update = useEffect(() => {}, [dep]) (specific deps). Unmount = return () => cleanup() inside useEffect. Hooks replace all lifecycle methods. getSnapshotBeforeUpdate, componentDidCatch, getDerivedStateFromProps have no direct hook equivalent — sometimes needed in class components for error boundaries. React 18 introduces new lifecycle behaviors (StrictMode double-invokes effects in dev).', difficulty: 'Intermediate', category: 'Lifecycle' },
      { id: 21, question: 'What is React Router? How do you implement routing?', answer: 'React Router is the standard routing library for React SPAs. In React Router v6: <BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/posts/:id" element={<PostDetail />} /></Routes></BrowserRouter>. Nested routes: <Route path="/dashboard" element={<Dashboard />}><Route index element={<Overview />} /></Route>. Navigation: <Link to="/posts">Posts</Link> or useNavigate hook. Params: const { id } = useParams(). Query strings: useSearchParams(). Protect routes: wrap with auth check in the element. Next.js has file-system routing built in (no React Router needed).', difficulty: 'Intermediate', category: 'Routing' },
      { id: 22, question: 'What are Higher Order Components (HOCs)?', answer: 'An HOC is a function that takes a component and returns a new component with enhanced behavior. Example: const withAuth = (WrappedComponent) => (props) => { if (!isAuthenticated) return <Redirect to="/login" />; return <WrappedComponent {...props} /> }. HOCs add functionality (auth, logging, data fetching) without modifying the original component. Common HOCs: React.memo, Redux connect(), React Router withRouter(). HOCs are a legacy pattern — hooks solve the same problems more cleanly. Use HOCs mainly when interoperating with older code or class components.', difficulty: 'Intermediate', category: 'Patterns' },
      { id: 23, question: 'What are render props?', answer: 'Render props is a pattern where a component receives a function prop that returns JSX. <DataFetcher render={data => <List items={data} />} />. The component controls when/how to call the function. Popular in older React code. Example: <Mouse render={({ x, y }) => <Cursor x={x} y={y} />} />. Render props solve the same cross-cutting concern problem as HOCs and custom hooks. Today, custom hooks are preferred over render props — cleaner syntax, easier to compose. Render props are still found in some libraries (React Hook Form, Formik, Downshift).', difficulty: 'Intermediate', category: 'Patterns' },
      { id: 24, question: 'What is React\'s StrictMode?', answer: 'StrictMode is a development tool that helps identify potential issues. Wrap: <React.StrictMode><App /></React.StrictMode>. What it does: warns about deprecated lifecycle methods, detects unexpected side effects (double-invokes render, state initializers, useEffect setup — not teardown — to find issues), warns about findDOMNode usage. It only runs in development (no production impact). React 18 StrictMode double-invokes effects to simulate Suspense/concurrent behavior. Don\'t disable StrictMode to silence warnings — fix the underlying issue.', difficulty: 'Intermediate', category: 'Development Tools' },
      { id: 25, question: 'How do you handle forms in React?', answer: 'Controlled form: const [form, setForm] = useState({ name: "", email: "" }); <input value={form.name} onChange={e => setForm(prev => ({...prev, name: e.target.value}))} />. Validate on submit: const handleSubmit = e => { e.preventDefault(); if (!form.email) setErrors({email: "Required"}); else submitForm(form) }. For complex forms, use React Hook Form (excellent performance, schema validation with Zod/Yup) or Formik. React Hook Form uses uncontrolled inputs with refs for performance — avoids re-rendering on every keystroke. Form libraries handle validation, error messages, submission, and dirty state tracking.', difficulty: 'Intermediate', category: 'Forms' },

      // ── INTERMEDIATE (30) ─────────────────────────────────────
      { id: 26, question: 'Explain the useReducer hook. When should you use it over useState?', answer: 'useReducer manages complex state transitions. const [state, dispatch] = useReducer(reducer, initialState). Reducer: function reducer(state, action) { switch(action.type) { case "INCREMENT": return {...state, count: state.count + 1 }; } }. Dispatch: dispatch({type: "INCREMENT"}). Use useReducer when: state has multiple sub-values, next state depends on previous in complex ways, or state transitions need to be tested independently. useState is fine for simple, independent values. useReducer + Context can replace Redux for medium apps.', difficulty: 'Intermediate', category: 'Hooks' },
      { id: 27, question: 'What is the useLayoutEffect hook?', answer: 'useLayoutEffect fires synchronously after DOM mutations but before the browser paints. This prevents visual flickering when you need to read layout (element dimensions) and immediately update state. useEffect fires after paint, causing a brief flash. Use useLayoutEffect for: reading scroll position, measuring DOM elements (width/height), tooltip positioning, animations that must start before paint. In most cases, useEffect is correct. Use useLayoutEffect only when you see visual flickering from useEffect-based DOM reads.', difficulty: 'Advanced', category: 'Hooks', followUp: 'Why does useLayoutEffect block painting?' },
      { id: 28, question: 'What is code splitting in React? How do you implement it?', answer: 'Code splitting splits your bundle into smaller chunks loaded on demand. React.lazy + Suspense: const PostDetail = React.lazy(() => import("./PostDetail")); <Suspense fallback={<Spinner />}><PostDetail /></Suspense>. The PostDetail chunk loads only when rendered. Also split at route level: const Home = lazy(() => import("./pages/Home")). In Next.js, page-level splitting is automatic. Use dynamic import() for large dependencies (chart libraries, editors) that aren\'t needed immediately. Bundle analysis: webpack-bundle-analyzer to identify large chunks to split.', difficulty: 'Intermediate', category: 'Performance' },
      { id: 29, question: 'What is React\'s Suspense?', answer: 'Suspense lets components declare they\'re "waiting" for something (lazy load, data fetch) and display a fallback. <Suspense fallback={<Spinner />}><LazyComponent /></Suspense>. React 18 extends Suspense to data fetching (React Query, SWR, Relay use it). SuspenseList coordinates multiple Suspense boundaries. Suspense boundaries catch thrown Promises (libraries throw a Promise when data isn\'t ready). Nested Suspense: inner boundaries catch before outer ones. Use Suspense for: code splitting, streaming SSR (Next.js), concurrent data fetching. Not for imperative side effects (useEffect is not Suspense-aware).', difficulty: 'Advanced', category: 'Concurrent Features' },
      { id: 30, question: 'What is React Server Components (RSC)?', answer: 'RSC (React 18+, production in Next.js 13+) are components that render on the server and send HTML to the client, with zero client-side JavaScript. They can directly access databases, file systems, and server-only APIs. Differences: Server Components can\'t use state/effects/event handlers; Client Components (\'use client\') can. RSC reduces client bundle size dramatically. Data fetching in Server Components is direct (no useEffect + fetch dance). Streaming SSR: send Server Component HTML progressively. Use RSC for static/data-heavy parts; Client Components for interactivity.', difficulty: 'Advanced', category: 'Concurrent Features', followUp: 'How does data fetching work in React Server Components?' },
      { id: 31, question: 'What is React 18\'s automatic batching?', answer: 'Batching groups multiple state updates into a single re-render. Before React 18, batching only happened inside React event handlers — state updates in setTimeout, Promises, or native events triggered separate renders. React 18 automatically batches everywhere: setTimeout(() => { setA(1); setB(2); }) — only one re-render instead of two. This is a performance improvement with no code changes needed. To opt out (rare): import { flushSync } from "react-dom"; flushSync(() => setA(1)); flushSync(() => setB(2)) — two renders. Automatic batching reduces renders and improves responsiveness.', difficulty: 'Intermediate', category: 'React 18' },
      { id: 32, question: 'What is the useTransition hook?', answer: 'useTransition marks state updates as non-urgent (transitions), keeping the UI responsive. const [isPending, startTransition] = useTransition(); startTransition(() => setSearch(input)). While the transition is pending, the old UI is shown (UI doesn\'t freeze). isPending lets you show a loading indicator. Use for: filtering large lists, search results, tab switching, navigation. Without transitions, typing in a search box that filters 10,000 items makes the input lag. With startTransition, React prioritizes the input update over the filter update, keeping input responsive.', difficulty: 'Advanced', category: 'Concurrent Features' },
      { id: 33, question: 'What is Zustand? How does it compare to Redux?', answer: 'Zustand is a lightweight state management library. const useStore = create(set => ({ count: 0, increment: () => set(state => ({ count: state.count + 1 })) })). No Provider wrapping needed. Access in any component: const count = useStore(state => state.count). Zustand is simpler than Redux (no actions, reducers, middleware boilerplate). Redux is more structured, has DevTools, middleware ecosystem, and scales better for large teams. For most React apps, Zustand (or Context + useReducer) is sufficient. Redux Toolkit has reduced Redux boilerplate significantly — consider it for complex applications.', difficulty: 'Intermediate', category: 'State Management' },
      { id: 34, question: 'What is React Query (TanStack Query)? Why use it?', answer: 'React Query handles server state: caching, background refetching, pagination, mutations. const { data, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts }). Automatically caches results, refetches on focus, shows stale data while revalidating. Mutations: const mutation = useMutation({ mutationFn: createPost, onSuccess: () => queryClient.invalidateQueries(["posts"]) }). Eliminates: manual loading/error states, caching logic, refetch on focus, request deduplication. Use React Query + Zustand: React Query for server state, Zustand for UI/client state. Much simpler than Redux for data fetching patterns.', difficulty: 'Intermediate', category: 'Data Fetching' },
      { id: 35, question: 'How do you optimize React rendering performance?', answer: 'Strategies: 1) React.memo to prevent child re-renders. 2) useCallback for stable function references. 3) useMemo for expensive calculations. 4) Code splitting (React.lazy). 5) Virtualization for large lists (react-window, react-virtual). 6) Avoid anonymous functions in JSX in hot paths. 7) Use React DevTools Profiler to identify bottlenecks. 8) Lift state down — state close to where it\'s used prevents unnecessary parent re-renders. 9) Use Zustand/Jotai selectors to subscribe to only needed state. 10) Measure first — premature optimization wastes effort. React is fast by default for most UIs.', difficulty: 'Advanced', category: 'Performance' },
      { id: 36, question: 'What is React\'s error boundary?', answer: 'Error boundaries are class components that catch JavaScript errors in their child tree and render a fallback UI. class ErrorBoundary extends React.Component { state = {hasError: false}; static getDerivedStateFromError() { return {hasError: true}; } componentDidCatch(error, info) { logError(error, info); } render() { if (this.state.hasError) return <h1>Something went wrong</h1>; return this.props.children; } }. No functional component equivalent (yet). Wrap sections of UI: <ErrorBoundary><MapWidget /></ErrorBoundary>. Doesn\'t catch: event handler errors, async errors, server-side errors. Use react-error-boundary library for modern API.', difficulty: 'Intermediate', category: 'Error Handling' },
      { id: 37, question: 'How does data fetching work with async/await in React?', answer: 'Can\'t make useEffect callback async directly (it returns a Promise, not undefined). Pattern: useEffect(() => { const fetchData = async () => { try { setLoading(true); const data = await api.getPosts(); setPosts(data); } catch (err) { setError(err); } finally { setLoading(false); } }; fetchData(); }, []). Or use React Query to handle all this automatically. Handle race conditions: if the component unmounts before fetch completes, calling setState throws a warning. Fix: cleanup with AbortController: const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort().', difficulty: 'Intermediate', category: 'Data Fetching', followUp: 'How do you handle race conditions in data fetching?' },
      { id: 38, question: 'What is the Context API vs Redux? When to use each?', answer: 'Context API: built-in, simple, good for: auth user, theme, language, low-frequency updates. Caveat: any context change re-renders all consumers — bad for frequently updated state (form inputs). Redux: external library, structured, middleware, DevTools, good for: complex shared state, frequent updates, large teams requiring consistent patterns. Redux Toolkit reduces boilerplate. For most apps: use Context for global config, React Query for server state, and Zustand for complex UI state. Redux is overkill for small/medium apps but beneficial for large enterprise codebases.', difficulty: 'Intermediate', category: 'State Management' },
      { id: 39, question: 'What is TypeScript with React? How do you type props?', answer: 'TypeScript adds static types to React. Type props with interfaces: interface ButtonProps { label: string; onClick: () => void; disabled?: boolean; }. const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => <button onClick={onClick} disabled={disabled}>{label}</button>. Or use function syntax: function Button({ label }: ButtonProps) {}. Type state: const [user, setUser] = useState<User | null>(null). Type events: const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}. TypeScript catches prop type errors at compile time, eliminating an entire class of bugs.', difficulty: 'Intermediate', category: 'TypeScript' },
      { id: 40, question: 'How do you handle authentication in a React SPA?', answer: 'Common flow: login form → POST /api/auth/login → receive JWT → store in memory (preferred) or httpOnly cookie. Memory: store token in a React context/Zustand. Risk: lost on refresh — use refresh token flow. httpOnly cookie: server sets cookie, browser sends automatically — XSS safe. Redirect on 401: Axios interceptor or React Query onError callback redirects to /login. Protected routes: <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />. ProtectedRoute checks auth state; redirects to /login if not authenticated. Use react-oidc-context for OIDC/OAuth flows.', difficulty: 'Intermediate', category: 'Authentication' },
      { id: 41, question: 'What is a custom hook? Provide an example.', answer: 'Custom hooks extract reusable stateful logic. Naming convention: useXxx. Example: function useFetch(url) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { fetch(url).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false)); }, [url]); return { data, loading, error }; }. Use: const { data, loading } = useFetch("/api/posts"). Benefits: share stateful logic without HOCs/render props, testable independently, composable with other hooks.', difficulty: 'Intermediate', category: 'Hooks' },
      { id: 42, question: 'What is SWR? How does it compare to React Query?', answer: 'SWR (Stale-While-Revalidate) by Vercel is a data fetching library. const { data, error } = useSWR("/api/posts", fetcher). Returns cached data immediately (stale), then revalidates in background. React Query and SWR solve the same problem. React Query has more features: mutations with cache invalidation, offline support, query cancellation, optimistic updates, paginated/infinite queries. SWR is simpler and smaller. For Next.js apps with simple data needs, SWR integrates tightly. React Query is preferred for complex data-fetching requirements.', difficulty: 'Intermediate', category: 'Data Fetching' },
      { id: 43, question: 'Explain React\'s reconciliation with the key prop in depth.', answer: 'React uses key to determine which list items changed, were added, or removed between renders. If key stays the same, React updates the existing component (preserves state). If key changes, React unmounts old and mounts new (state resets). Trick: force remount by changing key: <ProfileForm key={userId} /> — changing userId resets the form. Pitfall: using index as key causes bugs when list reorders — React moves DOM elements but component state stays behind. Keys must be stable (from data IDs), unique among siblings, and not randomly generated (different on each render = defeats the purpose).', difficulty: 'Advanced', category: 'Internals' },
      { id: 44, question: 'What is memoization in React? When does it actually help?', answer: 'Memoization caches results to avoid recomputation. React.memo, useMemo, useCallback are memoization tools. They help when: 1) Component is expensive to render (complex charts, large lists). 2) Re-renders are frequent due to parent state changes. 3) References must be stable (passing callbacks to useEffect deps or child components). They DON\'T help when: re-renders are already fast (most UI components), props change on every render anyway, or the memoization overhead exceeds re-render cost. Profile first with React DevTools Profiler. Premature memoization adds complexity with no benefit.', difficulty: 'Advanced', category: 'Performance' },
      { id: 45, question: 'How do you test React components?', answer: 'Testing pyramid: unit tests (hooks, utility functions), component tests (user interactions), integration tests (full flows). Libraries: Jest (test runner), React Testing Library (RTL — tests components as users interact). RTL philosophy: test behavior, not implementation. render(<Button label="Submit" onClick={mockFn} />); fireEvent.click(screen.getByText("Submit")); expect(mockFn).toHaveBeenCalled(). Avoid: testing internal state, implementation details. Mock external dependencies: jest.mock("axios"). For async: await screen.findByText("Data loaded"). Use userEvent (RTL) over fireEvent for more realistic user interaction simulation.', difficulty: 'Intermediate', category: 'Testing' },
      { id: 46, question: 'What is the difference between CSR, SSR, SSG, and ISR in React?', answer: 'CSR (Client Side Rendering): browser downloads bundle, renders in browser. Slow initial load, fast navigation. SPAs. SSR (Server Side Rendering): server renders HTML per request. Fast initial load, good SEO, more server load. Next.js getServerSideProps. SSG (Static Site Generation): HTML pre-built at build time. Fastest possible, CDN cacheable. Next.js getStaticProps. ISR (Incremental Static Regeneration): SSG with background regeneration at interval. Combines SSG speed with fresh content. Next.js revalidate. Choose based on content freshness needs and server load tolerance.', difficulty: 'Advanced', category: 'Rendering' },
      { id: 47, question: 'What is the useImperativeHandle hook?', answer: 'useImperativeHandle customizes what ref value a parent sees when using forwardRef. Used when you want to expose specific methods without exposing the full DOM element. Example: const FancyInput = forwardRef((props, ref) => { const inputRef = useRef(); useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus(), clear: () => inputRef.current.value = "" })); return <input ref={inputRef} />; }). Parent: fancyRef.current.focus(). Only exposes focus and clear, not the full input DOM. Use sparingly — most cases are better served by state and props.', difficulty: 'Advanced', category: 'Hooks' },
      { id: 48, question: 'What is the React event delegation model?', answer: 'React doesn\'t attach event listeners to individual DOM elements. Instead, in React 17+, it attaches a single listener to the root container (previously document). This is event delegation. When you click a button, the event bubbles up to the root, where React determines which component handler to call. Benefits: memory efficient (one listener vs thousands), supports dynamic lists without re-attaching listeners. React\'s SyntheticEvent normalizes cross-browser event differences. After React 17, event pooling was removed — SyntheticEvents are not reused, so async access to event properties is safe.', difficulty: 'Advanced', category: 'Internals' },
      { id: 49, question: 'How does React handle lists and dynamic rendering efficiently?', answer: 'For large lists, avoid rendering all items — use virtualization. react-window (or react-virtual for hooks-based) renders only visible items: <FixedSizeList height={500} itemCount={1000} itemSize={50}>{({ index, style }) => <div style={style}>Row {index}</div>}</FixedSizeList>. Only the visible ~10 items render instead of 1000. Significant performance improvement. For infinite scroll: IntersectionObserver at list bottom triggers fetching more items. React Query\'s useInfiniteQuery handles paginated data well. Don\'t virtualize small lists (< 100 items) — overhead isn\'t worth it.', difficulty: 'Advanced', category: 'Performance' },
      { id: 50, question: 'What is the React Fiber architecture?', answer: 'React Fiber (React 16+) is a complete rewrite of React\'s core algorithm. Fiber enables: incremental rendering (break rendering into chunks, spread over multiple frames), ability to pause, abort, or reuse rendering work, assign priority to different types of updates (user input > data fetching > background work). Fiber is a data structure that represents a unit of work — a linked list of component work units. Concurrent Mode (React 18) builds on Fiber to enable features like startTransition, Suspense, and streaming SSR. Understanding Fiber helps explain why React 18\'s concurrent features improve responsiveness.', difficulty: 'Advanced', category: 'Internals' },
      { id: 51, question: 'What are portals in React?', answer: 'Portals render a component into a different DOM node outside the parent hierarchy. ReactDOM.createPortal(element, document.getElementById("modal-root")). The component renders inside #modal-root (e.g., at the bottom of body) but behaves as a child of its parent in the React tree (events bubble through React parent, not DOM parent). Used for: modals (escape overflow:hidden), tooltips, dropdowns, notifications. Z-index issues (modal behind other elements) are often solved by portaling outside the main container. React 18: createPortal now works inside Suspense boundaries.', difficulty: 'Intermediate', category: 'Advanced Patterns' },
      { id: 52, question: 'What is React\'s strict equality and how does it affect memo?', answer: 'React uses Object.is() for state comparison (similar to ===). For primitives (string, number, boolean), this works correctly. For objects and arrays, comparison is by reference — two different objects with same content are NOT equal. This is why memo fails for object props: <Comp data={{ id: 1 }} /> — data is a new object every render. Fix: memoize the object: const data = useMemo(() => ({ id: 1 }), []). Or move the object outside the component (if static). Understanding reference equality prevents subtle performance bugs when using React.memo, useCallback, or dependency arrays.', difficulty: 'Advanced', category: 'Performance' },
      { id: 53, question: 'How do you implement dark mode in React?', answer: 'Using CSS custom properties + React state: const [theme, setTheme] = useState("light"); useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]). CSS: [data-theme="dark"] { --bg: #0f0f0f; --text: #fff; }. Or use Tailwind: toggle dark class on html element. Context: ThemeContext provides {theme, toggleTheme} to all components. Persist in localStorage: useEffect(() => { localStorage.setItem("theme", theme); }, [theme]). Respect system preference: window.matchMedia("(prefers-color-scheme: dark)"). Library: next-themes handles all of this for Next.js automatically.', difficulty: 'Intermediate', category: 'UI Patterns' },
      { id: 54, question: 'What is the difference between useEffect and useLayoutEffect?', answer: 'useEffect runs after the browser has painted — doesn\'t block visual update. useLayoutEffect runs after DOM mutations but before the browser paints — can block. Rule: start with useEffect; switch to useLayoutEffect only if you see visual flickering from reading DOM layout. Example needing useLayoutEffect: measure a tooltip\'s position and reposition it before user sees it (useEffect would cause a visible flash of incorrect position). In SSR (Next.js), useLayoutEffect warns because there\'s no DOM on the server. Use useIsomorphicLayoutEffect (from react-use) that uses useLayoutEffect on client, useEffect on server.', difficulty: 'Advanced', category: 'Hooks' },
      { id: 55, question: 'How do you implement infinite scroll in React?', answer: 'Use IntersectionObserver to detect when a sentinel element (at list bottom) enters the viewport: const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) fetchNextPage(); }, { threshold: 0.1 }); observer.observe(sentinelRef.current); return () => observer.disconnect(). With React Query: const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({ queryKey: ["posts"], queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam), getNextPageParam: (lastPage) => lastPage.nextCursor }). Combine with react-virtual for large lists. Handle loading state and error retry.', difficulty: 'Advanced', category: 'Patterns' },

      // ── ADVANCED (25) ─────────────────────────────────────────
      { id: 56, question: 'How does React\'s concurrent rendering work?', answer: 'Concurrent React (React 18) can pause, interrupt, and resume rendering. Instead of blocking the main thread for an entire render, React can yield to the browser for higher-priority work (user input). Urgent updates (typing, clicking) are never interrupted. Non-urgent updates (data rendering, animations) can be interrupted. startTransition marks non-urgent updates. The reconciler can abandon renders if the state they were based on is already stale. This enables the UI to stay responsive during heavy computations. Concurrent features are opt-in; legacy rendering mode still works.', difficulty: 'Advanced', category: 'Concurrent Features' },
      { id: 57, question: 'What is the useDeferredValue hook?', answer: 'useDeferredValue defers re-rendering of a value until the browser has time. Similar to useTransition but for received values (not your own state). const deferredQuery = useDeferredValue(query). Use to delay expensive renders: <FilteredList query={deferredQuery} /> renders with the deferred value while the user types, keeping the input responsive. The deferred value "lags behind" the current value. While deferred, React renders the old content in the background. Compare: useTransition controls when to update state; useDeferredValue defers processing of a value you receive from a prop or context.', difficulty: 'Advanced', category: 'Concurrent Features' },
      { id: 58, question: 'What are the best practices for managing forms at scale in React?', answer: 'For complex forms: use React Hook Form with Zod validation. RHF uses uncontrolled inputs (no re-render per keystroke). Zod: const schema = z.object({ email: z.string().email(), age: z.number().min(18) }). Integration: const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) }). For wizard forms (multi-step): maintain form state at the wizard level; each step validates its section. Dynamic fields: useFieldArray. File uploads: RHF handles FileList. Testing: mock form submission with userEvent.type + userEvent.click. Don\'t re-invent form state management for anything non-trivial.', difficulty: 'Advanced', category: 'Forms' },
      { id: 59, question: 'How do you implement an accessible modal in React?', answer: 'Accessibility requirements: focus trap (Tab cycles through modal elements only), aria-modal="true", aria-labelledby pointing to title, close on Escape, return focus to trigger on close. Implementation: useEffect sets up focus trap and Esc listener on open; cleanup on close. Portal renders outside main DOM to avoid z-index issues. Libraries: @radix-ui/react-dialog, @headlessui/react handle all accessibility out of the box. Check with: screen reader (NVDA/VoiceOver), keyboard navigation, WCAG 2.1 AA compliance. Role="dialog" with aria-modal on the modal container. Overlay closes on click (optional but expected).', difficulty: 'Advanced', category: 'Accessibility' },
      { id: 60, question: 'Explain the concept of lifting state up with a real example.', answer: 'When two sibling components need shared state, lift it to their common parent. Example: TempInput (Celsius) and TempDisplay (Fahrenheit) both need the temperature value. Lift state to parent: function Calculator() { const [celsius, setCelsius] = useState(0); return (<><TempInput value={celsius} onChange={setCelsius} /><TempDisplay celsius={celsius} /></>); }. Rule: find the closest common ancestor of components needing the same state and put state there. If lifting causes excessive prop drilling, introduce Context. Lifting state is a fundamental React pattern for data synchronization.', difficulty: 'Intermediate', category: 'Patterns' },
      { id: 61, question: 'How does Next.js App Router differ from Pages Router?', answer: 'App Router (Next.js 13+): uses the /app directory, supports React Server Components by default, nested layouts via layout.tsx files, server-side data fetching directly in components (no getServerSideProps), loading.tsx and error.tsx for states, parallel routes and intercepting routes. Pages Router: uses /pages directory, Client Components by default, getServerSideProps/getStaticProps for data fetching, _app.tsx and _document.tsx for customization. App Router is the future (more powerful), Pages Router still supported. Migrating: move pages gradually; both can coexist.', difficulty: 'Advanced', category: 'Next.js' },
      { id: 62, question: 'What is the difference between CSR hydration and RSC?', answer: 'Traditional SSR: server renders full HTML, client downloads JS bundle, React hydrates by attaching event listeners to existing HTML (client re-creates React tree). Hydration mismatch causes errors if server HTML doesn\'t match client render. RSC: server sends a special React protocol (not HTML) that describes the component tree. Client merges with Client Components. No hydration needed for Server Components (no client JS at all). RSC reduces bundle size since server-only code is never sent to the client. Selective hydration (Suspense): hydrate only interactive parts, prioritizing user interactions.', difficulty: 'Advanced', category: 'Server Rendering' },
      { id: 63, question: 'How do you implement global error handling in a React app?', answer: 'Multiple layers: 1) Error Boundaries: catch render errors, show fallback UI. 2) React Query onError callback for data fetching errors. 3) Axios interceptors for HTTP errors (401 → redirect, 500 → show toast). 4) window.onerror and window.onunhandledrejection for uncaught errors → log to Sentry. 5) Custom ErrorBoundary with Sentry.captureException in componentDidCatch. react-error-boundary provides <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>. Toast notifications for non-fatal errors. Navigate to /error page for fatal errors. Always log errors with context (user ID, request ID, stack trace).', difficulty: 'Advanced', category: 'Error Handling' },
      { id: 64, question: 'What are micro-frontends? How do React apps participate?', answer: 'Micro-frontends split a large frontend into independently deployable pieces. Each team owns their slice. Approaches: 1) Module Federation (Webpack 5): each app exposes components that others import at runtime — no redeployment needed. 2) iframes: strong isolation but terrible UX. 3) Web Components: framework-agnostic but limited React integration. 4) Route-based: different routes served by different deployments (reverse proxy routing). React apps use Module Federation most commonly. Challenges: shared dependencies (React version conflicts), shared auth, CSS isolation (CSS Modules or Shadow DOM), cross-app state sharing. Not recommended for small teams — monorepo with code sharing is simpler.', difficulty: 'Advanced', category: 'Architecture' },
      { id: 65, question: 'Explain how to build a design system in React.', answer: 'A design system is a set of reusable components with documented design tokens. Structure: packages/design-system with Button, Input, Modal, Table components. Tokens: colors, spacing, typography as CSS variables or JS constants. Storybook: document each component with stories and props table. Versioning: semantic versioning, publish to npm or private registry. Testing: visual regression with Chromatic + Storybook. Theming: CSS custom properties overridden per-tenant. TypeScript: strictly type all props. Accessibility: test all components with keyboard + screen reader. CI: build Storybook, run visual diffs on PR. Never build one-off components outside the design system.', difficulty: 'Advanced', category: 'Architecture' },
      { id: 66, question: 'What is the difference between mount and render in React testing?', answer: 'In React Testing Library: render() renders the component into a container attached to document.body, running all hooks, effects, and lifecycle. You get query utilities to find elements. Unlike enzyme\'s mount/shallow, RTL doesn\'t expose component internals — it tests the rendered output as a user would see it. Cleanup: RTL automatically unmounts components after each test (if using Jest). For isolated hook testing: use renderHook(). Avoid: testing implementation details (state values, method calls). Test: user interactions and rendered output. screen.getByRole is preferred (matches accessibility tree).', difficulty: 'Advanced', category: 'Testing' },
      { id: 67, question: 'What are React\'s render phases?', answer: 'React has two phases: Render phase and Commit phase. Render phase: React calls render/function to compute what UI should look like. This is pure — no side effects. React may pause, abort, or restart this phase (concurrent mode). Functions may be called multiple times. Commit phase: React applies changes to the DOM. Synchronous, no interruption. React calls useLayoutEffect synchronously. Then browser paints. Then useEffect runs. In StrictMode (development), React intentionally double-invokes the render phase to detect impure renders. This explains StrictMode\'s double-effect behavior.', difficulty: 'Advanced', category: 'Internals' },
      { id: 68, question: 'How do you handle WebSockets in React?', answer: 'Create a custom hook: function useWebSocket(url) { const [messages, setMessages] = useState([]); const ws = useRef(null); useEffect(() => { ws.current = new WebSocket(url); ws.current.onmessage = e => setMessages(prev => [...prev, JSON.parse(e.data)]); ws.current.onerror = handleError; return () => ws.current?.close(); }, [url]); const send = useCallback(msg => ws.current?.send(JSON.stringify(msg)), []); return { messages, send }; }. Libraries: socket.io-client, @microsoft/signalr, or plain WebSocket. Reconnection: use exponential backoff on close. In React 18 StrictMode, useEffect runs twice — WebSocket opens twice in dev. Handle cleanup properly.', difficulty: 'Advanced', category: 'Real-Time' },
      { id: 69, question: 'How do you measure and improve React Core Web Vitals?', answer: 'Core Web Vitals: LCP (Largest Contentful Paint < 2.5s), FID/INP (Interaction to Next Paint < 200ms), CLS (Cumulative Layout Shift < 0.1). Tools: Lighthouse, Chrome DevTools, web-vitals library. LCP improvements: preload hero images, use Next.js Image (lazy loading, WebP, AVIF), server-side render above-the-fold content. INP improvements: reduce JS bundle (code splitting), use React Transitions for non-urgent updates, avoid long tasks. CLS improvements: set explicit width/height on images/videos, avoid inserting content above existing. Measure real users: Google Search Console, Sentry Performance.', difficulty: 'Advanced', category: 'Performance' },
      { id: 70, question: 'What is Jotai or Recoil? How do they differ from Context?', answer: 'Jotai and Recoil are atomic state management libraries. Atom: const countAtom = atom(0). Read: const [count, setCount] = useAtom(countAtom). Atoms are tiny units of state — only components subscribed to the atom re-render. Unlike Context (all consumers re-render on any change), atoms enable surgical re-renders. Derived state: const doubleAtom = atom(get => get(countAtom) * 2). Jotai is simpler (no Provider needed for most uses). Recoil is from Meta, has more features (selectors, async atoms). For fine-grained reactivity (large lists, forms), atoms outperform Context significantly.', difficulty: 'Advanced', category: 'State Management' },
      { id: 71, question: 'What is the React use() hook (React 19)?', answer: 'React 19 introduces use() — a hook that can be called inside render (unlike other hooks, it can be called conditionally). Use it to unwrap Promises and Context. use(promise) suspends the component until the Promise resolves (integrates with Suspense). use(Context) reads context value. Example: const data = use(fetchData()); where fetchData returns a Promise. This enables simpler async components without useEffect/useState boilerplate. Combined with server components, it enables seamless server-client data flow. The use() hook is the foundation for React\'s future async patterns.', difficulty: 'Advanced', category: 'React 19' },
      { id: 72, question: 'How do you implement drag-and-drop in React?', answer: 'Options: 1) HTML5 Drag and Drop API: onDragStart, onDragOver, onDrop events on elements. Limited (no touch support, poor mobile). 2) dnd-kit: accessible, touch-first, TypeScript. const {setNodeRef, transform} = useDraggable({id}). Modifiers, collision detection. 3) react-beautiful-dnd: Atlassian, great UX, but unmaintained. 4) react-dnd: flexible, good for complex cases (chess board, file trees). For kanban boards, sortable lists: dnd-kit is the current recommendation. Always handle keyboard accessibility (arrow keys to reorder, Enter to confirm). Store order in state as an array of IDs.', difficulty: 'Advanced', category: 'UI Patterns' },
      { id: 73, question: 'What is streaming SSR in React 18?', answer: 'Streaming SSR sends HTML progressively to the browser as React renders. Instead of waiting for the entire page to render server-side, the server streams initial HTML (shell) immediately, then streams Suspense boundary content as it resolves. Client starts hydrating received HTML immediately — faster Time to First Byte (TTFB) and First Contentful Paint (FCP). In Next.js: loading.tsx inside Suspense boundaries enables streaming. Benefit: slow data fetches don\'t block the entire page render. The shell (nav, layout) appears instantly; content streams in. React\'s renderToPipeableStream enables server-side streaming.', difficulty: 'Advanced', category: 'Server Rendering' },
      { id: 74, question: 'How do you implement accessibility (a11y) in React?', answer: 'Core practices: 1) Semantic HTML (button not div for clicks, nav, main, header). 2) aria-* attributes for custom components (aria-label, aria-expanded, aria-live). 3) Keyboard navigation (tabIndex, onKeyDown handlers). 4) Focus management (useRef.focus() after modal opens). 5) Color contrast (WCAG AA: 4.5:1 ratio). 6) Alt text for images. 7) Form labels (htmlFor linking to input id). 8) Error messages linked to inputs (aria-describedby). Tools: eslint-plugin-jsx-a11y catches common issues at lint time. Test with: screen reader (NVDA, VoiceOver), axe DevTools browser extension, keyboard-only navigation.', difficulty: 'Advanced', category: 'Accessibility' },
      { id: 75, question: 'What is React\'s experimental use client and use server directives?', answer: '"use client" marks a boundary below which all modules are Client Components (hydrated on client). "use server" marks functions as Server Actions — async functions that run on the server and can be called from Client Components (Next.js 14+). Example: async function createPost(formData) { "use server"; await db.posts.create({...}); revalidatePath("/posts"); }. Server Actions simplify form handling (no API route needed). They\'re called from <form action={createPost}> or directly. Data flows: Server Component → Client Component (props), Client Component → Server (Server Actions). These directives define the server/client boundary in RSC architecture.', difficulty: 'Advanced', category: 'React 19' },
      { id: 76, question: 'How do you detect memory leaks in React?', answer: 'Common causes: uncleared timers (setInterval), WebSocket not closed, event listeners not removed, stale closures preventing GC. Detection: Chrome DevTools Memory tab — take heap snapshots before and after navigation; look for retained objects. React DevTools Profiler shows render count. Signs: browser memory usage grows over time, page becomes sluggish after extended use. Fix: return cleanup functions from useEffect (clear intervals, close WebSockets, remove listeners). abort controller for fetch. Use weak references for caches. React 18 StrictMode double-invokes effects to expose cleanup bugs.', difficulty: 'Advanced', category: 'Performance' },
      { id: 77, question: 'What is compound components pattern?', answer: 'Compound components share state implicitly through Context, giving consumers flexibility in composition. Example: <Select> <Select.Trigger>Choose...</Select.Trigger> <Select.Options> <Select.Option value="1">One</Select.Option> </Select.Options> </Select>. Select manages open/close state via Context; Trigger and Options consume it. Consumer controls the layout. vs. a single <Select options={[...]} /> prop — the compound pattern is more composable. Found in: Radix UI, Headless UI. Good for: dropdowns, tabs, accordions, modals. Implement with createContext + Context.Provider in parent.', difficulty: 'Advanced', category: 'Patterns' },
      { id: 78, question: 'How does React handle hydration errors?', answer: 'Hydration errors occur when server-rendered HTML doesn\'t match what React expects to render on the client. Causes: browser-specific code in render (window check), different locale formatting, dynamic content (dates, random IDs), browser extensions modifying DOM. Symptoms: React throws "Hydration failed" warning, UI may flicker. Fixes: use suppressHydrationWarning on elements that intentionally differ (timestamps). Move client-only code inside useEffect (doesn\'t run on server). For dynamic content, delay rendering until after hydration. Next.js: use dynamic(() => import(...), { ssr: false }) for client-only components.', difficulty: 'Advanced', category: 'Server Rendering' },
      { id: 79, question: 'How do you build a performant data table in React?', answer: 'For large datasets: virtualization with TanStack Virtual or react-window. Only visible rows render. TanStack Table handles sorting, filtering, pagination, row selection, column pinning. Pattern: useReactTable({ data, columns, getCoreRowModel }) → map over table.getRowModel().rows to render. Virtual scroll: rowVirtualizer from useVirtualizer. Column virtualization for many columns. Pagination reduces DOM for non-virtual tables. Avoid: rendering 1000+ rows without virtualization (40+ columns × 1000 rows = 40,000 cells in DOM). Fixed column widths improve scroll performance. Memoize column definitions (avoid new array on each render).', difficulty: 'Advanced', category: 'Performance' },
      { id: 80, question: 'What is module federation in React micro-frontends?', answer: 'Module Federation (Webpack 5) lets one app dynamically load components from another at runtime without deploying together. App A exposes: exposes: { "./Button": "./src/Button.tsx" }. App B consumes: remotes: { appA: "appA@http://localhost:3001/remoteEntry.js" }; const Button = React.lazy(() => import("appA/Button")). Each app deploys independently. Benefits: independent deployments, team autonomy. Challenges: shared dependency versions (React must be singletons: shared: { react: { singleton: true } }), routing between apps, shared auth. Next.js module federation: use @module-federation/nextjs-mf. Best for: large organizations with many frontend teams.', difficulty: 'Advanced', category: 'Architecture' },

      // ── SCENARIO (10) ─────────────────────────────────────────
      { id: 81, question: 'Scenario: A React app re-renders every component on every state update. How do you fix it?', answer: 'Step 1: Profile with React DevTools Profiler — identify which components render unnecessarily. Step 2: Wrap expensive children with React.memo. Step 3: Memoize callbacks with useCallback (passed as props to memo components). Step 4: Memoize objects with useMemo. Step 5: Check Context — any context change re-renders all consumers. Split contexts by update frequency. Step 6: Lift state down — move state closer to where it\'s used, not in a parent that renders expensive siblings. Step 7: Use Zustand/Jotai selectors: const count = useStore(s => s.count) — only re-renders when count changes, not any store change. Step 8: Re-verify after changes — measure, don\'t guess.', difficulty: 'Scenario', category: 'Performance' },
      { id: 82, question: 'Scenario: Design a real-time collaborative note editor in React.', answer: 'Architecture: Next.js frontend + WebSocket server. Components: NoteEditor (rich text — Tiptap or ProseMirror), UserPresence (show collaborators), SyncStatus. Real-time: useWebSocket custom hook connects to WS server. CRDT (Yjs + y-websocket): handles conflict-free merging of concurrent edits. Yjs sends update operations (not full content) over WebSocket. Presence: broadcast cursor position/name on mousemove (throttled). Persistence: debounce saves to API every 2s of inactivity. Offline: Yjs queue updates and sync on reconnect. Auth: JWT in WS URL. Optimistic UI: apply local change immediately, sync in background. Undo/redo: Yjs built-in history.', difficulty: 'Scenario', category: 'Architecture' },
      { id: 83, question: 'Scenario: How would you implement a high-performance search input in React?', answer: 'Naive implementation causes lag: each keystroke triggers API call and list re-render. Solutions: 1) Debounce API calls: const debouncedSearch = useMemo(() => debounce(search, 300), []). 2) Use useTransition: startTransition(() => setQuery(input)) marks list update as non-urgent, keeps input responsive. 3) React Query: deduplicates in-flight requests, caches results — typing same query returns cached result instantly. 4) Abort previous requests: useEffect cleanup with AbortController. 5) Virtualize results if list is long. 6) useDeferredValue: defer rendering the filtered list while keeping input fast. 7) Input: use uncontrolled with ref + debounce (React Hook Form pattern).', difficulty: 'Scenario', category: 'Performance' },
      { id: 84, question: 'Scenario: How do you handle a complex multi-step form wizard in React?', answer: 'State management: wizard state lives at the top level (context or Zustand). Each step validates and updates shared state. Navigation: step index in state; buttons update index. Components: WizardProvider (context), Step1, Step2, Step3, StepNavigator. Validation per step: React Hook Form with Zod schemas per step. On step advance: trigger validation for current step fields only. Progress bar: derived from currentStep / totalSteps. Save progress: localStorage or API on each step completion (allow resume). URL: sync step to URL (?step=2) for shareable/refreshable state. Submit: only on final step — show review summary before confirm.', difficulty: 'Scenario', category: 'Forms' },
      { id: 85, question: 'Scenario: How would you add end-to-end (E2E) testing to a React application?', answer: 'Tools: Playwright (recommended, fast, reliable) or Cypress. Setup: npx playwright install. Write tests: test("user can log in", async ({ page }) => { await page.goto("/login"); await page.fill("[name=email]", "test@example.com"); await page.fill("[name=password]", "password"); await page.click("[type=submit]"); await expect(page).toHaveURL("/dashboard"); }). Run in CI (GitHub Actions): headless Chrome. Test coverage: critical user flows (login, checkout, signup) not every UI interaction. Fixtures: seed test data via API before each test, cleanup after. Visual testing: Playwright screenshots + Percy for visual regression.', difficulty: 'Scenario', category: 'Testing' },
      { id: 86, question: 'Scenario: A React SPA has slow initial load. How do you optimize it?', answer: 'Diagnose: Lighthouse audit, webpack-bundle-analyzer. Strategies: 1) Code splitting: lazy load routes and heavy libraries. 2) Tree shaking: ensure imports are named (import { debounce } from "lodash" not import _ from "lodash"). 3) Move to Next.js SSR/SSG for faster FCP. 4) Preload critical resources: <link rel="preload">. 5) Remove unused dependencies: check bundle with bundlephobia. 6) Optimize images: Next.js Image, WebP, lazy loading. 7) Eliminate render-blocking CSS/JS. 8) HTTP/2 for parallel resource loading. 9) CDN for static assets. 10) Service Worker for caching on repeat visits. Target < 100KB initial JS for critical path.', difficulty: 'Scenario', category: 'Performance' },
      { id: 87, question: 'Scenario: How would you migrate a class component codebase to functional components?', answer: 'Strategy: incremental migration — never rewrite everything at once. Priority order: start with leaf components (no children), then move up. Convert pattern: constructor state → useState. componentDidMount → useEffect(fn, []). componentDidUpdate with prevProps → useEffect(fn, [dep]). componentWillUnmount → useEffect cleanup return. this.setState → useState setter. this.props → destructured props. Render → function return. Refs: createRef → useRef. Context.Consumer → useContext. Error boundaries cannot be converted (still need class). Test: run test suite after each component migration. codemods: react-codemod automates some transformations.', difficulty: 'Scenario', category: 'Refactoring' },
      { id: 88, question: 'Scenario: How would you implement role-based access control (RBAC) in a React app?', answer: 'Auth: JWT contains user roles [admin, editor, viewer]. Context: AuthContext stores decoded token (user + roles). Hook: usePermission: function usePermission(required) { const { roles } = useAuth(); return roles.includes(required); }. Component: function ProtectedComponent({ required, children }) { const canAccess = usePermission(required); return canAccess ? children : <Forbidden />; }. Route protection: <Route element={<RequireRole role="admin"><AdminPage /></RequireRole>} />. UI: conditionally render buttons based on permission (don\'t just hide — don\'t render at all). Backend: ALWAYS enforce permissions server-side — client RBAC is UX only, not security.', difficulty: 'Scenario', category: 'Authentication' },
      { id: 89, question: 'Scenario: How would you build a reusable, accessible dropdown component in React?', answer: 'Requirements: keyboard nav (Arrow Up/Down to navigate, Enter to select, Escape to close), screen reader support (role="listbox", role="option", aria-selected, aria-expanded), click outside to close. Implementation: state {isOpen, activeIndex}. onKeyDown: ArrowDown increments activeIndex, ArrowUp decrements, Enter selects, Escape closes. useRef on container for click-outside detection (useEffect with document.addEventListener). aria-activedescendant on trigger points to active option ID. aria-expanded on trigger. Render options with tabIndex={-1} (programmatic focus only). Or: use @radix-ui/react-select — battle-tested, fully accessible, zero styling assumptions.', difficulty: 'Scenario', category: 'UI Patterns' },
      { id: 90, question: 'Scenario: How do you debug a complex state management issue in React?', answer: 'Approach: 1) React DevTools: inspect component state and props at each render. 2) Redux DevTools (if using Redux): time-travel through state changes. 3) Add console.log temporarily — log state before and after mutations to trace the issue. 4) React DevTools Profiler: see what triggered a re-render ("why did this render?"). 5) Zustand DevTools: zustand/middleware devtools. 6) Simplify: reproduce the issue in a minimal component (remove irrelevant code). 7) Check async timing: is state read before it\'s set? (stale closure). 8) useEffect dependencies: missing deps cause stale values. 9) Check mutation: are you mutating state directly? Always use setter functions.', difficulty: 'Scenario', category: 'Debugging' },

      // ── SYSTEM DESIGN (10) ────────────────────────────────────
      { id: 91, question: 'System Design: Design a React-based social media feed.', answer: 'Architecture: Next.js App Router. Feed: TanStack Query useInfiniteQuery for paginated posts (cursor-based). Virtualized list with TanStack Virtual — only render visible posts. Post card components: React.memo to prevent unnecessary re-renders. Real-time: WebSocket for new post notifications (counter badge). Likes/comments: optimistic updates via React Query mutations. Images: Next.js Image with lazy loading, blurhash placeholders. Stories: separate horizontal scroll component, auto-advance with useInterval. State: React Query for server state, Zustand for UI state (sidebar open, active tab). Offline: Service Worker + React Query persistQueryClient for cached data. Performance: Core Web Vitals target (LCP <2.5s, CLS 0).', difficulty: 'System Design', category: 'System Design' },
      { id: 92, question: 'System Design: Design a React dashboard with real-time analytics.', answer: 'Components: SideNav, MetricCard, TimeSeriesChart (Recharts/Victory), DataTable, DateRangePicker, FilterPanel. Data: React Query for historical data, WebSocket for live metrics. Chart: subscribe to WebSocket stream, append data to local state, cap at N points. Polling fallback: if WS unavailable, refetchInterval: 5000 in React Query. Multi-tab: BroadcastChannel to sync filter state across tabs. Date range: react-datepicker or date-fns. Export: generate CSV client-side with Papa.parse or trigger server-side export job. Permissions: show/hide metric cards based on user role. Theming: dark mode. Performance: useDeferredValue for heavy filter operations, memoize chart data transformations.', difficulty: 'System Design', category: 'System Design' },
      { id: 93, question: 'System Design: Design a React-based e-commerce product catalog.', answer: 'Pages: /products (list), /products/[slug] (detail). List: TanStack Query for paginated products, URL-synced filters (next/navigation useSearchParams). Filters: price range (RangeSlider), categories (multi-select), ratings (star filter). Applied to URL: /products?category=electronics&price_max=5000. Sort: dropdown (price, rating, newest). Search: Algolia (react-instantsearch) for instant search with typo tolerance. Product card: Next.js Image, skeleton loading. Detail page: SSG for SEO (revalidate every 60s for price updates). Add to cart: Zustand cart store, persist to localStorage. Related products: on-demand fetch after detail loads. Breadcrumbs for navigation.', difficulty: 'System Design', category: 'System Design' },
      { id: 94, question: 'System Design: Design a React component library for a SaaS product.', answer: 'Structure: Turborepo monorepo. packages/ui: components, packages/tokens: design tokens, packages/icons: SVG sprites. Build: tsup (ESM + CJS bundles). Storybook: component documentation, visual testing. Tokens: CSS custom properties + JS export (for React Native parity). Components: unstyled base (Radix UI) + styled layer. Theme: ThemeProvider with CSS var overrides. Versioning: changesets for automated semver + changelogs. CI: automated visual regression (Chromatic). TypeScript: strict mode, all props typed. Accessibility: all components keyboard-accessible, WCAG AA. Testing: RTL unit tests + Playwright visual tests. Publish: private npm registry or GitHub Packages.', difficulty: 'System Design', category: 'System Design' },
      { id: 95, question: 'System Design: Design a React-based admin panel for an HRMS.', answer: 'Features: employee list/detail, attendance tracking, leave management, payroll reports. Architecture: Next.js App Router, role-based routes (HR Admin, Manager, Employee). Data: React Query for all server state. Tables: TanStack Table with sorting, filtering, pagination, column visibility. Forms: React Hook Form + Zod. Charts: Recharts for attendance trends, payroll breakdowns. Permissions: usePermission hook wraps all actions. Notifications: toast for action feedback, WebSocket for approval notifications. Export: CSV download for reports, PDF for payslips (server-generated). Layout: responsive sidebar nav, breadcrumbs, sticky table headers. State: URL-persisted filters, React Query cache.', difficulty: 'System Design', category: 'System Design' },
      { id: 96, question: 'System Design: Design a React-based learning management system.', answer: 'Pages: course catalog, course detail, lesson player, quiz, progress dashboard. Video player: custom controls (React + Video.js), chapter markers, playback speed, quality selection, resume position. Content: MDX for lesson text (code highlighting), React for interactive exercises. Progress: track completion per lesson in React Query + backend. Quizzes: form with radio/checkbox, submit scores, show explanations. Certificates: generate PDF after course completion. Auth: protected routes, enrolled check. Offline: Service Worker caches course content. Search: Algolia for course discovery. Community: Disqus or custom comment section per lesson. Mobile: responsive video player, swipe navigation.', difficulty: 'System Design', category: 'System Design' },
      { id: 97, question: 'System Design: Design a real-time chat application in React.', answer: 'Components: ConversationList, MessageThread, MessageInput, UserPresence, TypingIndicator. WebSocket: custom useWebSocket hook, reconnect with exponential backoff. Messages: React Query for history, WebSocket appends new messages to cache. Optimistic sends: add message to local state immediately, confirm/rollback on server response. Typing: debounced broadcast on input change. Read receipts: intersection observer on last message → mark as read. Media: image preview in chat, S3 presigned URL for upload. Notifications: Web Push API for background notifications. Emoji reactions: click emoji picker, update message in place. Search: full-text search in conversation history via API.', difficulty: 'System Design', category: 'System Design' },
      { id: 98, question: 'System Design: Design a React-based kanban board (Trello-like).', answer: 'State: boards → lists → cards hierarchy in Zustand. Drag-and-drop: dnd-kit with sortable preset. Drag cards between lists, reorder lists. Persistence: optimistic update locally, PATCH to API on drop. Real-time: WebSocket broadcasts board changes to all viewers. Cards: title, description (markdown), labels, due date, assignees, attachments. Modal: card detail opens as overlay with URL (/boards/1/cards/42). Filters: by label, assignee, due date — filter function on rendered cards. Archive: soft-delete lists/cards. Activity log: append-only log of changes. Keyboard shortcuts: N for new card, E to edit. Offline: queue changes in localStorage, sync on reconnect.', difficulty: 'System Design', category: 'System Design' },
      { id: 99, question: 'System Design: Design a file upload and management UI in React.', answer: 'Upload: drag-and-drop (react-dropzone), progress bar per file, concurrent uploads (Promise.all with concurrency limit). Validation: type, size, virus scan (server-side). Storage: presigned S3 URL — upload directly from browser to S3 (bypass server). Large files: multipart upload (S3 SDK), chunked upload with resume capability. File browser: grid/list view toggle, breadcrumb path, sort (name, date, size). Preview: image thumbnail, PDF viewer (react-pdf), video player, audio player. Operations: rename, delete, move, copy, download, share (presigned URL). Search: filter by name, type, date. Permissions: view/edit/delete per file or folder. Mobile: responsive drag-and-drop with touch.', difficulty: 'System Design', category: 'System Design' },
      { id: 100, question: 'System Design: Design a React Progressive Web App (PWA).', answer: 'PWA requirements: HTTPS, Service Worker, Web App Manifest. Service Worker: cache-first for static assets, network-first for API calls, offline fallback page. Manifest: app name, icons (192px, 512px), theme color, display: standalone. Install prompt: capture beforeinstallprompt event, show custom UI. Push notifications: FCM + Web Push API, service worker receives push, shows notification. Background sync: queue failed API calls, retry when online (Background Sync API). Offline mode: show cached data with "offline" indicator, queue mutations. Add to Home Screen: show tutorial for iOS (manual share → Add to Home Screen). React + Vite: vite-plugin-pwa auto-generates Service Worker + manifest.', difficulty: 'System Design', category: 'System Design' },

      { id: 101, question: 'What is the difference between React.cloneElement and React.Children?', answer: 'React.cloneElement(element, extraProps, ...children) creates a copy of an element with merged props. Used in HOC patterns or compound components to inject props into children. React.Children utilities iterate or transform children: React.Children.map, .forEach, .count, .toArray. Example: React.Children.map(children, child => React.cloneElement(child, { active: isActive })). Don\'t use index directly (children may be arrays or fragments). Children.toArray() normalizes children to a flat array with stable keys. These are low-level APIs — hooks and composition usually achieve the same result more cleanly.', difficulty: 'Advanced', category: 'Advanced Patterns' },
      { id: 102, question: 'What is CSS-in-JS? What are its trade-offs?', answer: 'CSS-in-JS libraries (styled-components, Emotion) write CSS inside JavaScript files. Benefits: scoped styles by default (no class name collisions), dynamic styles based on props, co-location with component. Drawbacks: runtime overhead (generates CSS on each render in client-side mode), larger JS bundle, SSR complexity. Alternatives: CSS Modules (scoped, zero-runtime, static), Tailwind CSS (utility classes, no runtime). Trend: moving away from runtime CSS-in-JS (Emotion, styled-components) toward zero-runtime options (vanilla-extract, Linaria, Tailwind) for better performance. For Next.js, CSS Modules or Tailwind are strongly recommended over runtime CSS-in-JS.', difficulty: 'Intermediate', category: 'Styling' },
      { id: 103, question: 'How do you implement optimistic updates in React?', answer: 'Optimistic updates apply changes locally before server confirmation, making UI feel instant. React Query: const mutation = useMutation({ mutationFn: toggleLike, onMutate: async (postId) => { await queryClient.cancelQueries(["posts"]); const prev = queryClient.getQueryData(["posts"]); queryClient.setQueryData(["posts"], old => old.map(p => p.id === postId ? {...p, liked: !p.liked} : p)); return { prev }; }, onError: (err, id, ctx) => { queryClient.setQueryData(["posts"], ctx.prev); }, onSettled: () => queryClient.invalidateQueries(["posts"]) }). If server fails, revert to previous state. Show loading/error state for user feedback.', difficulty: 'Advanced', category: 'Data Fetching' },
      { id: 104, question: 'What is React\'s new Actions API (React 19)?', answer: 'React 19 introduces Actions — async functions used as form action handlers. function SignupForm() { async function handleSignup(formData) { "use server"; await createUser(formData); redirect("/welcome"); } return <form action={handleSignup}><input name="email" /><button>Submit</button></form>; }. React manages pending state automatically. useFormStatus() hook: const { pending } = useFormStatus() — shows loading state during action. useActionState() handles action state and errors. This pattern eliminates manual form state management for common forms. Progressive enhancement: forms work without JS (server action executes natively). Replaces the pattern of manually handling form submit events + API calls.', difficulty: 'Advanced', category: 'React 19' },
      { id: 105, question: 'System Design: Design a Next.js-based SaaS application architecture.', answer: 'Structure: Next.js App Router. Authentication: NextAuth.js or Clerk (managed auth). Routing: /app/(auth)/{login,signup}, /app/(dashboard)/{...routes}, /app/(marketing)/{home,pricing}. Data: server components fetch directly from DB (Prisma + PostgreSQL) or API. Client components use React Query. Multi-tenancy: subdomain per tenant (middleware extracts tenant from host header). Payments: Stripe + webhook (Next.js route handler). Email: Resend or SendGrid via server action. File storage: S3 via presigned URLs. Caching: Next.js fetch cache, React Query on client. Deployment: Vercel (server) or Docker + Fly.io. CI/CD: GitHub Actions → Vercel deploy preview. Monitoring: Sentry for errors, Vercel Analytics for performance.', difficulty: 'System Design', category: 'System Design' },
    ],
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
    questions: [
  // ── BEGINNER (25) ─────────────────────────────────────────
  { id: 1, question: 'What does a full-stack developer do?', answer: 'A full-stack developer works on both the client-facing frontend (what users see and interact with) and the server-side backend (APIs, databases, business logic). They design database schemas, build REST or GraphQL APIs, implement frontend UIs, deploy applications, and handle DevOps basics. Full-stack developers bridge the gap between product design and infrastructure — they can ship a complete feature independently. Key skills: one backend language (Python, Node.js, Go), one frontend framework (React, Vue), SQL and NoSQL databases, basic cloud deployment.', difficulty: 'Beginner', category: 'Full-Stack Fundamentals' },
  { id: 2, question: 'What is the difference between frontend and backend development?', answer: 'Frontend development concerns everything users interact with: HTML, CSS, JavaScript, React/Vue/Angular. It runs in the browser. Backend development handles server-side logic: APIs, databases, business rules, authentication. It runs on servers. The frontend sends HTTP requests to the backend, which responds with data (JSON). Backends handle: database queries, third-party integrations, security validation, and complex business logic. A full-stack developer does both. The communication boundary is the API (REST or GraphQL).', difficulty: 'Beginner', category: 'Full-Stack Fundamentals' },
  { id: 3, question: 'What is REST? How does it differ from GraphQL?', answer: 'REST (Representational State Transfer) is an API design style using HTTP methods (GET, POST, PUT, DELETE) and resource-based URLs (/api/posts/1). Each endpoint returns a fixed data structure. GraphQL is a query language where clients specify exactly what data they need in a single query — no over-fetching or under-fetching. REST: simple, cacheable, widely understood. GraphQL: flexible, excellent for complex data needs, steeper learning curve. REST is appropriate for most APIs. GraphQL shines for: mobile apps (reduce payload), dashboards with complex data requirements, or public developer APIs.', difficulty: 'Beginner', category: 'APIs' },
  { id: 4, question: 'What is HTTP? What are common status codes?', answer: 'HTTP (Hypertext Transfer Protocol) is the protocol for communication between browsers (or clients) and servers. Methods: GET (retrieve), POST (create), PUT (replace), PATCH (update), DELETE (remove). Status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity (validation error), 429 Too Many Requests, 500 Internal Server Error, 503 Service Unavailable. Headers carry metadata: Content-Type, Authorization, Accept. Understanding HTTP is fundamental to web development.', difficulty: 'Beginner', category: 'APIs' },
  { id: 5, question: 'What is a database? What is the difference between SQL and NoSQL?', answer: 'A database is an organized collection of data. SQL databases (PostgreSQL, MySQL) store data in structured tables with schemas, relationships (foreign keys), and use SQL for queries. ACID compliant for transactions. NoSQL databases (MongoDB, Redis, Cassandra, DynamoDB) store data in flexible formats (documents, key-value, column, graph). Better for unstructured data, horizontal scaling, and high write throughput. Choose SQL for: relational data, complex queries, transactions. Choose NoSQL for: flexible schemas, horizontal scale, caching (Redis), or semi-structured data (MongoDB for catalogs, logs).', difficulty: 'Beginner', category: 'Databases' },
  { id: 6, question: 'What is CORS? Why does it exist?', answer: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from making requests to a different domain than the one that served the page. If your frontend (http://localhost:3000) calls a backend (http://localhost:8000), the browser blocks the request unless the backend sends CORS headers: Access-Control-Allow-Origin: http://localhost:3000. Preflight: browsers send OPTIONS request first to check if the actual request is allowed. CORS is enforced by the browser — curl and Postman bypass it. Configure CORS in your backend framework (Django, FastAPI, Express).', difficulty: 'Beginner', category: 'Web Security' },
  { id: 7, question: 'What is authentication? What is the difference between session-based and token-based auth?', answer: 'Authentication verifies "who are you?" Authorization is "what can you do?". Session-based: server stores session data in DB; client gets a session ID cookie. Server-stateful. Token-based (JWT): server issues a signed token; client stores and sends it with each request. Server-stateless — no DB lookup needed per request. JWT: JSON Web Token encodes user data + expiry, signed with a secret. Verify signature on each request. Session is simpler for traditional web apps. JWT is preferred for APIs, mobile apps, and microservices where statelessness is important.', difficulty: 'Beginner', category: 'Security' },
  { id: 8, question: 'What is Docker? Why is it useful for full-stack development?', answer: 'Docker is a platform for packaging applications into containers — lightweight, portable units that include the application and its dependencies. A Dockerfile defines the image: FROM python:3.12; COPY . .; RUN pip install -r requirements.txt; CMD ["python", "app.py"]. docker-compose.yml orchestrates multiple services (web, db, redis) together. Benefits: "works on my machine" problem eliminated (same environment everywhere), easy local setup for teams (one command: docker-compose up), consistent dev/staging/production environments. Essential skill for full-stack developers deploying to modern infrastructure.', difficulty: 'Beginner', category: 'DevOps' },
  { id: 9, question: 'What is Git? What is a branching strategy?', answer: 'Git is a distributed version control system. Core commands: init, clone, add, commit, push, pull, merge, rebase, branch. Branching strategies: Git Flow (main, develop, feature/*, hotfix/* branches), GitHub Flow (main + feature branches, PRs), Trunk-Based Development (commit directly to main with feature flags). For small teams: GitHub Flow is simple and effective. For release-based software: Git Flow. In CI/CD: branch protection, required PR reviews, automated tests before merge. Commit messages: conventional commits (feat:, fix:, chore:) for automated changelogs.', difficulty: 'Beginner', category: 'Development Workflow' },
  { id: 10, question: 'What is an API? How do you design a good one?', answer: 'An API (Application Programming Interface) defines how software components communicate. REST API design principles: use nouns for resources (/posts, not /getPosts), HTTP methods for actions (GET /posts, POST /posts, DELETE /posts/1), consistent response structure, meaningful HTTP status codes, versioning (/api/v1/), pagination for lists, proper error messages. Bad API: /api/getPosts, returns 200 even for errors. Good API: GET /api/v1/posts returns {data: [...], meta: {total, page}}, 404 for not found, 422 with {errors: [{field, message}]} for validation. Document with OpenAPI/Swagger.', difficulty: 'Beginner', category: 'APIs' },
  { id: 11, question: 'What is the MVC pattern? How does it apply to full-stack development?', answer: 'MVC (Model-View-Controller) separates concerns: Model (data and business logic), View (UI presentation), Controller (handles input, coordinates model and view). In full-stack: backend follows MVC (Django, Express). Frontend frameworks like React use component-based architecture that blurs MVC lines. Modern full-stack interpretation: backend = Model + Controller (API), frontend = View + some Controller logic. For clean code: keep business logic in models/services, keep controllers thin (validate input, call service, return response), and keep views focused on rendering data (not fetching it).', difficulty: 'Beginner', category: 'Architecture' },
  { id: 12, question: 'What is a CDN and why would you use one?', answer: 'A CDN (Content Delivery Network) is a geographically distributed network of servers that caches and delivers static assets (images, CSS, JS, videos) from locations close to users. Benefits: faster load times (assets served from nearest edge node), reduced origin server load, automatic failover, DDoS protection. Examples: AWS CloudFront, Cloudflare, Akamai, Fastly. Use a CDN for: static files, website assets, API caching (for read-heavy, public APIs), video delivery. In Indian context: CDN edge nodes in Mumbai, Delhi, Chennai significantly reduce latency for users vs serving from US-East.', difficulty: 'Beginner', category: 'Infrastructure' },
  { id: 13, question: 'What is caching? What are different levels of caching?', answer: 'Caching stores copies of frequently-accessed data to speed up retrieval. Levels: 1) Browser cache: HTTP headers (Cache-Control, ETag) tell browsers to cache responses. 2) CDN cache: edge servers cache static/dynamic content. 3) Application cache: in-process (dictionary, functools.lru_cache) or distributed (Redis, Memcached). 4) Database cache: query results (PostgreSQL query cache). Cache strategies: cache-aside (app checks cache, falls back to DB), write-through (write to cache and DB simultaneously), write-back (write to cache, sync to DB later). Cache invalidation is the hard part — decide on TTL vs event-based invalidation.', difficulty: 'Intermediate', category: 'Performance' },
  { id: 14, question: 'Explain the OSI model briefly. Which layers are most relevant to web developers?', answer: 'OSI has 7 layers. Web developers most interact with: Layer 4 (Transport — TCP/UDP, handles connections, ports), Layer 7 (Application — HTTP, WebSocket, DNS). TCP ensures reliable delivery (web apps). UDP is faster, less reliable (video streaming, games). Layer 3 (Network — IP addresses, routing) matters for networking concepts. Layer 6 (Presentation — TLS/SSL encryption). Understanding TCP: three-way handshake (SYN, SYN-ACK, ACK) explains why latency matters. TLS adds another handshake. This explains why HTTP/2 (multiplexing) and HTTP/3 (QUIC/UDP) improve performance.', difficulty: 'Intermediate', category: 'Networking' },
  { id: 15, question: 'What is a message queue? When do you use one?', answer: 'A message queue (RabbitMQ, Kafka, AWS SQS) decouples producers (emit events/tasks) from consumers (process them). Producer puts a message on the queue and moves on; consumer processes asynchronously. Use cases: background jobs (emails, PDF generation), event-driven architecture (order created → notify warehouse, billing, analytics), buffering traffic spikes (queue absorbs bursts, consumers process steadily), integrating microservices. Without a queue: heavy background work blocks user requests, crashes lose work, spike traffic crashes the system. Message queues improve reliability, scalability, and decoupling.', difficulty: 'Intermediate', category: 'Architecture' },
  { id: 16, question: 'What is WebSocket? How does it differ from HTTP?', answer: 'WebSocket is a full-duplex communication protocol over a persistent TCP connection. Unlike HTTP (client sends request, server responds, connection closes), WebSocket keeps the connection open — both sides can send messages at any time without a new request. Handshake: upgrade from HTTP to WebSocket. Use WebSocket for: real-time chat, live notifications, collaborative tools, live data feeds (stock prices), multiplayer games. SSE (Server-Sent Events) is simpler for one-direction push (server → client only) with automatic reconnect. HTTP polling is simplest but wastes bandwidth. Choose based on frequency and bidirectionality of updates.', difficulty: 'Intermediate', category: 'Real-Time' },
  { id: 17, question: 'What is an ORM? What are its advantages and disadvantages?', answer: 'An ORM (Object-Relational Mapper) maps database tables to programming objects, abstracting SQL. Examples: Django ORM, SQLAlchemy, Prisma, Hibernate. Advantages: type-safe queries, database portability, reduces boilerplate SQL, protects against SQL injection, easier migrations. Disadvantages: abstraction leakage (ORM can generate inefficient SQL), N+1 query problem, complex queries are harder to express than raw SQL, performance overhead for simple queries. Best practice: use ORM for 80% of queries, drop to raw SQL or query builder for complex reporting or performance-critical paths. Always monitor generated SQL in development.', difficulty: 'Intermediate', category: 'Databases' },
  { id: 18, question: 'What is environment variable management?', answer: 'Environment variables store configuration that varies between environments (dev, staging, prod): database URLs, API keys, secret keys. Never hardcode secrets in source code. .env file (not committed to git): DATABASE_URL=postgres://user:pass@localhost/db. Load with python-decouple (Python), dotenv (Node.js). Production: AWS Secrets Manager, HashiCorp Vault, or environment variables in container runtime. .env.example file with placeholder values — committed to git for documentation. Validate required env vars at startup: raise error if critical variable missing. Separate vars per environment (dev/staging/production DB URLs).', difficulty: 'Beginner', category: 'Configuration' },
  { id: 19, question: 'What is load balancing? How does it work?', answer: 'Load balancing distributes incoming traffic across multiple server instances to prevent any single server from being overwhelmed. Algorithms: Round Robin (cycle through servers equally), Least Connections (send to server with fewest active connections), IP Hash (route same client to same server — useful for session affinity). Tools: AWS ALB/NLB, Nginx (proxy_pass with upstream block), HAProxy. Load balancers also do health checks — remove unhealthy servers from the pool automatically. Horizontal scaling: add more servers behind the load balancer. Session state must be stored externally (Redis) when multiple servers handle the same user.', difficulty: 'Intermediate', category: 'Infrastructure' },
  { id: 20, question: 'What is continuous integration and continuous deployment (CI/CD)?', answer: 'CI (Continuous Integration): developers merge code frequently; automated tests run on each push. CD (Continuous Delivery/Deployment): code that passes tests is automatically deployed to staging (delivery) or production (deployment). Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI. Pipeline: push code → run tests → build Docker image → push to registry → deploy to Kubernetes. Benefits: catch bugs early, release frequently (instead of big-bang releases), reduce deployment risk (small changes are easier to debug). Example: every PR merge to main deploys to staging automatically; production deploy requires manual approval.', difficulty: 'Intermediate', category: 'DevOps' },
  { id: 21, question: 'What is the difference between PUT and PATCH in REST APIs?', answer: 'PUT replaces the entire resource with the provided data. PATCH updates only the provided fields, leaving others unchanged. Example: PUT /posts/1 requires all fields ({title, body, status}) — missing fields may be set to null. PATCH /posts/1 with {status: "published"} only changes status. Use PATCH for partial updates (more efficient for large objects). Use PUT when replacing the full resource (idempotent). Both should be idempotent — calling the same request multiple times gives the same result. In practice, many APIs use PUT loosely for partial updates. Prefer PATCH for clarity.', difficulty: 'Beginner', category: 'APIs' },
  { id: 22, question: 'What is JSON? What is the difference between JSON and XML?', answer: 'JSON (JavaScript Object Notation) is a lightweight, human-readable data format: {"name": "Alice", "age": 30, "tags": ["admin", "user"]}. XML is a markup format: <user><name>Alice</name><age>30</age></user>. JSON is simpler, smaller, natively parsed in JavaScript, and used by virtually all modern REST APIs. XML is verbose but supports schemas (XSD), namespaces, and attributes — still used in SOAP, RSS, configuration files. In web development, JSON is the standard. Use JSON for all new APIs. XML only when required by a legacy system or standard (SAML, SOAP).', difficulty: 'Beginner', category: 'APIs' },
  { id: 23, question: 'What is XSS and CSRF? How do you prevent them?', answer: 'XSS (Cross-Site Scripting): attacker injects malicious scripts into a web page viewed by other users. Attacker steals cookies or performs actions as the victim. Prevention: escape output (HTML encode user input before rendering), Content-Security-Policy (CSP) header, avoid innerHTML with user data. CSRF (Cross-Site Request Forgery): malicious site tricks authenticated user\'s browser into making requests. Prevention: CSRF tokens (random token in form, verified server-side), SameSite cookie attribute, verify Origin/Referer headers. For APIs with token auth (JWT in Authorization header, not cookie), CSRF is not an issue — malicious sites can\'t read the token.', difficulty: 'Intermediate', category: 'Security' },
  { id: 24, question: 'What is a proxy vs reverse proxy?', answer: 'A forward proxy sits in front of clients — hides client identity from servers (privacy, content filtering, corporate proxies). A reverse proxy sits in front of servers — hides server topology from clients. Reverse proxy uses: SSL termination (HTTPS at Nginx, HTTP to backend), load balancing, caching, rate limiting, serving static files. Nginx is the most common reverse proxy for web applications. Configuration: location / { proxy_pass http://gunicorn_backend; }. In full-stack: Nginx handles HTTPS + static files + proxies /api/* to Django; serves React build for /*. AWS ALB is a managed reverse proxy.', difficulty: 'Intermediate', category: 'Infrastructure' },
  { id: 25, question: 'What is SQL? What are the basic query types?', answer: 'SQL (Structured Query Language) manipulates relational databases. Core operations: SELECT (retrieve), INSERT (add), UPDATE (modify), DELETE (remove). SELECT: SELECT id, title FROM posts WHERE status=\'published\' ORDER BY created_at DESC LIMIT 10. JOIN: SELECT p.title, u.name FROM posts p JOIN users u ON p.author_id = u.id. GROUP BY + aggregate: SELECT author_id, COUNT(*) as post_count FROM posts GROUP BY author_id. Transactions: BEGIN; INSERT ...; UPDATE ...; COMMIT (or ROLLBACK). Indexes speed up WHERE, ORDER BY, JOIN clauses. Every full-stack developer must be comfortable writing and optimizing SQL queries.', difficulty: 'Beginner', category: 'Databases' },

  // ── INTERMEDIATE (30) ─────────────────────────────────────
  { id: 26, question: 'What is database normalization? What are the normal forms?', answer: 'Normalization reduces data redundancy and improves integrity. 1NF: atomic values (no repeating groups, each cell has one value). 2NF: no partial dependencies (non-key columns depend on the entire primary key). 3NF: no transitive dependencies (non-key columns depend only on the primary key, not other non-key columns). BCNF: stronger 3NF. Practical: normalize to 3NF for transactional systems. For analytics/reporting, denormalize (flattened tables) for query performance. Example violation: storing city name with every order instead of a separate cities table. Normalization prevents update anomalies (changing a city name in one place, not all orders).', difficulty: 'Intermediate', category: 'Databases' },
  { id: 27, question: 'What is an index in a database? How do you decide when to add one?', answer: 'A database index is a data structure (usually B-Tree or Hash) that speeds up row lookups at the cost of write speed and storage. Without index: full table scan O(n). With index: O(log n) or O(1). Add indexes for: columns in WHERE clauses, JOIN keys (FK columns), ORDER BY columns, UNIQUE constraints. Don\'t over-index: every index slows INSERT/UPDATE/DELETE. Analyze slow queries with EXPLAIN ANALYZE. Composite indexes: (status, created_at) is useful for WHERE status=\'published\' ORDER BY created_at. Order matters in composite indexes. Partial indexes: CREATE INDEX ON posts(id) WHERE status=\'published\' — smaller, faster.', difficulty: 'Intermediate', category: 'Databases' },
  { id: 28, question: 'What is database connection pooling? Why does it matter?', answer: 'Creating a new database connection for each request is expensive (TCP handshake, auth, setup). Connection pooling reuses existing connections. Pool maintains N connections; requests borrow and return. Libraries: SQLAlchemy pool (Python), pg-pool (Node.js), PgBouncer (PostgreSQL-native pooler). PgBouncer sits between app and Postgres — excellent for serverless/Lambda where many instances each need connections. Size pool correctly: too small = requests queue; too large = DB overloaded. Rule: Postgres can handle ~100-200 active connections. Use PgBouncer with pool_size=10 per app server. Monitor: connection wait time, pool utilization.', difficulty: 'Intermediate', category: 'Databases' },
  { id: 29, question: 'What is GraphQL? How do resolvers work?', answer: 'GraphQL is a query language for APIs where clients specify exactly what data they need. Schema defines types: type Post { id: ID!, title: String!, author: User! }. Queries: query { post(id: "1") { title, author { name } } }. Mutations: mutation { createPost(input: {title: "Hello"}) { id } }. Subscriptions: real-time updates. Resolvers are functions that return data for each field: const resolvers = { Post: { author: (post) => User.findById(post.authorId) }. N+1 in GraphQL: each post triggers separate author query. Fix with DataLoader (batching + caching). Schema-first or code-first (Strawberry in Python). Apollo Server or Ariadne (Python) are common implementations.', difficulty: 'Intermediate', category: 'APIs' },
  { id: 30, question: 'What is rate limiting? How do you implement it?', answer: 'Rate limiting restricts how many requests a client can make in a time window to prevent abuse. Algorithms: Token Bucket (smooth limiting), Leaky Bucket (constant drain), Fixed Window (count per minute), Sliding Window (smooth count). Redis-based: store request count per user/IP with TTL. INCR key → if count > limit, return 429. Use ATOMIC operations (Lua script) to prevent race conditions. Libraries: django-ratelimit, slowapi (FastAPI). At infrastructure level: Nginx limit_req module, AWS API Gateway built-in throttling, Cloudflare rate limiting. Return Retry-After header with 429. IP-based limiting is easy to bypass with proxies; prefer authenticated user-based limits.', difficulty: 'Intermediate', category: 'APIs' },
  { id: 31, question: 'What is a microservices architecture? When should you choose it over a monolith?', answer: 'Microservices: application split into small, independent services that communicate over APIs (HTTP or message queue). Each service has its own database, deployment, and team. Benefits: independent scaling, independent deployment, technology diversity, team autonomy. Drawbacks: network latency, distributed system complexity, operational overhead (many services to manage), data consistency challenges. Monolith: single deployable unit. Start with a monolith; extract microservices when specific services need to scale independently or different teams have conflicting needs. Common mistake: premature microservices with a small team creates engineering overhead without benefits. "Modular monolith" (well-structured monolith with clear module boundaries) is often the right middle ground.', difficulty: 'Intermediate', category: 'Architecture' },
  { id: 32, question: 'What is Nginx? How do you configure it for a full-stack app?', answer: 'Nginx is a high-performance web server, reverse proxy, and load balancer. Configuration for full-stack: server { listen 80; server_name app.com; location / { root /var/www/build; try_files $uri $uri/ /index.html; } location /api/ { proxy_pass http://127.0.0.1:8000; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } }. This serves React build for all routes (SPA), proxies /api/* to Django/FastAPI. Add HTTPS: ssl_certificate and ssl_certificate_key (Let\'s Encrypt). Static file compression: gzip on; gzip_types text/css application/javascript. Rate limiting: limit_req_zone, limit_req.', difficulty: 'Intermediate', category: 'Infrastructure' },
  { id: 33, question: 'What is the difference between SQL JOINs?', answer: 'INNER JOIN: returns rows where condition matches in BOTH tables. LEFT JOIN: returns ALL rows from left table + matching rows from right (NULL where no match). RIGHT JOIN: opposite of LEFT. FULL OUTER JOIN: all rows from both tables (NULLs where no match). CROSS JOIN: cartesian product (all combinations). SELF JOIN: table joined with itself (e.g., employee and their manager from the same table). Example: INNER JOIN returns only users with posts; LEFT JOIN returns all users, including those without posts (post columns are NULL). Choose the join type based on whether you need rows without a match.', difficulty: 'Intermediate', category: 'Databases' },
  { id: 34, question: 'What is the CAP theorem?', answer: 'CAP theorem states a distributed data system can guarantee at most 2 of 3 properties: Consistency (every read receives the most recent write), Availability (every request receives a response — not necessarily the latest), Partition Tolerance (system continues operating despite network partitions). In real distributed systems, network partitions are inevitable — so you must choose CP (consistent but may be unavailable during partition) or AP (available but may return stale data). Examples: CP — HBase, Zookeeper. AP — Cassandra, CouchDB, DynamoDB. Most relational databases: CP. Understanding CAP helps explain why distributed systems have eventual consistency trade-offs.', difficulty: 'Intermediate', category: 'Distributed Systems' },
  { id: 35, question: 'What is server-side rendering (SSR) vs client-side rendering (CSR)?', answer: 'CSR (Create React App, Vite SPA): browser downloads JS bundle, renders the page in JavaScript. Slow initial load, fast navigation, poor SEO (content not in initial HTML). SSR (Next.js getServerSideProps): server renders HTML per request. Fast initial page, good SEO, higher server load. SSG (Next.js getStaticProps): HTML pre-built at build time. Fastest, CDN cacheable, content is static. ISR (incremental static regeneration): SSG with background rebuild on interval. Choose: SSR for dynamic SEO content (news, e-commerce products); SSG for blogs, documentation; CSR for dashboards/SaaS (no SEO needed); ISR for content that changes but not every request.', difficulty: 'Intermediate', category: 'Architecture' },
  { id: 36, question: 'What are database transactions? What is ACID?', answer: 'A transaction groups multiple DB operations that should succeed or fail together. BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT. If any operation fails, ROLLBACK undoes all changes. ACID: Atomicity (all or nothing), Consistency (data remains valid after transaction), Isolation (concurrent transactions don\'t interfere), Durability (committed transactions survive crashes). Isolation levels: READ UNCOMMITTED, READ COMMITTED (Postgres default), REPEATABLE READ, SERIALIZABLE. Higher isolation = more locks = less concurrency. Choose based on consistency requirements.', difficulty: 'Intermediate', category: 'Databases' },
  { id: 37, question: 'What is Redis? What are common use cases?', answer: 'Redis is an in-memory data store (key-value) supporting rich data structures: strings, hashes, lists, sets, sorted sets. Blazing fast: 100,000+ operations per second. Common uses: 1) Caching: cache API responses or DB queries with TTL. 2) Session storage: fast, shared session access across servers. 3) Rate limiting: atomic INCR with TTL. 4) Pub/Sub: real-time message broadcasting (Django Channels). 5) Job queues: Celery broker. 6) Leaderboards: sorted sets. 7) Distributed locks: SET ... NX EX. Persistence: RDB (snapshots) or AOF (append-only log). Redis is a critical component of most production full-stack architectures.', difficulty: 'Intermediate', category: 'Infrastructure' },
  { id: 38, question: 'What is JWT? How does it work?', answer: 'JWT (JSON Web Token) is a compact, self-contained token for authentication. Structure: header.payload.signature (Base64 encoded). Header: {alg: "HS256", typ: "JWT"}. Payload: {user_id: 1, role: "admin", exp: 1700000000}. Signature: HMAC_SHA256(base64(header) + "." + base64(payload), secret_key). Server verifies signature on each request — no DB lookup needed (stateless). Store: httpOnly cookie (XSS safe) or memory (lost on refresh). Never store in localStorage (XSS vulnerable). Access token: short-lived (15min). Refresh token: long-lived (7 days), stored in httpOnly cookie, used to get new access tokens. Never put sensitive data in JWT payload — it\'s only signed, not encrypted.', difficulty: 'Intermediate', category: 'Security' },
  { id: 39, question: 'What is the difference between authentication and authorization?', answer: 'Authentication: verifying identity ("who are you?"). Mechanisms: username/password, OAuth, biometrics, MFA. Authorization: determining permissions ("what can you do?"). Mechanisms: RBAC (Role-Based), ABAC (Attribute-Based), ACL (Access Control List). Example: Authentication — user logs in with email/password. Authorization — user with "viewer" role can read posts but not create. Always check authorization on the backend, never only on frontend. JWT can encode roles for stateless authorization. For complex permissions: use a dedicated authorization library (casbin, OPA) or service.', difficulty: 'Beginner', category: 'Security' },
  { id: 40, question: 'What is an API gateway? Why would you use one?', answer: 'An API gateway is a server that acts as an entry point for all client requests to backend services. Responsibilities: routing (forward /api/users to user-service), authentication (verify JWT before forwarding), rate limiting, SSL termination, request/response transformation, logging, monitoring. Examples: AWS API Gateway, Kong, Traefik, Nginx (basic). Benefits: single entry point simplifies client-side logic, consistent auth across all services, centralized rate limiting and logging, A/B testing, traffic splitting. Without a gateway: each microservice must implement auth, rate limiting, and logging separately. Essential for microservices architectures.', difficulty: 'Intermediate', category: 'Architecture' },
  { id: 41, question: 'What is eventual consistency? How do you handle it in applications?', answer: 'Eventual consistency: in distributed systems, replicas will eventually converge to the same value, but there may be a window where reads return stale data. Example: write to primary DB → read from replica (before replication) → get stale data. Strategies: 1) Read from primary for critical operations (cart checkout). 2) Read-your-own-writes: route user\'s own reads to the same replica they wrote to. 3) Stale data UI: show "last updated 2s ago" and refresh. 4) Conflict resolution: last-write-wins, version vectors, or manual merge. 5) Accept it: for social feeds, eventual consistency is fine (displaying a 1-second-old comment is acceptable).', difficulty: 'Advanced', category: 'Distributed Systems' },
  { id: 42, question: 'What is horizontal vs vertical scaling?', answer: 'Vertical scaling (scale up): add more CPU/RAM to existing server. Simpler but has hardware limits and single point of failure. Horizontal scaling (scale out): add more server instances behind a load balancer. No theoretical limit, better fault tolerance. Requirements for horizontal scaling: stateless application (session in Redis, not server memory), shared storage (S3, not local disk), shared database (external). Database scaling: vertical (primary) + horizontal (read replicas). Sharding: split DB horizontally by key range or hash. Stateful services (WebSocket servers) need sticky sessions or external state store.', difficulty: 'Intermediate', category: 'Scalability' },
  { id: 43, question: 'What is a service worker? What can it do?', answer: 'A service worker is a background script running in the browser, separate from the web page. Capabilities: 1) Cache assets for offline access (Cache API). 2) Background sync (defer API calls when offline, sync when back online). 3) Push notifications (receive and display even when page is closed). 4) Intercept and modify network requests. 5) Pre-fetch resources. Lifecycle: install, activate, fetch events. Use with Workbox (Google) to simplify cache strategies. PWA (Progressive Web App) requires a service worker and HTTPS. Service workers have no DOM access. Essential for offline-first apps and push notifications.', difficulty: 'Advanced', category: 'Web APIs' },
  { id: 44, question: 'What is a monorepo? What are its benefits?', answer: 'A monorepo stores multiple projects (frontend, backend, shared packages) in a single Git repository. Tools: Nx, Turborepo, Lerna. Benefits: code sharing (common utilities, types, component library), atomic cross-project changes (change shared type + all consumers in one PR), consistent tooling (one ESLint config, one Jest setup), easier dependency management. Drawbacks: slower CI if not optimized (build all projects), large repo size, requires tooling for project isolation. Turborepo: task caching (only rebuild changed packages), parallel execution. Ideal for: design systems, full-stack TypeScript apps, microservices with shared types.', difficulty: 'Intermediate', category: 'Development Workflow' },
  { id: 45, question: 'What is Infrastructure as Code (IaC)? What tools are used?', answer: 'IaC means defining infrastructure (servers, databases, networks) in code files instead of manual configuration. Benefits: version controlled, reproducible, auditable, automated. Tools: Terraform (cloud-agnostic, HCL syntax), AWS CloudFormation (AWS-specific, YAML/JSON), AWS CDK (infrastructure in TypeScript/Python), Pulumi (multi-cloud, TypeScript). Example: Terraform defines VPC, EC2, RDS, Redis — apply it and AWS provisions everything automatically. Key principles: idempotent (apply multiple times = same result), declarative (describe desired state), modular (reusable modules). For full-stack developers: Terraform + Docker is a powerful combination for consistent deployments.', difficulty: 'Intermediate', category: 'DevOps' },
  { id: 46, question: 'How do you handle file storage in a full-stack app?', answer: 'Never store user files on the application server filesystem — it breaks in multi-server setups and is lost on deploy. Use object storage: AWS S3, Google Cloud Storage, MinIO (self-hosted). Upload strategies: 1) Via server: client → Django/FastAPI → S3 (simple but double bandwidth). 2) Presigned URL: server generates temporary S3 upload URL → client uploads directly to S3 (faster, no server bandwidth). Store only file metadata (URL, size, type) in the database. CDN: CloudFront in front of S3 for fast global delivery. Validation: check file type (magic bytes), size, and scan for malware (ClamAV or cloud-native scanner).', difficulty: 'Intermediate', category: 'Storage' },
  { id: 47, question: 'What is the observer pattern? Where is it used in web development?', answer: 'Observer pattern: one object (subject) maintains a list of dependents (observers) and notifies them of state changes. In JavaScript: EventEmitter, addEventListener. In React: useEffect with deps array (observes dep changes). In Redux: store.subscribe(). In Node.js: EventEmitter is core to streams and HTTP. In Django: signals are observer pattern. Real-world use: Kafka consumers (observe topics), WebSocket (observe server events), React Query (observe data freshness). Understanding the observer pattern helps reason about event-driven systems, reactive state, and pub/sub architectures — all fundamental full-stack patterns.', difficulty: 'Intermediate', category: 'Design Patterns' },
  { id: 48, question: 'What is GraphQL subscriptions vs WebSocket?', answer: 'GraphQL subscriptions provide a structured way to push real-time data updates using GraphQL protocol (typically over WebSocket). subscription { newPost { id, title, author { name } } }. Apollo Client handles the WS connection and cache updates. The advantage over raw WebSocket: type-safe, query-specific subscriptions — clients only receive data they asked for. Raw WebSocket: flexible but requires custom message format. Use GraphQL subscriptions when your API is already GraphQL. Use raw WebSocket for: high-frequency data (game state, trading), non-GraphQL backends, or when the subscription overhead is too heavy. SSE is simpler for server-to-client push with lower overhead.', difficulty: 'Advanced', category: 'Real-Time' },
  { id: 49, question: 'How do you implement search functionality across a full-stack app?', answer: 'Approach 1: SQL LIKE/Full-text search — works for simple cases, doesn\'t scale well, no fuzzy matching. Approach 2: Elasticsearch — powerful, typo-tolerant, faceted search, relevance ranking. Backend: sync model changes to ES index via post_save signal (Django) or change streams (MongoDB). Frontend: debounced search input calls /api/search?q=... Backend: Elasticsearch query with multi_match across fields. Approach 3: Algolia — managed SaaS, instant results, autocomplete, typo-tolerance. Architecture: primary DB is source of truth; search engine is a read-optimized projection. Keep them in sync: event-driven (preferred) or batch job. Algolia is easiest for full-stack devs without search expertise.', difficulty: 'Advanced', category: 'Search' },
  { id: 50, question: 'What is an idempotent API endpoint? Why does it matter?', answer: 'An idempotent operation produces the same result regardless of how many times it\'s applied. GET, PUT, DELETE are idempotent by definition. POST is not (calling POST /payments twice creates two payments). Making POST idempotent: accept Idempotency-Key header from client (UUID); store key + response in Redis (24h TTL); if key seen again, return stored response. This is critical for payment APIs — network retries shouldn\'t charge twice. Razorpay, Stripe, and all major payment APIs support idempotency keys. Implement for any API where duplicate calls have side effects (order creation, payment, subscription activation).', difficulty: 'Intermediate', category: 'APIs' },
  { id: 51, question: 'What is DNS? How does a domain name resolve to a server?', answer: 'DNS (Domain Name System) translates domain names (api.example.com) to IP addresses (203.0.113.1). Resolution: 1) Browser checks local cache. 2) OS queries DNS resolver (usually ISP or 8.8.8.8). 3) Resolver queries root nameservers → TLD nameserver (.com) → authoritative nameserver. 4) Returns IP. TTL: how long to cache the IP (set low during migrations). Records: A (domain → IPv4), AAAA (IPv6), CNAME (alias), MX (email), TXT (verification), NS (nameservers). For full-stack: configure A record for API, CNAME for www. Use Cloudflare for DNS + CDN + DDoS protection. Know how to update DNS for subdomain-based multi-tenancy.', difficulty: 'Intermediate', category: 'Networking' },
  { id: 52, question: 'What is OAuth 2.0? How does it enable social login?', answer: 'OAuth 2.0 is an authorization framework that lets users grant third-party apps access to their resources without sharing passwords. Social login flow: 1) User clicks "Login with Google". 2) Redirect to Google with client_id, redirect_uri, scope. 3) User authorizes. 4) Google redirects back with authorization code. 5) Backend exchanges code for access token + id token (POST to Google token endpoint). 6) Decode id token to get user info (email, name). 7) Create or find user in DB, issue JWT. Libraries: authlib (Python), next-auth (Next.js). Scopes define what data you access (email, profile, openid). PKCE (Proof Key for Code Exchange) for mobile/SPA apps.', difficulty: 'Intermediate', category: 'Security' },
  { id: 53, question: 'What is the difference between synchronous and asynchronous APIs?', answer: 'Synchronous API: client sends request, waits, gets response. Simple and predictable. Works for quick operations (<1s). Asynchronous API: client sends request, gets job ID immediately, polls for result or receives webhook callback. Used for long-running operations (video encoding, large reports, ML inference). Pattern: POST /jobs → {job_id: "abc123"}. Client polls GET /jobs/abc123 → {status: "processing"} or {status: "done", result_url: "..."}. Or server sends webhook to client URL when done. Long-polling, SSE, and WebSocket are intermediate approaches (avoid repeated polling). Design async APIs for operations that take >1-2 seconds.', difficulty: 'Intermediate', category: 'APIs' },
  { id: 54, question: 'How do you handle database migrations with zero downtime?', answer: 'Dangerous migrations (dropping columns, renaming, adding NOT NULL without default) require downtime if done naively. Zero-downtime strategy (expand-contract pattern): Phase 1 (Expand): add new column (nullable). Deploy code that writes to both old and new columns. Phase 2: backfill old rows (batch update with low priority). Phase 3 (Switch): deploy code that reads from new column only. Phase 4 (Contract): make column NOT NULL. Phase 5: drop old column. Never: add NOT NULL without default in one migration (locks table). Use pg_repack for table rewrites without lock. Test migration on production-size data in staging. Monitor migration time — long locks block all reads/writes.', difficulty: 'Advanced', category: 'Databases' },
  { id: 55, question: 'What is the strangler fig pattern for migrating a monolith to microservices?', answer: 'Strangler Fig pattern: gradually replace parts of a monolith without big-bang rewrite. Steps: 1) Put a facade (API gateway or proxy) in front of the monolith. 2) Identify a bounded context to extract (e.g., auth service). 3) Build the new service in parallel. 4) Route traffic for auth to the new service, all else to monolith. 5) Repeat for other contexts. Over time, the monolith is "strangled" — traffic migrates piece by piece. Benefits: no big rewrite risk, incremental validation, rollback is possible. Each step is small and reversible. The monolith continues serving until it\'s fully replaced. Named after the strangler fig plant that surrounds and eventually replaces a host tree.', difficulty: 'Advanced', category: 'Architecture' },

  // ── ADVANCED (25) ─────────────────────────────────────────
  { id: 56, question: 'What is CQRS? When would you use it?', answer: 'CQRS (Command Query Responsibility Segregation) separates read models (queries) from write models (commands). Write side: commands mutate state, optimized for consistency. Read side: queries use denormalized, pre-computed views optimized for specific query patterns. Example: Write to normalized PostgreSQL; build a denormalized Elasticsearch view for search. Event-sourced: every change is an event; read models are projections of event streams. Benefits: scale reads and writes independently, optimize each model for its use case. Drawbacks: eventual consistency between models, complexity. Don\'t use CQRS for simple CRUD apps — overhead isn\'t worth it. Use when read and write performance requirements diverge significantly.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 57, question: 'What is event sourcing?', answer: 'Event sourcing stores all changes as a sequence of events (immutable log) instead of just the current state. Current state is derived by replaying events. Example: instead of storing balance=500, store: [MoneyDeposited(100), MoneyWithdrawn(50), MoneyDeposited(450)]. Benefits: complete audit trail (every change is recorded), ability to replay and rebuild read models, temporal queries (state at any point in time), event replay for debugging. Drawbacks: complexity, storage grows with history, snapshot needed for performance (don\'t replay 1M events). Works well with CQRS. Use case: financial ledgers, audit logs, order management, collaborative editing. Don\'t use for simple CRUD unless audit trail is required.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 58, question: 'How would you design a system for handling high-traffic (100k RPM)?', answer: 'Components at 100k RPM: 1) CDN: serve static assets + cache API responses at edge. 2) Load balancer: distribute traffic across API servers. 3) Stateless API servers: scale horizontally (Docker/Kubernetes). 4) Read replicas: route 90% of reads to replicas. 5) Redis cache: cache hot data (avoid DB for every request). 6) Async processing: heavy work via Celery queue (don\'t block API). 7) Rate limiting: prevent abuse. 8) Compression: gzip responses. 9) Connection pooling: PgBouncer for database. 10) Horizontal pod autoscaler: scale based on CPU/request rate. 100k RPM = ~1,667 req/sec — achievable with 5-10 API servers with proper caching and DB optimization.', difficulty: 'Advanced', category: 'Scalability' },
  { id: 59, question: 'What is a circuit breaker pattern? How do you implement it?', answer: 'Circuit breaker prevents cascading failures when a dependency (payment service, external API) becomes unreliable. States: Closed (requests pass through, monitor failures), Open (requests fail fast without calling dependency — return cached response or error), Half-Open (allow some requests through to test recovery). Transition: too many failures → Open → after timeout → Half-Open → success → Closed. Libraries: pybreaker (Python), resilience4j (Java), hystrix (legacy). Implement: class CircuitBreaker: states, failure threshold, timeout. Call: try circuit_breaker.call(func) except CircuitOpenError: return fallback. Combine with retry (retry before opening circuit) and fallback response.', difficulty: 'Advanced', category: 'Resilience' },
  { id: 60, question: 'What is distributed tracing? How do you implement it?', answer: 'Distributed tracing tracks a request as it flows through multiple services, enabling end-to-end latency analysis. Concepts: trace (entire request), span (operation within a trace), span context (trace ID propagated via headers). Implementation: inject trace ID in request headers (X-Trace-ID); each service creates a span, records duration, passes trace ID downstream. Tools: OpenTelemetry (standard SDK), Jaeger (open-source backend), Zipkin, AWS X-Ray, Datadog APM. FastAPI: opentelemetry-instrument-fastapi auto-instruments. Visualize: flame graph shows service-by-service breakdown. Essential for microservices — without tracing, debugging cross-service latency is nearly impossible.', difficulty: 'Advanced', category: 'Observability' },
  { id: 61, question: 'What is the saga pattern for distributed transactions?', answer: 'Distributed transactions (spanning multiple services) can\'t use traditional ACID transactions. Sagas break the transaction into a sequence of local transactions, each with a compensating transaction for rollback. Choreography: each service publishes events and listens to others (no central coordinator). Order service publishes OrderCreated; Payment service processes payment, publishes PaymentCompleted or PaymentFailed; if failed, Order service compensates (cancels order). Orchestration: a coordinator sends commands to each service (easier to understand, single point of failure). Sagas ensure eventual consistency. Design compensating transactions carefully — they must undo state changes reliably. Use for: payment flows, booking systems, multi-service workflows.', difficulty: 'Advanced', category: 'Distributed Systems' },
  { id: 62, question: 'How do you implement multi-factor authentication (MFA)?', answer: 'MFA requires two or more verification factors: something you know (password), something you have (phone/TOTP app), something you are (biometrics). TOTP (Time-based One-Time Password): PyOTP generates 6-digit codes from a shared secret. Setup: generate secret, encode as QR code (pyqrcode), user scans with Google Authenticator/Authy. Verify: pyotp.TOTP(secret).verify(user_input). Backup codes: generate 8 random codes, store hashed, allow each used once. SMS OTP: Twilio sends code via SMS (less secure than TOTP, susceptible to SIM swapping). Enforce MFA: add mfa_verified flag to JWT, check on sensitive operations. Recovery: email-based OTP for account recovery.', difficulty: 'Advanced', category: 'Security' },
  { id: 63, question: 'What is Kubernetes? How does it relate to full-stack deployment?', answer: 'Kubernetes (K8s) is a container orchestration platform. Core concepts: Pod (one or more containers), Deployment (manages pods, rolling updates, rollback), Service (stable network endpoint for pods), Ingress (HTTP routing rules), ConfigMap/Secret (configuration), HPA (Horizontal Pod Autoscaler). Full-stack deployment: Django in a Deployment (3 replicas), Nginx as Ingress, PostgreSQL as StatefulSet, Redis as Deployment. Manifests (YAML): define desired state; K8s continuously reconciles. Helm: package manager for K8s (deploy complex apps with one command). AWS EKS, GKE, AKS are managed K8s services. K8s abstracts infrastructure — deploy the same manifests on any cloud.', difficulty: 'Advanced', category: 'DevOps' },
  { id: 64, question: 'What is a headless CMS? How would you integrate it into a full-stack app?', answer: 'A headless CMS provides content management without a frontend (no theme, no HTML output) — delivers content via API. Examples: Contentful, Strapi, Sanity, Directus. Full-stack integration: content editors use CMS dashboard; Next.js frontend fetches content via CMS API (REST or GraphQL) at build time (SSG) or request time (SSR). Webhook: CMS triggers rebuild on content publish. Benefits: non-technical editors manage content; developers build any frontend. Self-hosted option: Strapi (Node.js) or Directus (TypeScript) running alongside your backend. For ArivuOn Academy: a headless CMS would let instructors manage course content without developer involvement.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 65, question: 'What is blue-green deployment?', answer: 'Blue-green deployment maintains two identical production environments (blue and green). Only one is live at a time. Deploy: new version to the idle environment. Test: run smoke tests. Switch: update load balancer to route traffic to new version. Rollback: instant — flip load balancer back. No downtime during deployment. Cost: maintain two full environments. Variant: canary deployment (route 5% traffic to new version, gradually increase if metrics are healthy). AWS CodeDeploy, Kubernetes (switch service selector), ALB weighted target groups enable this. Essential for zero-downtime deployments. Combine with feature flags for even safer releases.', difficulty: 'Advanced', category: 'DevOps' },
  { id: 66, question: 'How do you build a real-time collaborative feature?', answer: 'Architecture: Operational Transformation (OT) or CRDT for conflict-free merging. Yjs (CRDT library) handles concurrent edits without a central authority. Components: WebSocket server (y-websocket or custom), Yjs document per resource (shared map, array, text), persistence (Yjs updates stored in Redis or PostgreSQL). Client: Y.Doc bound to UI component (e.g., TipTap editor). Updates broadcast to all connected clients via WebSocket. Presence: broadcast user cursor position, name, color. Authentication: verify JWT on WebSocket connection. Persistence: debounce save of Y.Doc state to DB on each update. Restore: send stored Yjs state to new connection.', difficulty: 'Advanced', category: 'Real-Time' },
  { id: 67, question: 'What is the 12-Factor App methodology?', answer: '12-Factor App is a methodology for building scalable, maintainable software-as-a-service. Key factors: 1) One codebase, many deploys. 2) Explicitly declared dependencies (requirements.txt, package.json). 3) Config in environment variables. 4) Treat backing services (DB, Redis) as attached resources. 5) Separate build and run stages. 6) Execute app as stateless processes. 7) Export services via port binding. 8) Scale via process model. 9) Fast startup, graceful shutdown. 10) Development/staging/production parity. 11) Treat logs as event streams. 12) Run admin tasks as one-off processes. Following 12-Factor principles makes apps cloud-native and easy to deploy on Heroku, ECS, Kubernetes.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 68, question: 'What is a data pipeline? How do you build one?', answer: 'A data pipeline moves and transforms data from source to destination. Steps: Extract (read from DB, API, files), Transform (clean, normalize, aggregate), Load (write to data warehouse, analytics DB). Tools: Apache Airflow (Python-based workflow orchestrator, DAGs), Apache Kafka (streaming), Celery (simple pipelines), dbt (transform SQL in data warehouse), Prefect/Dagster (modern alternatives to Airflow). Example: every night, Airflow extracts orders from PostgreSQL, aggregates by product and region, loads to BigQuery for analytics. For real-time: Kafka + Faust or Kafka + Spark Streaming. For simple pipelines: Celery tasks chained together. Monitor: task duration, failure rates, data quality checks.', difficulty: 'Advanced', category: 'Data Engineering' },
  { id: 69, question: 'How do you monitor a full-stack application in production?', answer: 'Four pillars of observability: Metrics, Logs, Traces, Alerts. Metrics: Prometheus + Grafana. Key metrics: request rate, error rate, latency (p50/p95/p99), saturation (CPU, memory, DB connections). Logs: structured JSON logs (not plain text) → Elasticsearch + Kibana (ELK) or CloudWatch. Include: request ID, user ID, duration, error details. Traces: OpenTelemetry + Jaeger for distributed request tracing. Alerts: AlertManager or PagerDuty — alert on anomalies, not just thresholds. Error tracking: Sentry for exceptions with full stack traces. SLIs (Service Level Indicators), SLOs (Objectives), SLAs (Agreements). On-call rotation: alerts route to the right person at the right time.', difficulty: 'Advanced', category: 'Observability' },
  { id: 70, question: 'What is a content security policy (CSP)? How do you configure it?', answer: 'CSP is an HTTP header that tells browsers which sources are allowed to load scripts, styles, images, etc. Prevents XSS by blocking inline scripts and scripts from unauthorized origins. Example: Content-Security-Policy: default-src \'self\'; script-src \'self\' https://cdn.trusted.com; style-src \'self\' \'unsafe-inline\'; img-src \'self\' https: data:. Strict mode: avoid unsafe-inline and unsafe-eval (prevents most XSS). Nonce-based: add a random nonce to inline scripts and the CSP header. In Next.js: configure in next.config.js headers() or via middleware. Report-only mode: Content-Security-Policy-Report-Only to test before enforcing. Combine with other security headers: X-Frame-Options, X-Content-Type-Options, HSTS.', difficulty: 'Advanced', category: 'Security' },
  { id: 71, question: 'What is server-sent events (SSE)? When to use it over WebSocket?', answer: 'SSE (Server-Sent Events) is a one-directional real-time protocol (server → client only) over HTTP. Client: const es = new EventSource("/api/events"); es.onmessage = e => setData(JSON.parse(e.data)). Server: stream text/event-stream responses with data: {...}\\n\\n format. Auto-reconnect on disconnect. SSE advantages: simpler than WebSocket (plain HTTP), works with load balancers without sticky sessions, can use HTTP/2 for multiplexing, built-in reconnection. Use SSE for: live notifications, progress updates, news feeds, server push to browser. Use WebSocket for: bidirectional communication (chat, collaborative editing, gaming). Most real-time use cases are one-directional — SSE is sufficient and simpler.', difficulty: 'Advanced', category: 'Real-Time' },
  { id: 72, question: 'What is a fanout pattern in system design?', answer: 'Fanout distributes a message to multiple consumers simultaneously. Example: when a user posts a tweet, Twitter fans out to all followers\' feeds. Two approaches: Fanout-on-write (push): when post is created, write to each follower\'s feed table (fast reads, slow writes, huge storage for popular users). Fanout-on-read (pull): store post once; readers fetch from people they follow sorted by time (fast writes, slow reads for popular feeds). Hybrid: fanout-on-write for regular users; fanout-on-read for celebrities (millions of followers). Implement with Kafka: publish to a topic; multiple consumer groups each get a copy. Message queues (SNS → SQS fan-out) on AWS.', difficulty: 'Advanced', category: 'Distributed Systems' },
  { id: 73, question: 'What is OpenTelemetry? How do you instrument a FastAPI app?', answer: 'OpenTelemetry is a vendor-neutral observability framework for generating traces, metrics, and logs. FastAPI instrumentation: pip install opentelemetry-distro opentelemetry-exporter-otlp; opentelemetry-bootstrap -a install. Configuration: from opentelemetry import trace; from opentelemetry.sdk.trace import TracerProvider; from opentelemetry.sdk.trace.export import BatchSpanProcessor; from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter; provider = TracerProvider(); provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter())); trace.set_tracer_provider(provider). FastAPIInstrumentor().instrument(). Sends traces to Jaeger, Zipkin, or Datadog. Custom spans: with tracer.start_as_current_span("db-query") as span: span.set_attribute("db.query", sql).', difficulty: 'Advanced', category: 'Observability' },
  { id: 74, question: 'How do you handle secrets management in production?', answer: 'Never: hardcode secrets in code, store in .env files in version control, pass as environment variables in Docker images. Do: AWS Secrets Manager or Parameter Store — fetch at runtime via boto3. HashiCorp Vault — centralized secret storage with audit logs, dynamic credentials. Kubernetes Secrets — encrypted at rest in etcd, injected as env vars or mounted as files. Rotation: rotate secrets regularly (Secrets Manager can auto-rotate RDS credentials). Principle of least privilege: each service only accesses its own secrets. IAM roles for EC2/ECS/Lambda — no access keys needed. Audit: log all secret access (Secrets Manager provides CloudTrail integration).', difficulty: 'Advanced', category: 'Security' },
  { id: 75, question: 'What is gRPC? When would you use it in a full-stack architecture?', answer: 'gRPC is a high-performance RPC framework using Protocol Buffers (binary serialization) and HTTP/2. Define service: service UserService { rpc GetUser(GetUserRequest) returns (User) {} }. Generate client/server code in any language. Benefits: 10-15x faster than REST+JSON (binary encoding, HTTP/2 multiplexing), strong typing from .proto file, bidirectional streaming. Use gRPC for: inter-service communication in microservices (not client-facing), high-frequency internal APIs (service A calls service B thousands of times/second). Not for: browser clients (no native gRPC support — use gRPC-Web proxy), or simple CRUD APIs. In full-stack: frontend uses REST/GraphQL; backend services communicate via gRPC.', difficulty: 'Advanced', category: 'APIs' },
  { id: 76, question: 'What is WebAssembly (Wasm)? How can it be used in full-stack development?', answer: 'WebAssembly is a binary instruction format that runs in browsers at near-native speed. Compile C, C++, Rust, Go to Wasm. Use cases: compute-intensive tasks in browser (image processing, video codecs, cryptography, scientific computing, game engines), running server-side languages in edge compute. Full-stack uses: 1) Client-side: run Python or Rust in browser (Pyodide runs Python in browser via Wasm). 2) Edge compute: Cloudflare Workers supports Wasm. 3) Plugin systems: safely run user-provided code in a sandbox. Wasm doesn\'t replace JavaScript — it complements it for CPU-intensive tasks. Not useful for typical CRUD web app frontend.', difficulty: 'Advanced', category: 'Advanced Technologies' },
  { id: 77, question: 'What is a BFF (Backend For Frontend)?', answer: 'BFF is a dedicated backend service for each frontend (web, mobile, TV app). Instead of one generic API, each frontend has a tailored API. Example: Web BFF aggregates product + reviews + recommendations in one call (desktop has space for all). Mobile BFF returns minimal data (battery/bandwidth constrained). Benefits: frontend-specific optimization (aggregation, field selection), faster development (each team controls their BFF), API evolution without breaking other frontends. Pattern: BFF calls microservices internally, aggregates, and returns optimized response. GraphQL is sometimes used as a "universal BFF" where clients query exactly what they need. Common in Netflix, SoundCloud architectures.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 78, question: 'What is edge computing? How does it affect full-stack architecture?', answer: 'Edge computing runs code geographically close to users (CDN edge nodes, not central servers). Tools: Cloudflare Workers (V8 isolates, runs globally on 200+ edge nodes), AWS Lambda@Edge, Vercel Edge Functions. Use cases: A/B testing at edge (personalize response before serving), authentication (validate JWT at edge, no origin hit), geolocation-based routing, request transformation (headers, redirects), rate limiting at edge. Benefits: ultra-low latency (runs in the user\'s country), reduces load on origin servers. Limitations: no persistent connections, limited runtime (no Node.js stdlib), cold starts. In full-stack: middleware (Next.js) runs at edge — great for auth, redirects, personalization.', difficulty: 'Advanced', category: 'Infrastructure' },
  { id: 79, question: 'What is feature flagging? How do you implement it?', answer: 'Feature flags control feature availability without code deployment. Types: release flags (new features off by default, enable per user/group), experiment flags (A/B testing), ops flags (kill switch for problematic features), permission flags (premium features for paid users). Implementation: 1) Simple: check environment variable or DB config. 2) Full solution: LaunchDarkly, Unleash (open-source), or PostHog flags. Pattern: if feature_flags.is_enabled("new_checkout", user): return new_checkout() else: return old_checkout(). Evaluate flags client-side (faster) or server-side (more control, no flag leakage). Use feature flags to separate deployment from release — deploy code safely behind a flag, enable when ready.', difficulty: 'Advanced', category: 'Architecture' },
  { id: 80, question: 'How do you build a full-stack app for Indian markets with local compliance?', answer: 'Key considerations: 1) Data residency: RBI mandates payment data stored in India — use AWS ap-south-1 (Mumbai) for all payment-related data. 2) Payments: Razorpay, PayU, PhonePe integrate UPI, Net Banking, Cards, EMI for Indian consumers. 3) GST: calculate GST (18% for SaaS) on invoices. 4) Bandwidth: optimize for 4G (compress, lazy load, service workers for offline). 5) Currency: store in paise (integer) not rupees (float). 6) SMS: use Twilio, MSG91, or Exotel for SMS OTP (TRAI mandates sender ID registration). 7) Telephony: Exotel for call center integration. 8) Language: i18n for Hindi and regional languages. 9) KYC: Aadhaar/PAN verification via Setu or Signzy APIs. 10) Invoicing: comply with GST E-invoice requirements for B2B.', difficulty: 'Advanced', category: 'Compliance' },

  // ── SCENARIO (10) ─────────────────────────────────────────
  { id: 81, question: 'Scenario: You are building a SaaS product alone. What tech stack would you choose and why?', answer: 'Backend: FastAPI (Python, async, fast to develop, great DX). Database: PostgreSQL (reliable, full-featured, great for SaaS). Cache: Redis (caching, sessions, queues). Auth: Supabase Auth or custom JWT. Frontend: Next.js + Tailwind (SSR for SEO, fast development). State: React Query + Zustand. Background jobs: Celery + Redis. Email: Resend or SendGrid. Storage: S3. Payments: Razorpay. Monitoring: Sentry + Grafana (Grafana Cloud free tier). Deployment: Railway or Fly.io for quick launch; migrate to AWS ECS when scaling. Rationale: Python + FastAPI is fast to develop for solo developer; PostgreSQL handles all data needs; Next.js handles SEO and performance. Avoid microservices early — modular monolith is sufficient.', difficulty: 'Scenario', category: 'Architecture' },
  { id: 82, question: 'Scenario: A client\'s website is down. Walk me through how you diagnose it.', answer: 'Step 1: Check monitoring dashboard (Grafana, CloudWatch) for alerts. Step 2: Check if it\'s DNS (nslookup domain.com — does it resolve?). Step 3: Check if server is responding (curl -I https://domain.com). Step 4: SSH to server, check processes (ps aux | grep gunicorn). Step 5: Check error logs (journalctl -u gunicorn, /var/log/nginx/error.log). Step 6: Check disk space (df -h) — full disk causes write failures. Step 7: Check database connectivity (psql -U user -d db -h host). Step 8: Check Redis (redis-cli ping). Step 9: Check recent deployments (git log, deployment history). Step 10: Check upstream dependencies (payment gateway, email service). Restore first (rollback if recent deploy), investigate root cause after.', difficulty: 'Scenario', category: 'Operations' },
  { id: 83, question: 'Scenario: How would you add real-time notifications to an existing full-stack app?', answer: 'Options based on complexity: SSE (simplest): FastAPI streams events; React EventSource consumes. Good for server-push notifications. WebSocket (bidirectional): Django Channels or FastAPI WebSocket. More complex, needed if client also sends messages. Implementation plan: 1) Backend: POST /api/notifications → store in DB + publish to Redis Pub/Sub channel. 2) WebSocket server: subscribe to Redis channel, forward to connected users. 3) Frontend: connect to WS on mount, display notifications via toast or notification bell. 4) Persistence: list old notifications from DB. 5) Read receipts: mark as read via API. For scale: use Pusher or Ably (managed WebSocket) to avoid maintaining WS infrastructure.', difficulty: 'Scenario', category: 'Real-Time' },
  { id: 84, question: 'Scenario: How would you migrate a monolith from Python 2 to Python 3?', answer: 'Step 1: Understand scope — what Python 2-only code exists? Run 2to3 tool to see automated changes. Step 2: Add compatibility shims (six, future library) to run on both — incremental migration. Step 3: Fix print statements → print(), unicode/str handling (biggest change), integer division, relative imports, exception syntax. Step 4: Test suite — run on Python 3, fix failures. Step 5: Update dependencies — check PyPI for Python 3 compatible versions; many packages dropped Python 2 support. Step 6: CI: run tests on both Python 2 and 3. Step 7: Deploy to Python 3. Step 8: Remove Python 2 compatibility code. Expect 1-2 months for a large codebase.', difficulty: 'Scenario', category: 'Legacy Migration' },
  { id: 85, question: 'Scenario: How would you scale a full-stack application from 100 to 100,000 daily users?', answer: 'At 100 users: single server, no optimization needed. 100→1,000: add Redis caching, profile and fix slow queries, add indexes. 1,000→10,000: horizontal scaling (multiple API servers behind load balancer), PostgreSQL read replicas, CDN for static assets, background jobs for heavy work. 10,000→50,000: database connection pooling (PgBouncer), query optimization, consider database partitioning, full-text search (Elasticsearch). 50,000→100,000: cache aggressively (Redis), async where possible, consider database sharding or moving to managed DB (RDS), autoscaling (Kubernetes HPA). At each stage: measure before optimizing. Premature optimization wastes time. Use APM (DataDog, New Relic) to find real bottlenecks.', difficulty: 'Scenario', category: 'Scalability' },
  { id: 86, question: 'Scenario: How would you debug a memory leak in a full-stack Node.js application?', answer: 'Symptoms: memory usage grows indefinitely, eventually causing OOM crashes. Tools: Node.js --inspect flag + Chrome DevTools Memory tab. Steps: 1) Take heap snapshot at startup. 2) Run under load. 3) Take another snapshot. 4) Compare — look for objects that grew (closures, event listeners, caches without limits). Common causes: event listeners not removed, global caches growing unbounded, circular references, timers not cleared, long-lived closures capturing large data. Fix: WeakMap for caches (allows GC), removeEventListener in cleanup, clear timeouts, bound cache size (LRU cache). In production: use clinic.js (clinic flame, clinic heapprofile) for non-intrusive profiling.', difficulty: 'Scenario', category: 'Debugging' },
  { id: 87, question: 'Scenario: How would you implement a feature that sends 1 million emails in 24 hours?', answer: 'Don\'t: loop and send synchronously — too slow, crashes. Plan: 1) Batch: select users in chunks of 1000. 2) Queue: enqueue each batch as a Celery task. 3) Workers: 10-20 Celery workers process batches concurrently. 4) Email provider: AWS SES or SendGrid with high-throughput tier (both handle millions/day). 5) Rate limiting: respect provider rate limits (SES = 14 emails/sec per account in Mumbai region, increase via quota request). 6) Tracking: log sent_at per user, retry failed batches. 7) Unsubscribe: check unsubscribe list before sending. 8) Bounce handling: process bounces/complaints via SES SNS webhook. 1M / 24 hours = ~11.6/sec — achievable with 2-3 SES workers.', difficulty: 'Scenario', category: 'Architecture' },
  { id: 88, question: 'Scenario: How would you design the data model for a multi-tenant EdTech platform?', answer: 'Entities: Tenant (college/organization), User (instructor, student), Course, Enrollment, Lesson, Quiz, QuizAttempt, Certificate. Tenant isolation: all tables have tenant_id column; custom manager always filters by tenant. Auth: JWT contains tenant_id; middleware injects into all requests. Custom subdomains: college1.arivuon.academy → tenant_id resolved by middleware. Shared resources: some courses may be global (not tenant-specific) — tenant_id nullable. Pricing: tenant-level subscription (seats, features). Analytics: per-tenant reporting (student completion rates, quiz scores). Indexes: compound (tenant_id, created_at), (tenant_id, user_id) on all major tables. RLS (Row Level Security) in PostgreSQL as an additional safety layer.', difficulty: 'Scenario', category: 'Architecture' },
  { id: 89, question: 'Scenario: How would you implement a global search across multiple data types?', answer: 'Search across posts, users, courses, and products. Approaches: 1) Elasticsearch with multiple indices: search each index, merge results by score. 2) PostgreSQL FTS: cross-table UNION query (works up to ~5M rows). 3) Algolia: separate index per type, query all, merge. Implementation: Elasticsearch unified index with type field: {type: "post", title: "...", body: "...", tags: [...]}. Multi-match query across fields. Result: {type: "post", id: 1, title: "...", snippet: "..."}. Frontend: display type icon, route to /posts/1 or /courses/1. Ranking: boost title matches over body. Filters: filter by type, date range. Sync: Celery + post_save signal keeps index current.', difficulty: 'Scenario', category: 'Search' },
  { id: 90, question: 'Scenario: Design a full-stack feature for exporting large reports (100k+ rows).', answer: 'Synchronous: won\'t work — HTTP times out for large queries. Async export pattern: 1) User requests export: POST /api/reports/export → {job_id: "abc123"}, returns immediately. 2) Celery task: query DB in chunks (10k rows/chunk), write to S3 as CSV/Excel. 3) Polling or WebSocket: GET /api/jobs/abc123 → {status: "processing", progress: 45} or WebSocket push. 4) Completion: job_status=done, s3_url=presigned URL valid for 1 hour. 5) Email: send download link when complete. Frontend: show progress bar during processing, download button when done. Streaming alternative (for medium reports): FastAPI StreamingResponse writes CSV to response as it queries. For Excel: openpyxl in memory, stream via StreamingResponse.', difficulty: 'Scenario', category: 'Architecture' },

  // ── SYSTEM DESIGN (10) ────────────────────────────────────
  { id: 91, question: 'System Design: Design a full-stack Uber-like ride-sharing app.', answer: 'Frontend: React Native (iOS + Android). Backend: microservices (User, Ride, Driver, Payment, Notification). Real-time: WebSocket for driver-user location updates, ride status. Location: drivers publish GPS every 2s to Redis Geo data structure (GEOADD). Matching: on ride request, GEORADIUS to find nearest drivers, rank by distance. Ride flow: RequestRide → MatchDriver → DriverAccepts → PickupConfirmed → RideStarted → RideCompleted → Payment. Payment: Razorpay with retry. Surge pricing: calculated from demand/supply ratio in grid cell. Maps: Google Maps API or MapMyIndia for India. Notifications: FCM push (driver → accept/decline), SMS (ride confirmed). Rating: post-ride rating for driver and passenger.', difficulty: 'System Design', category: 'System Design' },
  { id: 92, question: 'System Design: Design a full-stack food delivery platform.', answer: 'Entities: Restaurant, Menu, MenuItem, Order, OrderItem, Delivery Agent, Customer. Services: Catalog (restaurant search, menu), Order Management, Delivery Tracking, Payment, Notification. Order flow: browse menu → add to cart (local state) → checkout → payment → order confirmed → agent assigned → pickup → delivery → complete. Real-time: customer tracks agent on map (WebSocket). Restaurant dashboard: new order alert, accept/reject. Delivery assignment: find nearby available agents (Redis Geo), assign closest. ETA: Google Maps Distance Matrix API. Catalog search: Elasticsearch for restaurant/dish search. Payment: Razorpay with COD support. Notifications: push + SMS. Analytics: daily GMV, order success rate, agent utilization.', difficulty: 'System Design', category: 'System Design' },
  { id: 93, question: 'System Design: Design a full-stack EdTech platform like Coursera.', answer: 'Features: course catalog, video lessons, quizzes, progress tracking, certificates, instructor dashboard, student enrollment. Architecture: Next.js frontend + FastAPI/Django backend. Video: store in S3, transcode via AWS MediaConvert (multiple qualities), stream via CloudFront + HLS. DRM: protect premium content. Progress: track lesson completion (API call on video completion event). Quizzes: timed, auto-graded, multiple attempts. Certificates: generate PDF (WeasyPrint) after completion, verify via unique URL. Search: Algolia for course discovery. Recommendations: collaborative filtering (what similar users enrolled in). Mobile: React Native with offline video download. Payments: subscription (Razorpay recurring) or per-course purchase. Analytics: instructor revenue dashboard, enrollment funnel.', difficulty: 'System Design', category: 'System Design' },
  { id: 94, question: 'System Design: Design a URL shortener with analytics.', answer: 'Core: shorten long URL, redirect, track clicks. Models: ShortLink(id, short_code, long_url, user, created_at, expiry, is_active). Click(link, timestamp, ip, user_agent, country, referrer). API: POST /shorten {url, custom_alias?, expiry?} → {short_url: "sho.rt/abc123"}. GET /{code} → 301 redirect. Short code: base62 encode incrementing ID (collision-free) or random nanoid. Redirect: cache code → URL in Redis (TTL matching expiry). Analytics: POST click event to Kafka on each redirect, consumer writes to ClickHouse. Dashboard: clicks per day, country breakdown, referrer analysis, unique visitors (HyperLogLog in Redis). Custom domains: match Host header to tenant for branded short links. QR code: generate on demand from short URL.', difficulty: 'System Design', category: 'System Design' },
  { id: 95, question: 'System Design: Design a full-stack SaaS HRMS platform.', answer: 'Modules: Employee Management, Attendance, Leave, Payroll, Onboarding, Performance. Multi-tenancy: tenant per organization, shared schema with tenant_id. Employee: profile, documents, org hierarchy. Attendance: biometric device API integration, check-in/out with photo. Leave: request → manager approval → HR approval workflow, balance tracking. Payroll: monthly run, salary components (CTC breakdown), tax calculation (Indian TDS), payslip PDF generation, bank transfer file (NEFT format). Onboarding: task checklist, document collection, IT provisioning tickets. Reports: headcount by department, attendance %, leave utilization. Integrations: Tally (accounting), EPFO/ESIC (government compliance). Notifications: email + SMS for approvals, payslip. Mobile: employee self-service (leave, attendance, payslip).', difficulty: 'System Design', category: 'System Design' },
  { id: 96, question: 'System Design: Design a full-stack real estate listing platform.', answer: 'Entities: Property(title, description, type, price, location, area, amenities, images), Agent, User, SavedSearch, Inquiry. Search: Elasticsearch with geo_point for location-based search. Filters: price range, BHK, area, amenities. Map view: Mapbox or Google Maps with property markers. Images: S3 + CloudFront, multiple sizes (thumbnail, medium, full). Virtual tour: 360 images or video embed. Lead management: inquiry form → notify agent (email + SMS). Saved searches: user saves filter, get notified on new matching property. Price analytics: historical price charts per locality. Agent dashboard: listing performance, inquiry tracking. SEO: SSG for property pages (Next.js getStaticProps + ISR for price updates). Mortgage calculator: client-side calculation.', difficulty: 'System Design', category: 'System Design' },
  { id: 97, question: 'System Design: Design a full-stack appointment booking system.', answer: 'Use case: doctor, salon, or consultant booking. Entities: Provider, Service, TimeSlot, Appointment, Review. Availability: provider sets working hours + breaks. Time slots: generated from availability, marked available/booked. Booking: SELECT slot with lock → check availability → create appointment → confirm. Concurrency: optimistic locking or SELECT ... FOR UPDATE to prevent double booking. Reminders: Celery Beat sends SMS/email 24h and 1h before appointment. Cancellation: cancel with policies (full refund if >24h, no refund within 2h). Waitlist: notify waitlisted users if a slot opens. Calendar sync: iCal export, Google Calendar API push. Mobile app: push notifications for confirmations and reminders. Analytics: booking rate, no-show rate, revenue per provider.', difficulty: 'System Design', category: 'System Design' },
  { id: 98, question: 'System Design: Design a full-stack multi-player quiz app.', answer: 'Quiz flow: host creates room → share room code → players join → host starts → questions broadcast → players answer → scores updated → leaderboard. Real-time: WebSocket (Django Channels or Socket.io). Room: Redis stores room state (players, current question, scores). Timing: server authoritative timer — broadcast countdown over WS. Answer submission: player clicks within time limit, server validates and updates score. Leaderboard: real-time score updates broadcast to all players. Questions: pre-loaded, shown one by one with timer. Reconnect: player can rejoin with room code (state in Redis). Large scale: if 10,000 concurrent rooms × 10 players, WS server needs to be horizontally scaled with Redis Pub/Sub for room channel coordination. Anti-cheat: server-side answer validation, client never sees answers.', difficulty: 'System Design', category: 'System Design' },
  { id: 99, question: 'System Design: Design a full-stack inventory management system.', answer: 'Entities: Product, Warehouse, InventoryLevel(product, warehouse, quantity), PurchaseOrder, SalesOrder, Transfer, StockAdjustment. Stock operations: always use database-level operations (UPDATE SET quantity = quantity - N WHERE quantity >= N) to prevent negative stock. Transactions: each stock movement wrapped in a transaction. Alerts: low stock notifications (Celery checks daily, or trigger on each sale). Reports: inventory valuation, stock turnover, dead stock. Barcodes: scan via ZXing (mobile) or USB scanner. PO workflow: create PO → approve → receive (update inventory). Multi-warehouse: transfer stock between warehouses. Audit trail: every inventory change logged (who, what, when, why). Integration: connect to billing/invoicing system.', difficulty: 'System Design', category: 'System Design' },
  { id: 100, question: 'System Design: Design a full-stack social networking platform.', answer: 'Core features: profiles, posts, follow/friends, feed, messages, notifications, groups. Feed: follow-based, algorithm-ranked. Timeline delivery: fanout on write for regular users, fanout on read for celebrities. Graph: Neo4j or denormalized following table (user_id, follows_id). Feed ranking: engagement score (likes, comments, shares, recency). Posts: text, images (S3), video (S3+transcode). Reactions: emoji reactions on posts. Comments: threaded. Messages: DM via WebSocket. Search: Elasticsearch for users and posts. Notifications: WebSocket + push. Content moderation: ML-based automated flagging + human review queue. Privacy: post visibility (public, friends, private). Verification: blue tick for verified accounts. Trending: sliding window counter per hashtag in Redis.', difficulty: 'System Design', category: 'System Design' },
    ],
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
