#include<bits/stdc++.h>
using namespace std;
int main(){

    unordered_multiset <int> multiset;
    multiset.insert(2);
    multiset.insert(3);
    multiset.insert(5);
    multiset.insert(5);
    multiset.insert(2);
    multiset.insert(1);

    cout<<multiset.count(2)<<endl;
    cout<<"___"<<endl;
    for(auto it= multiset.begin(); it != multiset.end(); it++){
        cout<<*it<<endl;
    }
    multiset.erase(multiset.begin(),multiset.end());
    cout << multiset.size();
    return 0;
}