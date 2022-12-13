#include<bits/stdc++.h>
using namespace std;


vector<int> reverseArr(vector<int> v,int size,int s=0){
    if(s<size/2){
     swap(v[s],v[size-s]);
        reverseArr(v,size,s+1);
    }
    return v;
}
int main(){
    vector <int> v={5,4,3,2,1};


    auto revArr = reverseArr(v,v.size()-1);
    for(auto it: v){
        cout<<it<<" ";
    }
    cout<<"\nReverse array"<<endl;
    for(auto it: revArr){
        cout<<it<<" ";
    }
}