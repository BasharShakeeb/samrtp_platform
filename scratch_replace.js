const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) walk(dirPath, callback);
    else callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Backgrounds
  content = content.replace(/dark:bg-\[\#1e293b\]/g, 'dark:bg-card');
  content = content.replace(/dark:bg-slate-900\/50/g, 'dark:bg-background/50');
  content = content.replace(/dark:bg-slate-900/g, 'dark:bg-background');
  content = content.replace(/dark:bg-slate-950/g, 'dark:bg-background');
  content = content.replace(/dark:bg-slate-800\/50/g, 'dark:bg-muted/50');
  content = content.replace(/dark:bg-slate-800\/20/g, 'dark:bg-muted/20');
  content = content.replace(/dark:bg-slate-800/g, 'dark:bg-muted');
  content = content.replace(/dark:bg-slate-700/g, 'dark:bg-muted');
  
  // Borders
  content = content.replace(/dark:border-slate-800\/50/g, 'dark:border-border/50');
  content = content.replace(/dark:border-slate-800/g, 'dark:border-border');
  content = content.replace(/dark:border-slate-700\/50/g, 'dark:border-border/50');
  content = content.replace(/dark:border-slate-700/g, 'dark:border-border');
  
  // Texts
  content = content.replace(/dark:text-slate-200/g, 'dark:text-foreground');
  content = content.replace(/dark:text-slate-300/g, 'dark:text-foreground/90');
  content = content.replace(/dark:text-slate-400/g, 'dark:text-muted-foreground');
  content = content.replace(/dark:text-slate-500/g, 'dark:text-muted-foreground/70');
  
  // Hovers
  content = content.replace(/dark:hover:bg-slate-800\/50/g, 'dark:hover:bg-muted/50');
  content = content.replace(/dark:hover:bg-slate-800/g, 'dark:hover:bg-muted');
  content = content.replace(/dark:hover:bg-slate-700/g, 'dark:hover:bg-muted');
  content = content.replace(/dark:hover:text-slate-200/g, 'dark:hover:text-foreground');
  
  // Rings
  content = content.replace(/dark:ring-\[\#1e293b\]/g, 'dark:ring-card');
  content = content.replace(/dark:ring-slate-800/g, 'dark:ring-border');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  }
}

walk('d:/systemPLAT2/app', processFile);
walk('d:/systemPLAT2/components', processFile);
