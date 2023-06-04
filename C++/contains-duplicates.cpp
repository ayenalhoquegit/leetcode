#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int>nums={1,3,2,3};
     unordered_set<int> nums_set(nums.begin(), nums.end());
     bool containsDuplicate = nums_set.size()!=nums.size();

    cout<<"Contains duplicate  : "<<containsDuplicate;


    return 0;
}


