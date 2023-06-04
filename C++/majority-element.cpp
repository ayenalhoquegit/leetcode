#include<bits/stdc++.h>
using namespace std;

int main(){
    vector<int>nums={1,2,2,1,1,1,2,2,5,6,1,5,1,1};
    int candidate=0,vote=0;
    for(int i=0;i<nums.size();i++){
        if(vote==0){
            candidate=nums[i];
            vote=1;
        }else{
            if(candidate==nums[i]){
                vote++;
            }else{
                vote--;
            }
        }

    }
    cout<<"candidate : "<<candidate<<endl;

}
