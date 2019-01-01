# React Visible

A React component designed to control if children are rendered, therefore their visibility. Probably the simplest component in the world.

[![npm version](https://badge.fury.io/js/react-visible.svg)](https://www.npmjs.com/package/react-visible)
[![Dependency Status](https://david-dm.org/timreynolds/react-visible.svg)](https://david-dm.org/timreynolds/react-visible)
[![devDependency Status](https://david-dm.org/timreynolds/react-visible/dev-status.svg)](https://david-dm.org/timreynolds/react-visible#info=devDependencies)
[![Build Status](https://travis-ci.org/timReynolds/react-visible.svg?branch=master)](https://travis-ci.org/timReynolds/react-visible)
[![Coverage Status](https://coveralls.io/repos/github/timReynolds/react-visible/badge.svg?branch=master)](https://coveralls.io/github/timReynolds/react-visible?branch=master)

## Example

```
import Visible from "react-visible";

…

<Visible isVisible={true}>
	You can see me, my children are rendered
</Visible>

<Visible isVisible={false}>
	You can’t see me, isn’t this nicer than doing it yourself with an if false render noscript statement
</Visible>
```

## React support

For older versions of react please see previous versions of this library.
