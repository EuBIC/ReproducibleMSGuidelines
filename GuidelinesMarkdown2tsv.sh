#/bin/bash

tr -d '\r' < guidelines.md > t.csv
tr '\n' ' ' < t.csv > tt.csv
sed "s/Name: /\n/g" tt.csv > t.csv
sed 's/Description: /\t/g' t.csv > tt.csv
sed 's/Category: /\t/g' tt.csv > t.csv
sed 's/Fields: /\t/g' t.csv > tt.csv
sed 's/Example: /\t/g' tt.csv > t.csv
sed 's/###/\n/g' t.csv > tt.csv
mv tt.csv guidelines.tsv


rm t.csv
