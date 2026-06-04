import os
import re
import json

root = os.path.join(os.getcwd(), "src")
imported = set()
for dirpath, dirs, files in os.walk(root):
    for f in files:
        if f.endswith((".ts", ".tsx", ".js", ".jsx")):
            path = os.path.join(dirpath, f)
            with open(path, "r", encoding="utf-8") as fh:
                text = fh.read()
            for m in re.finditer(r"(?:from\s+|import\s+[\s\S]*?['\"])([^'\"\s;]+)|require\(['\"]([^'\"]+)['\"]\)", text):
                pkg = m.group(1) or m.group(2)
                if pkg and not pkg.startswith('.'):
                    imported.add(pkg)

with open('package.json', 'r', encoding='utf-8') as fh:
    pkg = json.load(fh)

deps = list(pkg.get('dependencies', {}).keys()) + list(pkg.get('devDependencies', {}).keys())
used = sorted(imported)
unused = [d for d in deps if not any(u == d or u.startswith(d + '/') for u in imported)]
print(json.dumps({'used': used, 'unused': unused}, indent=2))
