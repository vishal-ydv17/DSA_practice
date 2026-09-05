```md
# LeetCode Solution: Set Mismatch

## Problem  
📋 **645. Set Mismatch**  
Check out the full problem on LeetCode:  
👉 https://leetcode.com/problems/set-mismatch/description/

## My Solution  
💡 **Very easy solution with logic explained**  
Read the complete explanation here:  
👉 https://leetcode.com/problems/set-mismatch/solutions/7373620/very-easy-sol-with-logic-explaination-by-4w4m/

---

## Quick Overview  
- **Problem Type:** Array, Hashing  
- **Difficulty:** Easy  
- **Key Concept:** Find the duplicate and missing number using sum / set or counting  
- **Solution:**  
  1. Traverse the array once, track numbers seen (e.g., using a set)  
  2. While iterating, if you encounter a number already in the set, that’s the **duplicate**  
  3. Also compute the expected sum of numbers from 1 to _n_ and subtract the actual sum to find the **missing** number (or use sum of set to help)  
  4. Return both as `[duplicate, missing]`

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 Email: vishalyadavy0022@gmail.com  
> 💼 Portfolio: https://github.com/vishal-ydv17  
> 🔗 LinkedIn: https://linkedin.com/in/vishal_ydv17  
> 🐦 Twitter: https://x.com/vishal_ydv17  
```
