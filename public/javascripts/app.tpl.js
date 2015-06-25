(function(module) {
try {
  module = angular.module('app.tpl');
} catch (e) {
  module = angular.module('app.tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/main/partials/details-modal.html',
    '<div class="drug-detail-modal">\n' +
    '	<div class="modal-header">\n' +
    '		<h1 class="modal-title h2">\n' +
    '			<span role="button" ng-click="done()">{{ drug.name }}</span>\n' +
    '		</h1>\n' +
    '\n' +
    '	    <a class="follow-button btn btn-default"\n' +
    '	    	ng-click="toggleFollow()"\n' +
    '	    	ng-class="{\'following\': drug.following}">\n' +
    '	        <span ng-hide="drug.following">Follow</span>\n' +
    '	        <span ng-show="drug.following">Unfollow</span>\n' +
    '	    </a>\n' +
    '\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '	 	<div data-ng-if="drug.details">\n' +
    '			<h2>Recalls</h2>\n' +
    '\n' +
    '			<div data-ng-if="drug.details.recalls">\n' +
    '			    <h3>{{drug.details.recallDetails.length}} ongoing recall(s)</h3>\n' +
    '\n' +
    '			    <div data-ng-repeat="r in drug.details.recallDetails">\n' +
    '			        <dl>\n' +
    '			            <dt>Recall Number</dt>\n' +
    '			            <dd>{{r.recall_number}}</dd>\n' +
    '			            <dt>Product Description</dt>\n' +
    '			            <dd>{{r.product_description}}</dd>\n' +
    '			            <dt>Reason</dt>\n' +
    '			            <dd>{{r.reason_for_recall}}</dd>\n' +
    '			        </dl>\n' +
    '\n' +
    '			        <hr data-ng-if="!$last"/>\n' +
    '			    </div>\n' +
    '			</div>\n' +
    '			<div data-ng-if="!drug.details.recalls">\n' +
    '			    <p>There are no open recalls.</p>\n' +
    '			</div>\n' +
    '\n' +
    '			<h2>Label Changes</h2>\n' +
    '\n' +
    '			<div data-ng-if="drug.details.labelChanges">\n' +
    '			    <h3>{{drug.details.labelDetails.length}} recent label\n' +
    '			        change(s)</h3>\n' +
    '\n' +
    '			    <div data-ng-repeat="l in drug.details.labelDetails">\n' +
    '			        <dl>\n' +
    '			            <dt>Label Version</dt>\n' +
    '			            <dd>{{l.version}}</dd>\n' +
    '			            <dt>Effective Date</dt>\n' +
    '			            <dd>{{l.effective_time | fdaDate}}</dd>\n' +
    '			            <dt>Indications and Usage</dt>\n' +
    '			            <dd>{{l.indications_and_usage}}</dd>\n' +
    '			            <dt>Dosage and Administration</dt>\n' +
    '			            <dd>{{l.dosage_and_administration}}</dd>\n' +
    '			        </dl>\n' +
    '			    </div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div data-ng-if="!drug.details.labelChanges">\n' +
    '			    <p>There have been no label changes in the last 90 days.</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
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
  $templateCache.put('/main/partials/drug-detail.html',
    '\n' +
    '<div class="container" class="drug-details-container">\n' +
    '\n' +
    '    <div class="col-sm-12">\n' +
    '        <div class="page-header">\n' +
    '\n' +
    '\n' +
    '            <h1>{{ drug }}</h1>\n' +
    '            <a class="btn btn-default" data-ng-href="/">\n' +
    '                <i class="icon-arrow-left"></i> Back\n' +
    '            </a>\n' +
    '            <a class="btn btn-default" ng-click="toggleFollow()">\n' +
    '                <span ng-if="!following">Follow</span>\n' +
    '                <span ng-if="following">Unfollow</span>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div data-ng-if="drugDetails">\n' +
    '            <h2>Recalls</h2>\n' +
    '\n' +
    '            <div data-ng-if="drugDetails.recalls">\n' +
    '                <h3>{{drugDetails.recallDetails.length}} ongoing recall(s)</h3>\n' +
    '\n' +
    '                <div data-ng-repeat="r in drugDetails.recallDetails">\n' +
    '                    <dl>\n' +
    '                        <dt>Recall Number</dt>\n' +
    '                        <dd>{{r.recall_number}}</dd>\n' +
    '                        <dt>Product Description</dt>\n' +
    '                        <dd>{{r.product_description}}</dd>\n' +
    '                        <dt>Reason</dt>\n' +
    '                        <dd>{{r.reason_for_recall}}</dd>\n' +
    '                    </dl>\n' +
    '\n' +
    '                    <hr data-ng-if="!$last"/>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div data-ng-if="!drugDetails.recalls">\n' +
    '                <p>There are no open recalls.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <h2>Label Changes</h2>\n' +
    '\n' +
    '            <div data-ng-if="drugDetails.labelChanges">\n' +
    '                <h3>{{drugDetails.labelDetails.length}} recent label\n' +
    '                    change(s)</h3>\n' +
    '\n' +
    '                <div data-ng-repeat="l in drugDetails.labelDetails">\n' +
    '                    <dl>\n' +
    '                        <dt>Label Version</dt>\n' +
    '                        <dd>{{l.version}}</dd>\n' +
    '                        <dt>Effective Date</dt>\n' +
    '                        <dd>{{l.effective_time | fdaDate}}</dd>\n' +
    '                        <dt>Indications and Usage</dt>\n' +
    '                        <dd>{{l.indications_and_usage}}</dd>\n' +
    '                        <dt>Dosage and Administration</dt>\n' +
    '                        <dd>{{l.dosage_and_administration}}</dd>\n' +
    '                    </dl>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '            <div data-ng-if="!drugDetails.labelChanges">\n' +
    '                <p>There have been no label changes in the last 90 days.</p>\n' +
    '            </div>\n' +
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
    '<section role="search">\n' +
    '	<div class="container">\n' +
    '		<label for="selectDrugInput" class="sr-only">Search for medications by\n' +
    '			name</label>\n' +
    '		<ui-select id="selectDrugInput"\n' +
    '				class="ui-select-scroll ui-select-auto-width ui-select-opaque"\n' +
    '				theme="bootstrap"\n' +
    '				data-ng-model="drug.selected"\n' +
    '				search-enabled="true"\n' +
    '				reset-search-input="true">\n' +
    '			<img style="width: 64px; height: 64px;" src="assets/images/icon-search.svg" alt="">\n' +
    '			<ui-select-match placeholder="Type a Medication Name...">\n' +
    '\n' +
    '			</ui-select-match>\n' +
    '\n' +
    '			<ui-select-choices\n' +
    '					repeat="drug as drug in drugs | filter: $select.search">\n' +
    '				{{ drug }}\n' +
    '			</ui-select-choices>\n' +
    '\n' +
    '		</ui-select>\n' +
    '	</div>\n' +
    '</section>\n' +
    '<main role="main" class="followed-drugs">\n' +
    '	<div id="content" class="container">\n' +
    '		<h2>Medications you\'re Following</h2>\n' +
    '		<p class="empty-drugs-list alert alert-info" data-ng-show="followedDrugs.length === 0">\n' +
    '	        To follow a medication, search above and click the “follow” button.\n' +
    '	    </p>\n' +
    '	    <ul data-ng-show="followedDrugs.length">\n' +
    '			<li data-ng-repeat="drug in followedDrugs" class="panel" data-ng-class="highlightClass(drug)">\n' +
    '				<span class="status-icon"></span>\n' +
    '				<h3 data-ng-click="manuallySelectDrug(drug)">{{ drug.name }}</h3>\n' +
    '				<button class="btn btn-xs btn-follow" data-ng-click="removeDrug(drug)" data-ng-mouseover="hoverFollow()" data-ng-mouseleave="leaveFollow()">\n' +
    '						<span data-ng-show="followHovered">Unfollow</span>\n' +
    '						<span data-ng-hide="followHovered">Following</span>\n' +
    '				</button>\n' +
    '	            <div class="drug-summary">\n' +
    '	                <p data-ng-if="drug.details.recalls" data-drug-summary data-drug="drug" data-type=" \'recall\' " ></p>\n' +
    '	                <p data-ng-if="drug.details.labelChanges" data-drug-summary data-drug="drug" data-type=" \'label\' "></p>\n' +
    '	            </div>\n' +
    '			</li>\n' +
    '		</ul>\n' +
    '	</div>\n' +
    '</main>\n' +
    '<aside class="about-med-alerts">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<div class="col-sm-10 col-sm-offset-1 ">\n' +
    '				<h2>Why Med Alerts?</h2>\n' +
    '				<div class="purpose">\n' +
    '					<aside class="statistic">\n' +
    '						<span class="infographic-person"></span>\n' +
    '						<p>\n' +
    '							<span class="percentage">82%</span>\n' +
    '							<br> of American adults take at least one perscription medications.\n' +
    '						</p>\n' +
    '					</aside>\n' +
    '					<p>The Med Alerts website allows the informed consumer to research individual drugs for recent recals, changes to the drug\'s label or other useful information. Just like subscribing to follow updates on social media, you may choose to "follow" a frequently used drug to be alerted of future changes.</p>\n' +
    '				</div>\n' +
    '				<div class="statistics">\n' +
    '					<aside class="statistic">\n' +
    '						<span class="infographic-person"></span>\n' +
    '						<p>\n' +
    '							<span class="percentage">29%</span>\n' +
    '							<br> of American adults take 5 or more medications.\n' +
    '						</p>\n' +
    '					</aside>\n' +
    '					<p>According to FDA Research,approximately 106,000 deaths per year can be attributed to adverse reactions to prescription medications. One in five hospital visits is the direct result of a drug reaction. And adverse drug reactions are estimate to cost our country $135 billion dollars anually.</p>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</aside>\n' +
    '<footer>\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '\n' +
    '			<ul class="technical-details list-unstyled col-sm-5 col-sm-offset-1">\n' +
    '				<li class="header">\n' +
    '					<h2>Made by SPARC</h2>\n' +
    '					<span>Open source technologies used:</span>\n' +
    '				</li>\n' +
    '\n' +
    '				<li>Development Layer\n' +
    '					<ul>\n' +
    '						<li>Play Framework using Scala</li>\n' +
    '						<li>AngularJS</li>\n' +
    '						<li>lodash</li>\n' +
    '					</ul>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					Visual / Design Layer\n' +
    '					<ul>\n' +
    '						<li>Play Framework using Scala</li>\n' +
    '						<li>AngularJS</li>\n' +
    '						<li>lodash</li>\n' +
    '					</ul>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					QA Layer\n' +
    '					<ul>\n' +
    '						<li>Scala Test</li>\n' +
    '						<li>Jasmine</li>\n' +
    '						<li>Karma</li>\n' +
    '					</ul>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '\n' +
    '			<ul class="feedback list-unstyled col-sm-5 col-sm-offset-1">\n' +
    '				<li class="header">\n' +
    '					<h2>Feedback Welcome</h2>\n' +
    '					<span>\n' +
    '						Submit feedback to <a href="mailto:18F@sparcedge.com?Subject=18f%20Feedback" target="_top">18F@sparcedge.com</a>\n' +
    '					</span>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<div class="container">\n' +
    '		<p role="contentinfo">This prototype leverages the openFDA research project and is not for clinical use. Please refer to their <a href="https://open.fda.gov/terms/" target="_blank">Terms of Service</a>.</p>\n' +
    '	</div>\n' +
    '</footer>\n' +
    '<!-- Screen Mask for Modals, etc -->\n' +
    '<div id="mask" ng-class=\'{"mask-open": maskOpen}\'></div>\n' +
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
    '            <h1>Pattern Library</h1>\n' +
    '\n' +
    '            <h2 id="colorswatch">Color Swatch</h3>\n' +
    '                <!-- Color Swatch -->\n' +
    '                <div class="pl-example">\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-white"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-black"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-light-blue"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-dark-blue"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-light-red"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-light-yellow"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-light-green"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-light-gray"></div>\n' +
    '                    <div class="pl-color-swatch pl-color-swatch-dark-gray"></div>\n' +
    '\n' +
    '                </div>\n' +
    '    \n' +
    '                <!-- Heading -->\n' +
    '                <h2 id="typography">Typography</h2>\n' +
    '                <p id="typographyheading">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>\n' +
    '                <div class="pl-example">\n' +
    '                    <h1>h1. heading</h1>\n' +
    '                    <h1>Drug Name : aBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h1>\n' +
    '                    \n' +
    '                    <h2>h2. heading</h2>\n' +
    '                    <h2>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h2>\n' +
    '                     \n' +
    '                    <h3>h3. heading</h3>\n' +
    '                    <h3>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h3>\n' +
    '                    \n' +
    '            <h4>h4. heading</h4>\n' +
    '            <h4>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h4>\n' +
    '            \n' +
    '            <h5>h5. heading</h5>\n' +
    '            \n' +
    '            <h6>h6. heading</h6>\n' +
    '            <h6>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789</h6>\n' +
    '            \n' +
    '        </div>\n' +
    '        <!-- Body Copy -->\n' +
    '        <h3 id="typographybody">Body Copy</h3>\n' +
    '        <p>The global default <code>font-size</code> is <strong>20px</strong>, with a <code>line-height</code> of <strong>1.5 em</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).</p>\n' +
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
    '           \n' +
    '        </div>\n' +
    '        <div class="pl-code-sample">\n' +
    '		 		<pre>\n' +
    '					<code>\n' +
    '                        <span class="pl-syntax-comment">btn-default-alt btn-prev icon-arrow-left</span>\n' +
    '                    \n' +
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
    '                            <span class="intake-question-label"> Which Drug would you like to follow?</span>\n' +
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
    '                                    <div data-ng-bind-html="option.name | highlight: $select.search"></div>\n' +
    '                                </ui-select-choices>\n' +
    '                            </ui-select>\n' +
    '                        </li>\n' +
    '                         \n' +
    '                    </ul>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '         \n' +
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
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '');
}]);
})();
