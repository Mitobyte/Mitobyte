# Mitobyte

This repo uses volta to set node and npm. Configure it here: https://docs.volta.sh/guide/getting-started

Make sure the following 2 lines are in your .zshrc file
```
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

If first time opening...
```
npm install
```

To start local
```
npm run dev
```

If you run into a husky issue or commit issues try doing the following
```
npx husky init
npx husky install
```

This repo uses conventional commmits: https://www.conventionalcommits.org/en/v1.0.0/

You can view valid commit prefixes here:
[text](commitlint.config.js)
