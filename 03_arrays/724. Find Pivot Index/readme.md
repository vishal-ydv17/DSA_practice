# LeetCode Solution: Find Pivot Index

## Problem  
📋 **724. Find Pivot Index**  
Check out the problem description on LeetCode:  
👉 https://leetcode.com/problems/find-pivot-index/?source=submission-ac

## My Solution  
💡 **Detailed explanation with examples**  
Read my complete solution on LeetCode:  
👉 https://leetcode.com/problems/find-pivot-index/solutions/7384124/very-simple-sol-with-logic-explaination-t8kkh/?source=submission-ac

## Quick Overview
- **Problem Type**: Array, Prefix Sum  
- **Difficulty**: Easy  
- **Key Concept**: Prefix sum to track left & right sums  
- **Solution Summary**:  
  Use a running total to compute the left sum, then the right sum is `totalSum - leftSum - currentValue`.  
  At each index check if `leftSum == rightSum`.  
  Return the first such index or `-1` if none found.

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 **Email:** [vishalyadavy0022@gmail.com](mailto:vishalyadavy0022@gmail.com)  
> 💼 **Portfolio:** [GitHub Profile](https://github.com/vishal-ydv17)  
> 🔗 **LinkedIn:** [linkedin.com/in/vishal-ydv17](https://linkedin.com/in/vishal-ydv17)  
> 🐦 **Twitter:** [x.com/vishal_ydv17](https://x.com/vishal_ydv17)
