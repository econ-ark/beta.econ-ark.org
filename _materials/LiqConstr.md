---
name: LiqConstr
summary: 'Liquidity Constraints and Precautionary Saving'
type: replication
is_notebook: false
published:
authors:
  - Christopher Carroll
tags:
  - Replication
location_url: https://github.com/llorracc/LiqConstr/tree/01253c2e57b2278c41b6a9a01e61a666edcc5239
github_user: llorracc
github_repository: LiqConstr
github_branch:
github_path:
---

Liquidity Constraints and Precautionary Saving

The [LiqConstr REMARK](https://github.com/econ-ark/REMARK/REMARKs/LiqConstr) contains
code to reproduce the figures of the paper [Liquidity Constraints and Precautionary Saving](http://econ.jhu.edu/people/ccarroll/papers/LiqConstr/) by Carroll, Holm, and Kimball.

## Code

Figures can be produced either:

1. Live in your (Chrome) browser using [MyBinder](https://mybinder.org): [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/econ-ark/REMARK/master?filepath=REMARKs%2FLiqConstr%2FLiqConstr.ipynb)
1. By:
   - Installing the [econ-ark](https://github.com/econ-ark) toolkit:
     `pip install econ-ark`
   - Cloning or downloading the [REMARK](https://github.com/econ-ark/REMARK) repo
   - Running the file `do_all.py` or `LiqConstr.py`:
     `ipython LiqConstr.py`

## Paper

The paper can be generated by compiling the LaTeX file `LiqConstr.tex` using a standard
distribution of LaTeX like TeXLive or Overleaf.
