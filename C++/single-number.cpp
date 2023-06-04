#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int>nums={8,7,8,1,1,2,2};
    int singleNumber=0; bool dublicateCheck;
    for(int i=0;i<nums.size();i++){
       singleNumber=nums[i];
       dublicateCheck=false;
       if(singleNumber!='_'){
        for(int j=i+1;j<nums.size();j++){
            if(nums[j]==singleNumber){
                dublicateCheck=true;
                nums[j]='_';
            }
        }
        cout<<"check status"<<dublicateCheck<<endl;
        if(!dublicateCheck){
            break;
        }
       }


    }
    if(!dublicateCheck){
        cout<<"Single number is : "<<singleNumber;
    }else{
        cout<<"single number is : 0";
    }

    return 0;
}

