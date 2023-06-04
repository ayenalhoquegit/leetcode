#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int>nums = {4,1,2,3,1,5};
    int k = 3;
    int index = 0;
    bool found = false;
    for(int i=1;i<nums.size();i++){
        if(nums[index]==nums[i]){
           if(i-index<=k){
            cout<<"okay";
            found=true;
            break;
           }else{
               index=i;
           }
        }
    }

    cout<<"Found = "<<found;

    return 0;
}
