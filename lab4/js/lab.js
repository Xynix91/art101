// This file is purely pseudocode detailing the Merge Sort algorithm.
//
// @author Hazel Prasetya
// @since  10/13/2021

// 1. Check if the list has a length of one.
    // a. If not, divide the list into two.
    // b. Repeat steps 1 and 1a for each individual list.
// 2. We should have many separate lists of length one that are sorted (since all lists of length one are sorted). Recombine the lists as they were divided using a merging algorithm.
    // a. Set a pointer at the beginning of each of the two lists.
    // b. Compare the values the pointers are pointing to.
        // i.  Add the smaller value to the completed list.
        // ii. Increment that pointer by one.
    // c. Repeat step 2b until a pointer exceeds the end of its list.
    // d. Add the remaining values of the other list to the completed list.
// 3. Repeat step 2 until we only have one list remaining.
