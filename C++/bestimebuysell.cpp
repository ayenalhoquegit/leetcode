#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int>prices={8,7,6,4};
    int minIndex=0,temp=0,maxSellIndex=0;
    for(int i=0;i<prices.size();i++){
        if(prices[minIndex]>prices[i])
         minIndex=i;
        //cout<<prices[i]<<endl;
    }
    temp=minIndex;
    for(int i=minIndex+1;i<=prices.size();i++){
        if(prices[temp]<prices[i]){
            maxSellIndex=i+1;
            temp=i;
        }

    }

    cout<<"Max sell day is : "<<maxSellIndex;

    return 0;
}
