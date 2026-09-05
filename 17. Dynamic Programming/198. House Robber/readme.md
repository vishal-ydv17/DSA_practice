# LeetCode Solution: House Robber

## Problem

📋 **198. House Robber**

Check out the problem description on LeetCode:

👉 [https://leetcode.com/problems/house-robber/description/](https://leetcode.com/problems/house-robber/description/)

## My Solution

💡 **Detailed explanation with examples**

Read my complete solution on LeetCode:

👉 [https://leetcode.com/problems/house-robber/solutions/8488218/3-easy-sol-with-logic-explaination-in-si-ylsq/](https://leetcode.com/problems/house-robber/solutions/8488218/3-easy-sol-with-logic-explaination-in-si-ylsq/)

## Submission

Check out my accepted submission on LeetCode:

👉 [https://leetcode.com/problems/house-robber/submissions/2123326383/](https://leetcode.com/problems/house-robber/submissions/2123326383/)

## Quick Overview

* **Problem Type**: Dynamic Programming, Array

* **Difficulty**: Medium

* **Key Concept**: Dynamic Programming & Maximum Sum

* **Solution**: At each house, choose between robbing the current house or skipping it. If we rob the current house, we add its money to the maximum amount from two houses before. Otherwise, we keep the maximum amount from the previous house. This gives the recurrence `dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])`. The solution can be optimized to **O(1) space** by keeping only the previous two results.

**Visit the links above to see the full problem statement and my detailed solution!** 🚀

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 **Email:** [vishalyadavy0022@gmail.com](mailto:vishalyadavy0022@gmail.com)
>
> 💼 **GitHub:** [GitHub Profile](https://github.com/vishal-ydv17)
>
> 🔗 **LinkedIn:** [LinkedIn Profile](https://linkedin.com/in/vishal-ydv17)
>
> 🐦 **Twitter:** [x.com/vishal_ydv17](https://x.com/vishal_ydv17)
