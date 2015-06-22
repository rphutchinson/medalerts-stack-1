(function(module) {
try {
  module = angular.module('app.tpl');
} catch (e) {
  module = angular.module('app.tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/main/partials/drug-detail.html',
    '<div class="container">\n' +
    '    <div class="col-sm-12">\n' +
    '        <div class="page-header">\n' +
    '        	<h1>{{ drug }}</h1>\n' +
    '	        <a class="btn btn-default" data-ng-href="/">\n' +
    '	        	<i class="icon-arrow-left"></i> Back\n' +
    '	        </a>\n' +
    '	        <a class="btn btn-default" ng-click="toggleFollow()">\n' +
    '	        	<span ng-if="!following">Follow</span>\n' +
    '	        	<span ng-if="following">Unfollow</span>\n' +
    '	        </a>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            {{drugDetails}}\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.tpl');
} catch (e) {
  module = angular.module('app.tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/main/partials/main-index.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-12">\n' +
    '            <div class="page-header">\n' +
    '                <h1>Hello main-index!</h1>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-6">\n' +
    '            <label for="selectDrugInput">Search for medications by\n' +
    '                name</label>\n' +
    '            <ui-select\n' +
    '                    id="selectDrugInput"\n' +
    '                    class="ui-select-scroll ui-select-auto-width ui-select-opaque"\n' +
    '                    theme="bootstrap"\n' +
    '                    data-ng-model="drug.selected"\n' +
    '                    search-enabled="true"\n' +
    '                    reset-search-input="true"\n' +
    '                    >\n' +
    '                <ui-select-match>\n' +
    '                    {{$select.selected}}\n' +
    '                </ui-select-match>\n' +
    '                <ui-select-choices\n' +
    '                        repeat="drug as drug in drugs | filter: $select.search">\n' +
    '                    {{drug}}\n' +
    '                </ui-select-choices>\n' +
    '            </ui-select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!-- @todo: replace with typeahead -->\n' +
    '	<div class="row" style="padding-top: 15px;">\n' +
    '		<div class="col-sm-6">\n' +
    '			<div ng-repeat="drug in followedDrugs" class="well">\n' +
    '					{{ drug }}\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.tpl');
} catch (e) {
  module = angular.module('app.tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/pattern/partials/main.html',
    '<div class="container">\n' +
    '    <div class="row pl">\n' +
    '        <div class="col-sm-9">\n' +
    '            <h1>Pattern Libaray</h1>\n' +
    '\n' +
    '            <h2 id="colorswatch">Color Swatch</h3>\n' +
    '                <!-- Color Swatch -->\n' +
    '                <div class="pl-example">\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-white"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-teal-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-teal-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-teal-02"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-teal-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-teal-04"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-xtra-light"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-light"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-02"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-gray-04"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-green-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-green-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-green-02"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-green-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-green-04"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-yellow-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-yellow-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-yellow-02"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-yellow-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-yellow-04"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-orange-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-orange-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-orange-02"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-orange-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-orange-04"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-plum-00"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-plum-01"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-plum-03"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-plum-04"></div>\n' +
    '                </div>\n' +
    '                <div id="colorswatchoption" class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-comment">VAR 		        HEX </span>\n' +
    '                        <span class="pl-syntax-less">@app-white:             #FFFFFF;</span>\n' +
    '                        <span class="pl-syntax-less">@app-teal-00:           #A9D5DA;</span>\n' +
    '                        <span class="pl-syntax-less">@app-teal-01:           #67ABB8;</span>\n' +
    '                        <span class="pl-syntax-less">@app-teal-02:           #017389;</span>\n' +
    '                        <span class="pl-syntax-less">@app-teal-03:           #135462;</span>\n' +
    '                        <span class="pl-syntax-less">@app-teal-04:           #1F363C;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-xtra-light:   #F8F9F9;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-light:        #F1F3F3;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-00:           #EDEDED;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-01:           #BAC2C4;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-02:           #79868A;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-03:           #555C5E;</span>\n' +
    '                        <span class="pl-syntax-less">@app-gray-04:           #3C4142;</span>\n' +
    '                        <span class="pl-syntax-less">@app-green-00:          #D6E2D7;</span>\n' +
    '                        <span class="pl-syntax-less">@app-green-01:          #ADC7AF;</span>\n' +
    '                        <span class="pl-syntax-less">@app-green-02:          #76A27A;</span>\n' +
    '                        <span class="pl-syntax-less">@app-green-03:          #5E7F60;</span>\n' +
    '                        <span class="pl-syntax-less">@app-green-04:          #425E43;</span>\n' +
    '                        <span class="pl-syntax-less">@app-yellow-00:         #FFF2D4;</span>\n' +
    '                        <span class="pl-syntax-less">@app-yellow-01:         #FFE6A7;</span>\n' +
    '                        <span class="pl-syntax-less">@app-yellow-02:         #FFCE00;</span>\n' +
    '                        <span class="pl-syntax-less">@app-yellow-03:         #D3AC07;</span>\n' +
    '                        <span class="pl-syntax-less">@app-yellow-04:         #A88909;</span>\n' +
    '                        <span class="pl-syntax-less">@app-orange-00:         #FED8CD;</span>\n' +
    '                        <span class="pl-syntax-less">@app-orange-01:         #FFB39A;</span>\n' +
    '                        <span class="pl-syntax-less">@app-orange-02:         #F96A23;</span>\n' +
    '                        <span class="pl-syntax-less">@app-orange-03:         #CC5825;</span>\n' +
    '                        <span class="pl-syntax-less">@app-orange-04:         #A54321;</span>\n' +
    '                        <span class="pl-syntax-less">@app-plum-00:           #DEC2CE;</span>\n' +
    '                        <span class="pl-syntax-less">@app-plum-01:           #BE859E;</span>\n' +
    '                        <span class="pl-syntax-less">@app-plum-02:           #6F1043;</span>\n' +
    '                        <span class="pl-syntax-less">@app-plum-03:           #540E36;</span>\n' +
    '                        <span class="pl-syntax-less">@app-plum-04:           #380C29;</span>\n' +
    '                    </code>\n' +
    '				</pre>\n' +
    '                </div>\n' +
    '                <!-- Heading -->\n' +
    '                <h2 id="typography">Typography</h2>\n' +
    '                <p id="typographyheading">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>\n' +
    '                <div class="pl-example">\n' +
    '                    <h1>h1. heading</h1>\n' +
    '                    <h1>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h1>\n' +
    '                    <h1 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h1>\n' +
    '                    <h2>h2. heading</h2>\n' +
    '                    <h2>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h2>\n' +
    '                    <h2 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h2>\n' +
    '                    <h3>h3. heading</h3>\n' +
    '                    <h3>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h3>\n' +
    '                    <h3 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h2>\n' +
    '            <h4>h4. heading</h4>\n' +
    '            <h4>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h4>\n' +
    '            <h4 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h4>\n' +
    '            <h5>h5. heading</h5>\n' +
    '            <h5 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h5>\n' +
    '            <h6>h6. heading</h6>\n' +
    '            <h6>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h6>\n' +
    '            <h6 class="teal">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h6>\n' +
    '        </div>\n' +
    '        <!-- Body Copy -->\n' +
    '        <h3 id="typographybody">Body Copy</h3>\n' +
    '        <p>The global default <code>font-size</code> is <strong>20px</strong>, with a <code>line-height</code> of <strong>1.35;</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).</p>\n' +
    '        <div class="pl-example">\n' +
    '            <p>Paragraph</p>\n' +
    '            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n' +
    '            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>\n' +
    '            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n' +
    '        </div>\n' +
    '        <h3 id="typographytitle">Title</h3>\n' +
    '        <p>Title and subtitle, are available by way of <code>title</code> mixin.</p>\n' +
    '        <div class="pl-example">\n' +
    '            <div class="title">\n' +
    '                <div class="title">Title</div>\n' +
    '            </div>\n' +
    '            <div class="title">\n' +
    '                <div class="subtitle">Subtitle</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- Buttons -->\n' +
    '        <h2 id="buttons">Buttons</h2>\n' +
    '        <h3 id="buttonbasic">Basic</h3>\n' +
    '        <p>Use the button classes on an anchor, button, or input element.</p>\n' +
    '        <div class="pl-example">\n' +
    '            <button type="button" class="btn btn-link">View All</button>\n' +
    '            <button class="btn btn-default" type="submit">Button</button>\n' +
    '            <input class="btn btn-default" type="button" value="Input">\n' +
    '            <input class="btn btn-default" type="submit" value="Submit">\n' +
    '        </div>\n' +
    '        <div class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-html">btn btn-link</span>\n' +
    '                        <span class="pl-syntax-html">btn btn-default</span>\n' +
    '                    </code>\n' +
    '				</pre>\n' +
    '        </div>\n' +
    '        <h3 id="buttonclass">Class</h3>\n' +
    '        <p>Use any of the available button classes to quickly create a styled button.</p>\n' +
    '        <div class="pl-example">\n' +
    '            <!-- Standard button -->\n' +
    '            <button type="button" class="btn btn-default">Default</button>\n' +
    '            <button type="button" class="btn btn-default-alt">Default Alt</button>\n' +
    '\n' +
    '            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n' +
    '            <button type="button" class="btn btn-primary">Primary</button>\n' +
    '\n' +
    '            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n' +
    '            <button type="button" class="btn btn-primary-alt">Primary Alt</button>\n' +
    '\n' +
    '            <!-- Indicates a successful or positive action -->\n' +
    '            <button type="button" class="btn btn-success">Success</button>\n' +
    '\n' +
    '            <!-- Contextual button for informational alert messages -->\n' +
    '            <button type="button" class="btn btn-info">Info</button>\n' +
    '\n' +
    '            <!-- Indicates caution should be taken with this action -->\n' +
    '            <button type="button" class="btn btn-warning">Warning</button>\n' +
    '\n' +
    '            <!-- Indicates a dangerous or potentially negative action -->\n' +
    '            <button type="button" class="btn btn-danger">Danger</button>\n' +
    '\n' +
    '            <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->\n' +
    '            <button type="button" class="btn btn-link">Link</button>\n' +
    '\n' +
    '            <!-- Deemphasize a button by making it look like text while maintaining button behavior -->\n' +
    '            <button type="button" class="btn btn-text">Link</button>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-comment">btn btn-default</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-default-alt</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-primary</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-primary-alt</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-info</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-warning</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-danger</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-link</span>\n' +
    '                    </code>\n' +
    '				</pre>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <h3 id="buttonclass">Class Alts</h3>\n' +
    '        <p>Use any of the available button classes to quickly create a styled button.</p>\n' +
    '        <div class="pl-example">\n' +
    '            <!-- Standard button -->\n' +
    '            <button type="button" class="btn btn-default skinny">Default</button>\n' +
    '            <button type="button" class="btn btn-default-alt skinny">Default Alt</button>\n' +
    '\n' +
    '            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n' +
    '            <button type="button" class="btn btn-primary skinny">Primary</button>\n' +
    '\n' +
    '            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n' +
    '            <button type="button" class="btn btn-primary-alt skinny">Primary Alt</button>\n' +
    '\n' +
    '            <!-- Indicates a successful or positive action -->\n' +
    '            <button type="button" class="btn btn-success skinny">Success</button>\n' +
    '\n' +
    '            <!-- Contextual button for informational alert messages -->\n' +
    '            <button type="button" class="btn btn-info skinny">Info</button>\n' +
    '\n' +
    '            <!-- Indicates caution should be taken with this action -->\n' +
    '            <button type="button" class="btn btn-warning skinny">Warning</button>\n' +
    '\n' +
    '            <!-- Indicates a dangerous or potentially negative action -->\n' +
    '            <button type="button" class="btn btn-danger skinny">Danger</button>\n' +
    '\n' +
    '            <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->\n' +
    '            <button type="button" class="btn btn-link skinny">Link</button>\n' +
    '\n' +
    '            <!-- Deemphasize a button by making it look like text while maintaining button behavior -->\n' +
    '            <button type="button" class="btn btn-text skinny">Link</button>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-comment">btn btn-default skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-default-alt skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-primary skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-primary-alt skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-info skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-warning skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-danger skinny</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-link skinny</span>\n' +
    '                    </code>\n' +
    '				</pre>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <h3 id="buttontag">Tags</h3>\n' +
    '        <p>Join available button classes and icon fonts to create a styled button.</p>\n' +
    '        <div class="pl-example">\n' +
    '            <!-- Prev button -->\n' +
    '            <a class="btn btn-default-alt btn-prev" href="#">\n' +
    '                <i id="icon-arrow-left" class="icon-arrow-left"></i>\n' +
    '                <span class="btn-prev-label">Back</span>\n' +
    '            </a>\n' +
    '            <!-- Next button -->\n' +
    '            <button type="submit" class="btn btn-primary">\n' +
    '                Next\n' +
    '                <i id="icon-arrow-left" class="icon-arrow-right"></i>\n' +
    '            </button>\n' +
    '            <!-- Page prev button -->\n' +
    '            <button class="btn btn-text ng-binding">\n' +
    '                <i class="icon-arrow-left"></i>\n' +
    '                Prev\n' +
    '            </button>\n' +
    '            <!-- Page next button -->\n' +
    '            <button class="btn btn-text ng-binding">\n' +
    '                Next\n' +
    '                <i class="icon-arrow-right"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <div class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-comment">btn-default-alt btn-prev icon-arrow-left</span>\n' +
    '                        <span class="pl-syntax-comment">btn btn-primary icon-arrow-right</span>\n' +
    '                        <span class="pl-syntax-comment">btn-text icon-arrow-left</span>\n' +
    '                        <span class="pl-syntax-comment">btn-text icon-arrow-right</span>\n' +
    '                    </code>\n' +
    '				</pre>\n' +
    '        </div>\n' +
    '        <!-- Forms -->\n' +
    '        <h2 id="forms">Forms</h2>\n' +
    '        <h3>Basic</h3>\n' +
    '        <p>Individual form controls automatically receive some global styling. All textual <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code> elements with <code>.form-control</code> are set to <code>width: 100%;</code> by default. Wrap labels and controls in <code>.form-group</code> for optimum spacing.</p>\n' +
    '        <p>Form elements with <code>&lt;select&gt;</code> require <code>&lt;button&gt;</code> and ui-select.</p>\n' +
    '\n' +
    '        <div class="pl-example pl-ui-select">\n' +
    '            <div>\n' +
    '                <form>\n' +
    '                    <ul class="intake-question-list">\n' +
    '                        <p class="type-gray type-small">Select elements use ui-select to provide a typeahead dropdown. To force a visible scrollbar on select choices add <code>&lt;ui-select-scroll&gt;</code>. Since select elements are created with ui-select, <code>&lt;class="ui-select-scroll"&gt;</code> and <code>&lt;theme="bootstrap"&gt;</code> must be made available to the element.</p>\n' +
    '                        <li class="example">\n' +
    '                            <span class="intake-question-label"> What is the meaning of life?</span>\n' +
    '                            <span class="help-block"> This is some helper text</span>\n' +
    '                            <ui-select\n' +
    '                                    name="example_select"\n' +
    '                                    data-ng-model="uiSelect.selected"\n' +
    '                                    theme="bootstrap"\n' +
    '                                    ng-change="updateVisible(question)"\n' +
    '                                    class="ui-select-scroll"\n' +
    '\n' +
    '                                    >\n' +
    '                                <ui-select-match placeholder="Please Select">Please Select</ui-select-match>\n' +
    '                                <ui-select-choices repeat="option in options | filter: $select.search">\n' +
    '                                    <div data-ng-bind-html="option.indy | highlight: $select.search"></div>\n' +
    '                                </ui-select-choices>\n' +
    '                            </ui-select>\n' +
    '                        </li>\n' +
    '                        <li class="example">\n' +
    '                            <span class="intake-question-label"> To Be or Not to Be?</span>\n' +
    '                            <span class="help-block"></span>\n' +
    '                            <div class="radio-inline">\n' +
    '                                <label class="radio-inline control-elm">\n' +
    '                                    <input type="radio" name="15_radio" value="be">\n' +
    '                                    Be\n' +
    '                                    <span class="control-indicator"></span>\n' +
    '                                </label>\n' +
    '                                <label class="radio-inline control-elm">\n' +
    '                                    <input type="radio" name="15_radio" value="not">\n' +
    '                                    Not Be\n' +
    '                                    <span class="control-indicator"></span>\n' +
    '                                </label>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <li class="example">\n' +
    '                            <span class="intake-question-label">Fame or Fortune?</span>\n' +
    '                            <span class="help-block"></span>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="checkbox-inline control-elm">\n' +
    '                                    <input type="checkbox" value="ADMIN">\n' +
    '                                    Fame\n' +
    '                                    <span class="control-indicator control-elm"></span>\n' +
    '                                </label>\n' +
    '\n' +
    '                                <label class="checkbox-inline control-elm">\n' +
    '\n' +
    '                                    <input type="checkbox" value="CONTRIBUTOR">\n' +
    '                                    Fortune\n' +
    '                                    <span class="control-indicator"></span>\n' +
    '                                </label><!-- end ngRepeat: r in userRoles -->\n' +
    '                                <div>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Pagination -->\n' +
    '        <!-- Icon Fonts -->\n' +
    '        <h2 id="pagination">Pagination</h2>\n' +
    '        <p>The current build contains a custom directive to produce pagination. For a live example please see <a href="/#/cases/view">My Cases</a></p>\n' +
    '        <div class="pl-example">\n' +
    '            <div class="pagination">\n' +
    '                <div class="pagination-nav">\n' +
    '                    <!-- Navigation Previous -->\n' +
    '                    <button class="btn btn-text">\n' +
    '                        <i class="icon-arrow-left"></i>Prev\n' +
    '                    </button>\n' +
    '                    <!-- Navigation Per Page-->\n' +
    '						<span class="pagination-page">\n' +
    '							<a href="javascript:void(0);">1</a>\n' +
    '						</span>\n' +
    '                    <span class="pagination-page pagination-current">2</span>\n' +
    '						<span class="pagination-page">\n' +
    '							<a href="javascript:void(0);">3</a>\n' +
    '						</span>\n' +
    '						<span class="pagination-page">\n' +
    '							<a href="javascript:void(0);">4</a>\n' +
    '						</span>\n' +
    '						<span class="pagination-page">\n' +
    '							<a href="javascript:void(0);">5</a>\n' +
    '						</span>\n' +
    '                    <!-- Navigation Next -->\n' +
    '                    <button class="btn btn-text">\n' +
    '                        Next<i class="icon-arrow-right"></i>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <div class="pagination-ctx">\n' +
    '                    <span>Displaying <strong>11</strong> – <strong>20</strong> <span class="preposition">of</span> <strong>74</strong> results</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-3">\n' +
    '        <!-- Nav -->\n' +
    '        <div id="navbar">\n' +
    '            <ul class="nav" role="tablist">\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#iconfonts">Icon Fonts</a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#colorswatch">Color Swatch</a>\n' +
    '                    <ul>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#colorswatchoption">Options</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#typography">Typography</a>\n' +
    '                    <ul>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#typographyheading">Heading</a>\n' +
    '                        </li>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#typographybody">Body</a>\n' +
    '                        </li>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#typographytitle">Title</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#buttons">Buttons</a>\n' +
    '                    <ul>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#buttonbasic">Basic</a>\n' +
    '                        </li>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#buttonclass">Class</a>\n' +
    '                        </li>\n' +
    '                        <li>\n' +
    '                            <a href="#/pattern/#buttontag">Tag</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#forms">Forms</a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                    <a href="#/pattern/#pagination">Pagination</a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '');
}]);
})();
