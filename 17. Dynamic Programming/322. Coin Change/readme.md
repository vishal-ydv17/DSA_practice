# LeetCode Solution: Coin Change

## Problem

📋 **322. Coin Change**

Check out the problem description on LeetCode:

👉 [https://leetcode.com/problems/coin-change/description/](https://leetcode.com/problems/coin-change/description/)

## My Solution

💡 **Detailed explanation with examples**

Read my complete solution on LeetCode:

👉 [https://leetcode.com/problems/coin-change/solutions/8489920/3-easy-sol-with-logic-explaination-in-si-joyj/](https://leetcode.com/problems/coin-change/solutions/8489920/3-easy-sol-with-logic-explaination-in-si-joyj/)

## Quick Overview

* **Problem Type**: Dynamic Programming, Array

* **Difficulty**: Medium

* **Key Concept**: Dynamic Programming & Bottom-Up Approach

* **Solution**: Use a DP array where `dp[i]` represents the minimum number of coins needed to make amount `i`. Initialize the values with `amount + 1` and set `dp[0] = 0`. For every amount, try each coin and update the minimum using `dp[i] = min(dp[i], dp[i - coin] + 1)`. If `dp[amount]` remains greater than `amount`, return `-1`.

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
