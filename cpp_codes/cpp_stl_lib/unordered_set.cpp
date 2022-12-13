#include<bits/stdc++.h>
using namespace std;
int main(){
    unordered_set<int> ust = {2,3,4,2,1};
    // for(auto it = ust.begin();it!= ust.end();it++){
    //     cout<<*it<<endl;
    // }
    cout<<ust.count(2)<<endl;
    int n=2;
    if(ust.find(n)!= ust.end()){
        cout<<n<<" is found"<<endl;
    }
    ust.erase(ust.begin());
    for(auto it:ust){
        cout<<it<<" ";
    }
    // ust.empty()
    //ust.clear()
    return 0;
}