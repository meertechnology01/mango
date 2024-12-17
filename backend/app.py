from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST']) 
def index():
    print("METHOD", request.method)
    print("Params", request.args)
    print("Form", request.form)
    if request.is_json:
        print("JSON", request.get_json())
    else:
        print("NO JSON")
    print("HEADERS", request.headers)
    print("RAW", request.data.decode('utf-8'))

    return 
if __name__ == '__main__':
    app.run(debug=True)