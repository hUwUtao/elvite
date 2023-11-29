a=$1
b=.tmp.$a
cp $a $b && jq -S . $b > $a && rm $b