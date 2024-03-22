from pycaret.clustering import *
# from pycaret.anomaly import *
import pandas as pd
http=pd.read_csv("all_data.csv")
clu1=setup(data=http,normalize=True,numeric_features=['single_q',"double_q","dashes","braces","spaces","badwords"],ignore_features=['methods','path','body'])

kmeans=create_model('kmeans',num_clusters=2)
plot_model(kmeans,plot='tsne')
# plot_model(kmeans)
# kmeans_result=assign_model(kmeans)
# print(kmeans_result)
# kmeans_result.to_csv("kmeans_result.csv")

# test_http=pd.read_csv("test.csv")
# test_result=predict_model(kmeans,data=test_http)
# test_result.to_csv("test_result.csv")
# print(test_result)