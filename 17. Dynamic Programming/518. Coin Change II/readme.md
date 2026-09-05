# LeetCode Solution: Coin Change II

## Problem

📋 **518. Coin Change II**

Check out the problem description on LeetCode:

👉 [https://leetcode.com/problems/coin-change-ii/](https://leetcode.com/problems/coin-change-ii/)

## My Solution

💡 **Detailed explanation with examples**

Read my complete solution on LeetCode:

👉 [https://leetcode.com/problems/coin-change-ii/solutions/8496007/3-easy-sol-with-logic-explaination-in-si-ee4p/](https://leetcode.com/problems/coin-change-ii/solutions/8496007/3-easy-sol-with-logic-explaination-in-si-ee4p/)

## Quick Overview

* **Problem Type**: Dynamic Programming, Array

* **Difficulty**: Medium

* **Key Concept**: Unbounded Knapsack & 1D Dynamic Programming

* **Solution**: Use a DP array where `dp[j]` represents the number of ways to make amount `j`. Initialize `dp[0] = 1` because there is one way to make amount `0` by choosing no coins. For each coin, update the amounts from left to right using `dp[j] += dp[j - coin]`, allowing each coin to be used multiple times while counting each combination only once.

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
