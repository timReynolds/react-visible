React Visible
=========================

A React component designed to control if children are rendered, therefore their visibility. Probably the simplest component in the world. 

[![Dependency Status](https://david-dm.org/timreynolds/react-visible.svg)](https://david-dm.org/timreynolds/react-visible)
[![devDependency Status](https://david-dm.org/timreynolds/react-visible/dev-status.svg)](https://david-dm.org/timreynolds/react-visible#info=devDependencies)
[![Build Status](https://travis-ci.org/timReynolds/react-visible.svg?branch=master)](https://travis-ci.org/timReynolds/react-visible)
[![Coverage Status](https://coveralls.io/repos/github/timReynolds/react-visible/badge.svg?branch=master)](https://coveralls.io/github/timReynolds/react-visible?branch=master)

## Example 

```
import Visible from ‘react-visible’;

…

<Visible isVisible={true}>
	You can see me, my children are rendered 
</Visible>

<Visible isVisible={false}>
	You can’t see me, isn’t this nicer than doing it yourself with an if false render noscript statement
</Visible>
```

## Notes 
If isVisible is set to false renders noscript tag rather than null due to lack of support for returning null from a stateless function in react 0.14.x.
