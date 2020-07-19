import os
import pymongo
import json

def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["herefishyfishy"]
    col = db.fishnutrition
    results = []
    maxid = 0
    fishname = request_json['fish']
    

    for x in col.find():
        item = {}
        if str(fishname) in str(x['Species Name']):
            item["image_url"] =  str(x["Species Illustration Photo/src"])
            item["population"] = str(x["Population"])
            item["servings"] = str(x['Servings'])
            item["serving weight"] = str(x['Serving Weight'])
            item["calories"] = str(x['Calories'])
            item["protein"] = str(x['Protein'])
            item["fat total"] = str(x['Fat, Total'])
            item["saturated fatty acids total"] = str(x['Saturated Fatty Acids, Total'])
            item["carbohydrate"] = str(x['Carbohydrate'])
            item["sugars total"] = str(x['Sugars, Total'])
            item["fiber total dietary"] = str(x['Fiber, Total Dietary'])
            item["cholesterol"] = str(x['Cholesterol'])
            item["selenium"] = str(x['Selenium'])
            item["sodium"] = str(x['Sodium'])
            item["taste"] = str(x['Taste'])
            item["texture"] = str(x['Texture'])
            item["color"] = str(x['Color'])
            item["health benefits"] = str(x['Health Benefits'])

            item["name"] =  str(x['Species Name'])
            # item["status"] =  x["status"]
            # item["description"] =  x["description"]
            
            
            results.append(item)
        maxid +=1
    
    
    retjson = {}

    retjson['profiles'] = results
    retjson['mongoresult'] = str(maxid)

    return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
