

# str=$(ls **/*.js.docx)
# arr=(${str})

# for i in ${arr[@]}; do
#     # for i in ${farm_hosts[@]}; do
#     # su $login -c "scp $httpd_conf_new ${i}:${httpd_conf_path}"
#     # su $login -c "ssh $i sudo /usr/local/apache/bin/apachectl graceful"
#     echo ${i}
#     # libreoffice --headless --convert-to "txt:Text (encoded):UTF8" database.js.docx && mv database.js.txt database.js
#     libreoffice --headless --convert-to "txt:Text (encoded):UTF8" ${i}
# done

str=$(ls **/*.js.txt)
arr=(${str})
str_aux="${str2:0:2}"
str_aux2="${i}"

for i in ${arr[@]}; do
    echo ${i}
    str2=${i}
    l=`expr length $str2`
    mv `echo "./$str_aux2"` `echo "./$str_aux"`
done
