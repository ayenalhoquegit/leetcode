#include <bits/stdc++.h>
using namespace std;

 void pascal(vector<int>& pasc, int nums) {
     vector <int> retpasc;
     for(int i=0;i<nums;i++){
            pasc.insert(pasc.begin(),1);
            for(int j=1;j<pasc.size()-1;j++)
                pasc[j] = pasc[j]+pasc[j+1];
            retpasc.push_back(&pasc);
            for(auto j:pasc)
                cout<<j<<" ";
            cout<<endl;

     }

 }

int main() {
    vector <int> pasc;

    pascal(pasc,5);
    //cout<<resultArray.size();

    return 0;
}
