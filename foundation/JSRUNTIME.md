# JS Runtime

JS runtime is single threaded i.e., it can only execute one thing at a time. Of course there are web API's (C++ APIs in Node) that can also do work as well. JS engine can allocate work over to web APIs that run concurrently with the main thread. Once work is complete, the APIs will send the data or tasks into the main thread.
