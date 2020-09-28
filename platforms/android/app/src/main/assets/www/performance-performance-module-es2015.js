(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-performance-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js ***!
  \*********************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class ScrollbarHelper {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    /**
     * @return {?}
     */
    getWidth() {
        /** @type {?} */
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        /** @type {?} */
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        /** @type {?} */
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        /** @type {?} */
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    /**
     * @param {?} element
     * @return {?}
     */
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    /**
     * @return {?}
     */
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-footer-template]' },] }
];
/** @nocollapse */
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.runCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    /**
     * @return {?}
     */
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.isVisible = true;
            this.visible.emit(true);
        }));
    }
    /**
     * @return {?}
     */
    runCheck() {
        /** @type {?} */
        const check = (/**
         * @return {?}
         */
        () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.timeout = setTimeout((/**
                     * @return {?}
                     */
                    () => check()), 50);
                }));
            }
        });
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => check()));
    }
}
VisibilityDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[visibilityObserver]' },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        // we only want to drag the inner header text
        /** @type {?} */
        const isDragElm = ((/** @type {?} */ (event.target))).classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            /** @type {?} */
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            /** @type {?} */
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.onMouseup(ev)));
            /** @type {?} */
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.move(ev, mouseDownPos)));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    /**
     * @param {?} event
     * @param {?} mouseDownPos
     * @return {?}
     */
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        /** @type {?} */
        const x = event.clientX - mouseDownPos.x;
        /** @type {?} */
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[draggable]' },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DraggableDirective.propDecorators = {
    dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/** @type {?} */
const MouseEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .MouseEvent));
/** @type {?} */
const KeyboardEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .KeyboardEvent));
/** @type {?} */
const Event = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global)))).Event));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResizeableDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const renderer2 = this.renderer;
        /** @type {?} */
        const node = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(node, 'resize-handle');
        }
        else {
            renderer2.addClass(node, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, node);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        /** @type {?} */
        const isHandle = ((/** @type {?} */ (event.target))).classList.contains('resize-handle');
        /** @type {?} */
        const initialWidth = this.element.clientWidth;
        /** @type {?} */
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            /** @type {?} */
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.onMouseup()));
            /** @type {?} */
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => this.move(e, initialWidth, mouseDownScreenX)));
            this.subscription.add(mouseMoveSub);
        }
    }
    /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */
    move(event, initialWidth, mouseDownScreenX) {
        /** @type {?} */
        const movementX = event.screenX - mouseDownScreenX;
        /** @type {?} */
        const newWidth = initialWidth + movementX;
        /** @type {?} */
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        /** @type {?} */
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            },] }
];
/** @nocollapse */
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderableDirective {
    /**
     * @param {?} differs
     * @param {?} document
     */
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.draggables.forEach((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    updateSubscriptions() {
        /** @type {?} */
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            /** @type {?} */
            const subscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            });
            /** @type {?} */
            const unsubscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            });
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    /**
     * @return {?}
     */
    onDragStart() {
        this.positions = {};
        /** @type {?} */
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            /** @type {?} */
            const elm = dragger.element;
            /** @type {?} */
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragging({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragEnd({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    isTarget(model, event) {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const x = event.x || event.clientX;
        /** @type {?} */
        const y = event.y || event.clientY;
        /** @type {?} */
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            /** @type {?} */
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el === pos.element))) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createMapDiffs() {
        return this.draggables.toArray().reduce((/**
         * @param {?} acc
         * @param {?} curr
         * @return {?}
         */
        (acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }), {});
    }
}
OrderableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[orderable]' },] }
];
/** @nocollapse */
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DraggableDirective, { descendants: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    /**
     * @return {?}
     */
    get press() {
        return this.pressing;
    }
    /**
     * @return {?}
     */
    get isLongPress() {
        return this.isLongPressing;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        /** @type {?} */
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.onMouseup()));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} mouseEvent
             * @return {?}
             */
            (mouseEvent) => this.onMouseMove(mouseEvent))));
            this.loop(event);
        }), this.duration);
        this.loop(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            /** @type {?} */
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            /** @type {?} */
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }), 50);
        }
    }
    /**
     * @return {?}
     */
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.endPress();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[long-press]' },] }
];
LongPressDirective.propDecorators = {
    pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.press',] }],
    isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.longpress',] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollerComponent {
    /**
     * @param {?} ngZone
     * @param {?} element
     * @param {?} renderer
     */
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            /** @type {?} */
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScrolled(event) {
        /** @type {?} */
        const dom = (/** @type {?} */ (event.currentTarget));
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        }));
    }
    /**
     * @return {?}
     */
    updateOffset() {
        /** @type {?} */
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-scroller',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableGroupHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngx-datatable-group-header-template]'
            },] }
];
/** @nocollapse */
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     * @param {?} group
     * @return {?}
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     * @return {?}
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     * @return {?}
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-group-header' },] }
];
DatatableGroupHeaderDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Always returns the empty string ''
 * @return {?}
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 * @param {?} prop
 * @return {?}
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param {?} row array of values
 * @param {?} index numeric index
 * @return {?} any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    /** @type {?} */
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param {?} obj object containing the field
 * @param {?} fieldName field name string
 * @return {?}
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    /** @type {?} */
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    /** @type {?} */
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    /** @type {?} */
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prop
 * @return {?}
 */
function optionalGetterForProp(prop) {
    return prop && ((/**
     * @param {?} row
     * @return {?}
     */
    row => getterForProp(prop)(row, prop)));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param {?} rows
 *
 * @param {?=} from
 * @param {?=} to
 * @return {?}
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        /** @type {?} */
        const nodeById = {};
        /** @type {?} */
        const l = rows.length;
        /** @type {?} */
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        // that's the root node
        /** @type {?} */
        const uniqIDs = rows.reduce((/**
         * @param {?} arr
         * @param {?} item
         * @return {?}
         */
        (arr, item) => {
            /** @type {?} */
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }), []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            /** @type {?} */
            let parent = 0;
            /** @type {?} */
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        /** @type {?} */
        let resolvedRows = [];
        nodeById[0].flatten((/**
         * @return {?}
         */
        function () {
            resolvedRows = [...resolvedRows, this.row];
        }), true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    /**
     * @param {?=} row
     */
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                /** @type {?} */
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param {?} str
 * @return {?}
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, (/**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @return {?}
     */
    function (a, b, c) {
        return b.trim() + c.toUpperCase();
    }));
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 * @param {?} str
 * @return {?}
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, (/**
     * @param {?} match
     * @return {?}
     */
    match => ` ${match}`)).replace(/^./, (/**
     * @param {?} match
     * @return {?}
     */
    match => match.toUpperCase()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 * @return {?}
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sets the column defaults
 * @param {?} columns
 * @return {?}
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    /** @type {?} */
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 * @param {?} templates
 * @return {?}
 */
function translateTemplates(templates) {
    /** @type {?} */
    const result = [];
    for (const temp of templates) {
        /** @type {?} */
        const col = {};
        /** @type {?} */
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ColumnMode = {
    standard: 'standard',
    flex: 'flex',
    force: 'force',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SelectionType = {
    single: 'single',
    multi: 'multi',
    multiClick: 'multiClick',
    cell: 'cell',
    checkbox: 'checkbox',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SortType = {
    single: 'single',
    multi: 'multi',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ContextmenuType = {
    header: 'header',
    body: 'body',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnHeaderDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-header-template]' },] }
];
/** @nocollapse */
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnCellDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-cell-template]' },] }
];
/** @nocollapse */
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnCellTreeToggle {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-tree-toggle]' },] }
];
/** @nocollapse */
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnDirective {
    /**
     * @param {?} columnChangesService
     */
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    /**
     * @return {?}
     */
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    /**
     * @return {?}
     */
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    /**
     * @return {?}
     */
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-column' },] }
];
/** @nocollapse */
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableRowDetailTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngx-datatable-row-detail-template]'
            },] }
];
/** @nocollapse */
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     * @return {?}
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     * @return {?}
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-row-detail' },] }
];
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableFooterDirective {
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-footer' },] }
];
DatatableFooterDirective.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */
function columnsByPin(cols) {
    /** @type {?} */
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 * @param {?} groups
 * @param {?} all
 * @return {?}
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnTotalWidth(columns, prop) {
    /** @type {?} */
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            /** @type {?} */
            const has = prop && c[prop];
            /** @type {?} */
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnsTotalWidth(columns, prop) {
    /** @type {?} */
    let totalWidth = 0;
    for (const column of columns) {
        /** @type {?} */
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */
function columnsByPinArr(val) {
    /** @type {?} */
    const colsByPinArr = [];
    /** @type {?} */
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     * @return {?}
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param {?} details
     * @return {?}
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        /** @type {?} */
        const isFn = typeof rowHeight === 'function';
        /** @type {?} */
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        /** @type {?} */
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            /** @type {?} */
            const row = rows[i];
            /** @type {?} */
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            /** @type {?} */
            const expanded = rowExpansions.get(row);
            if (row && expanded === 1) {
                if (isDetailFn) {
                    /** @type {?} */
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     * @param {?} scrollY
     * @return {?}
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     * @param {?} atRowIndex
     * @param {?} byRowHeight
     * @return {?}
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        /** @type {?} */
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     * @param {?} atIndex
     * @return {?}
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        /** @type {?} */
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     * @param {?} atIndexA
     * @param {?} atIndexB
     * @return {?}
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     * @private
     * @param {?} sum
     * @return {?}
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        /** @type {?} */
        let pos = -1;
        /** @type {?} */
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        /** @type {?} */
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            /** @type {?} */
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cache = {};
/** @type {?} */
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    /** @type {?} */
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    /** @type {?} */
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    /** @type {?} */
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
/** @type {?} */
const prefix = ((ɵ0))();
/**
 * @param {?} property
 * @return {?}
 */
function getVendorPrefixedName(property) {
    /** @type {?} */
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// browser detection and prefixing tools
/** @type {?} */
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
/** @type {?} */
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
/** @type {?} */
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
/** @type {?} */
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
/**
 * @param {?} styles
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new Map();
        this.rowExpansions = new Map();
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (/**
         * @param {?=} row
         * @param {?=} index
         * @return {?}
         */
        (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            /** @type {?} */
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : ((/** @type {?} */ (rowHeight)));
        });
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        (index, row) => {
            /** @type {?} */
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rows(val) {
        this._rows = val;
        this.rowExpansions.clear();
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offset(val) {
        this._offset = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get offset() {
        return this._offset;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get rowCount() {
        return this._rowCount;
    }
    /**
     * @return {?}
     */
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     * @return {?}
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     * @return {?}
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            }));
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            }));
        }
    }
    /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            /** @type {?} */
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    onBodyScroll(event) {
        /** @type {?} */
        const scrollYPos = event.scrollYPos;
        /** @type {?} */
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    updatePage(direction) {
        /** @type {?} */
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     * @return {?}
     */
    updateRows() {
        const { first, last } = this.indexes;
        /** @type {?} */
        let rowIndex = first;
        /** @type {?} */
        let idx = 0;
        /** @type {?} */
        const temp = [];
        this.rowIndexes.clear();
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            /** @type {?} */
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                /** @type {?} */
                const group = this.groupedRows[rowIndex];
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                /** @type {?} */
                const row = this.rows[rowIndex];
                if (row) {
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return (/** @type {?} */ (this.rowHeight));
    }
    /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    getGroupHeight(group) {
        /** @type {?} */
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    getRowAndDetailHeight(row) {
        /** @type {?} */
        let rowHeight = this.getRowHeight(row);
        /** @type {?} */
        const expanded = this.rowExpansions.get(row);
        // Adding detail row height if its expanded.
        if (expanded === 1) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    getRowsStyles(rows) {
        /** @type {?} */
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                /** @type {?} */
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            /** @type {?} */
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        /** @type {?} */
        const styles = { position: 'absolute' };
        /** @type {?} */
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     * @return {?}
     */
    hideIndicator() {
        setTimeout((/**
         * @return {?}
         */
        () => (this.loadingIndicator = false)), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    updateIndexes() {
        /** @type {?} */
        let first = 0;
        /** @type {?} */
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                /** @type {?} */
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: this.rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     * @return {?}
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        /** @type {?} */
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        /** @type {?} */
        let expanded = this.rowExpansions.get(row);
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            /** @type {?} */
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        expanded = expanded ^= 1;
        this.rowExpansions.set(row, expanded);
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions.clear();
        /** @type {?} */
        const rowExpanded = expanded ? 1 : 0;
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        for (const row of this.rows) {
            this.rowExpansions.set(row, rowExpanded);
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     * @return {?}
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    stylesByGroup(group) {
        /** @type {?} */
        const widths = this.columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            const totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            const offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    getRowExpanded(row) {
        if (this.rowExpansions.size === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.set(group, 1);
            }
        }
        /** @type {?} */
        const expanded = this.rowExpansions.get(row);
        return expanded === 1;
    }
    /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body',
                template: `
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'datatable-body'
                }
            }] }
];
/** @nocollapse */
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ScrollerComponent, { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableHeaderComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._columns) {
                /** @type {?} */
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        }));
    }
    /**
     * @return {?}
     */
    get innerWidth() {
        return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    /**
     * @return {?}
     */
    get headerHeight() {
        return this._headerHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        }));
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout((/**
         * @return {?}
         */
        () => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            /** @type {?} */
            const column = this._columns.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.$$id === model.$$id));
            if (column) {
                column.dragging = false;
            }
        }), 5);
    }
    /**
     * @return {?}
     */
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onColumnReordered({ prevIndex, newIndex, model }) {
        /** @type {?} */
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            /** @type {?} */
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            /** @type {?} */
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getColumn(index) {
        /** @type {?} */
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        /** @type {?} */
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        /** @type {?} */
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    calcNewSorts(column, prevValue, newValue) {
        /** @type {?} */
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        /** @type {?} */
        const sorts = this.sorts.map((/**
         * @param {?} s
         * @param {?} i
         * @return {?}
         */
        (s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        }));
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    /**
     * @return {?}
     */
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        this.cd.detectChanges();
    }
    /**
     * @param {?} group
     * @return {?}
     */
    calcStylesByGroup(group) {
        /** @type {?} */
        const widths = this._columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const totalDiff = widths.total - this.innerWidth;
            /** @type {?} */
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderComponent.propDecorators = {
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throttle a function
 * @param {?} func
 * @param {?} wait
 * @param {?=} options
 * @return {?}
 */
function throttle(func, wait, options) {
    options = options || {};
    /** @type {?} */
    let context;
    /** @type {?} */
    let args;
    /** @type {?} */
    let result;
    /** @type {?} */
    let timeout = null;
    /** @type {?} */
    let previous = 0;
    /**
     * @return {?}
     */
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        /** @type {?} */
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    });
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 * @param {?} duration
 * @param {?=} options
 * @return {?}
 */
function throttleable(duration, options) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: (/**
             * @return {?}
             */
            function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            })
        };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */
function getTotalFlexGrow(columns) {
    /** @type {?} */
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @return {?}
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    /** @type {?} */
    const columnsWidth = columnsTotalWidth(allColumns);
    /** @type {?} */
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    /** @type {?} */
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {?} colsByGroup
 * @param {?} maxWidth
 * @param {?} totalFlexGrow
 * @return {?}
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    /** @type {?} */
    const hasMinWidth = {};
    /** @type {?} */
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        /** @type {?} */
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    /** @type {?} */
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @param {?} startIdx
 * @param {?} allowBleed
 * @param {?=} defaultColWidth
 * @return {?}
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    /** @type {?} */
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((/**
     * @param {?} c
     * @return {?}
     */
    c => {
        return c.canAutoResize !== false;
    }));
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    /** @type {?} */
    let additionWidthPerColumn = 0;
    /** @type {?} */
    let exceedsWindow = false;
    /** @type {?} */
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    /** @type {?} */
    let remainingWidth = expectedWidth - contentWidth;
    /** @type {?} */
    const columnsProcessed = [];
    /** @type {?} */
    const remainingWidthLimit = 1;
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                /** @type {?} */
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 * @param {?} columnsToResize
 * @param {?} columnsProcessed
 * @return {?}
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        /** @type {?} */
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    /** @type {?} */
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SortDirection = {
    asc: 'asc',
    desc: 'desc',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the next sort direction
 * @param {?} sortType
 * @param {?} current
 * @return {?}
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 * @param {?} rows
 * @param {?} columns
 * @param {?} dirs
 * @return {?}
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     * @type {?}
     */
    const rowToIndexMap = new Map();
    rows.forEach((/**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    (row, index) => rowToIndexMap.set(row, index)));
    /** @type {?} */
    const temp = [...rows];
    /** @type {?} */
    const cols = columns.reduce((/**
     * @param {?} obj
     * @param {?} col
     * @return {?}
     */
    (obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }), {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    /** @type {?} */
    const cachedDirs = dirs.map((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    }));
    return temp.sort((/**
     * @param {?} rowA
     * @param {?} rowB
     * @return {?}
     */
    function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            /** @type {?} */
            const propA = valueGetter(rowA, prop);
            /** @type {?} */
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            /** @type {?} */
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableComponent {
    /**
     * @param {?} scrollbarHelper
     * @param {?} dimensionsHelper
     * @param {?} cd
     * @param {?} element
     * @param {?} differs
     * @param {?} columnChangesService
     * @param {?} configuration
     */
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * \@memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => x);
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     * @param {?} val
     * @return {?}
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     * @param {?} val
     * @return {?}
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    /**
     * @return {?}
     */
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     * @param {?} val
     * @return {?}
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     * @return {?}
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     * @return {?}
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */
    set offset(val) {
        this._offset = val;
    }
    /**
     * @return {?}
     */
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     * @return {?}
     */
    get isFixedHeader() {
        /** @type {?} */
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? (/** @type {?} */ (headerHeight)) !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     * @return {?}
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     * @return {?}
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     * @return {?}
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     * @return {?}
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     * @return {?}
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     * @return {?}
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     * @return {?}
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     * @return {?}
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     * @return {?}
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     * @return {?}
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     * @param {?} val
     * @return {?}
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     * @return {?}
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     * @return {?}
     */
    get allRowsSelected() {
        /** @type {?} */
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.selectAllRowsOnPage) {
            /** @type {?} */
            const indexes = this.bodyComponent.indexes;
            /** @type {?} */
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     * @return {?}
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        }));
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => this.translateColumns(v)));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     * @param {?} val
     * @return {?}
     */
    translateColumns(val) {
        if (val) {
            /** @type {?} */
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param {?} originalArray the original array passed via parameter
     * @param {?} groupBy
     * @return {?}
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        /** @type {?} */
        const map = new Map();
        /** @type {?} */
        let i = 0;
        originalArray.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        }));
        /** @type {?} */
        const addGroup = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => {
            return { key, value };
        });
        // convert map back to a simple array of objects
        return Array.from(map, (/**
         * @param {?} x
         * @return {?}
         */
        x => addGroup(x[0], x[1])));
    }
    /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     * @return {?}
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
    }
    /**
     * Window resize handler to update sizes.
     * @return {?}
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     * @param {?=} columns
     * @param {?=} forceIdx
     * @param {?=} allowBleed
     * @return {?}
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        /** @type {?} */
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @return {?}
     */
    recalculateDims() {
        /** @type {?} */
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            /** @type {?} */
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     * @return {?}
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     * @param {?} __0
     * @return {?}
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     * @param {?} event
     * @return {?}
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     * @param {?} event
     * @return {?}
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     * @param {?=} val
     * @return {?}
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const size = Math.ceil(this.bodyHeight / ((/** @type {?} */ (this.rowHeight))));
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     * @param {?=} val
     * @return {?}
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     * @param {?} __0
     * @return {?}
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        /** @type {?} */
        let idx;
        /** @type {?} */
        const cols = this._internalColumns.map((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        (c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        }));
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     * @param {?} __0
     * @return {?}
     */
    onColumnReorder({ column, newValue, prevValue }) {
        /** @type {?} */
        const cols = this._internalColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        c => {
            return Object.assign({}, c);
        }));
        if (this.swapColumns) {
            /** @type {?} */
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                /** @type {?} */
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                /** @type {?} */
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     * @param {?} event
     * @return {?}
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     * @param {?} event
     * @return {?}
     */
    onHeaderSelect(event) {
        if (this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            const first = this.bodyComponent.indexes.first;
            /** @type {?} */
            const last = this.bodyComponent.indexes.last;
            /** @type {?} */
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     * @param {?} event
     * @return {?}
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     * @param {?} event
     * @return {?}
     */
    onTreeAction(event) {
        /** @type {?} */
        const row = event.row;
        // TODO: For duplicated items this will not work
        /** @type {?} */
        const rowIndex = this._rows.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => r[this.treeToRelation] === event.row[this.treeToRelation]));
        this.treeAction.emit({ row, rowIndex });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        subscription => subscription.unsubscribe()));
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     * @private
     * @return {?}
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;-webkit-transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }] }
];
/** @nocollapse */
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-header',] }],
    isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-row',] }],
    isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.virtualized',] }],
    isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-horz',] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.single-selection',] }],
    isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailDirective, { static: false },] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderDirective, { static: false },] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableFooterDirective, { static: false },] }],
    bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableBodyComponent, { static: false },] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableHeaderComponent, { static: false },] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    throttleable(5),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
], DatatableComponent.prototype, "onWindowResize", null);
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableHeaderCellComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    /**
     * @return {?}
     */
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get sorts() {
        return this._sorts;
    }
    /**
     * @return {?}
     */
    get columnCssClasses() {
        /** @type {?} */
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                /** @type {?} */
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    /** @type {?} */
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        /** @type {?} */
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    /**
     * @return {?}
     */
    get minWidth() {
        return this.column.minWidth;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this.column.maxWidth;
    }
    /**
     * @return {?}
     */
    get width() {
        return this.column.width;
    }
    /**
     * @return {?}
     */
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */
    calcSortDir(sorts) {
        if (sorts && this.column) {
            /** @type {?} */
            const sort = sorts.find((/**
             * @param {?} s
             * @return {?}
             */
            (s) => {
                return s.prop === this.column.prop;
            }));
            if (sort)
                return sort.dir;
        }
    }
    /**
     * @return {?}
     */
    onSort() {
        if (!this.column.sortable)
            return;
        /** @type {?} */
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    /**
     * @param {?} sortDir
     * @return {?}
     */
    calcSortClass(sortDir) {
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn`;
        }
    }
}
DataTableHeaderCellComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderCellComponent.propDecorators = {
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.title',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    /**
     * @return {?}
     */
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get count() {
        return this._count;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @return {?}
     */
    get totalPages() {
        /** @type {?} */
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    /**
     * @return {?}
     */
    canPrevious() {
        return this.page > 1;
    }
    /**
     * @return {?}
     */
    canNext() {
        return this.page < this.totalPages;
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.selectPage(this.page - 1);
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.selectPage(this.page + 1);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    /**
     * @param {?=} page
     * @return {?}
     */
    calcPages(page) {
        /** @type {?} */
        const pages = [];
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = this.totalPages;
        /** @type {?} */
        const maxSize = 5;
        /** @type {?} */
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: (/** @type {?} */ (((/** @type {?} */ (num)))))
            });
        }
        return pages;
    }
}
DataTablePagerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTablePagerComponent.propDecorators = {
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressBarComponent {
}
ProgressBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Keys = {
    up: 38,
    down: 40,
    return: 13,
    escape: 27,
    left: 37,
    right: 39,
};
Keys[Keys.up] = 'up';
Keys[Keys.down] = 'down';
Keys[Keys.return] = 'return';
Keys[Keys.escape] = 'escape';
Keys[Keys.left] = 'left';
Keys[Keys.right] = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyRowComponent {
    /**
     * @param {?} differs
     * @param {?} scrollbarHelper
     * @param {?} cd
     * @param {?} element
     */
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerWidth(val) {
        if (this._columns) {
            /** @type {?} */
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get innerWidth() {
        return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @return {?}
     */
    get cssClass() {
        /** @type {?} */
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            /** @type {?} */
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                /** @type {?} */
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * @return {?}
     */
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    /**
     * @param {?} group
     * @return {?}
     */
    calcStylesByGroup(group) {
        /** @type {?} */
        const widths = this._columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            const totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            const offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isTargetRow = event.target === this._element;
        /** @type {?} */
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    recalculateColumns(val = this.columns) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    /**
     * @return {?}
     */
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }] }
];
/** @nocollapse */
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableRowWrapperComponent {
    /**
     * @param {?} cd
     * @param {?} differs
     */
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowIndex() {
        return this._rowIndex;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    /**
     * @return {?}
     */
    getGroupHeaderStyle() {
        /** @type {?} */
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || (!groupHeader || !groupHeader.template)">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }] }
];
/** @nocollapse */
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
DataTableRowWrapperComponent.propDecorators = {
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyCellComponent {
    /**
     * @param {?} element
     * @param {?} cd
     */
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get group() {
        return this._group;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowHeight() {
        return this._rowHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowIndex() {
        return this._rowIndex;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get row() {
        return this._row;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    /**
     * @return {?}
     */
    get sorts() {
        return this._sorts;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get treeStatus() {
        return this._treeStatus;
    }
    /**
     * @return {?}
     */
    get columnCssClasses() {
        /** @type {?} */
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                /** @type {?} */
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    /** @type {?} */
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get width() {
        return this.column.width;
    }
    /**
     * @return {?}
     */
    get minWidth() {
        return this.column.minWidth;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this.column.maxWidth;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.checkValueUpdates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    /**
     * @return {?}
     */
    checkValueUpdates() {
        /** @type {?} */
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            /** @type {?} */
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            /** @type {?} */
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isTargetCell = event.target === this._element;
        /** @type {?} */
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        /** @type {?} */
        const sort = sorts.find((/**
         * @param {?} s
         * @return {?}
         */
        (s) => {
            return s.prop === this.column.prop;
        }));
        if (sort) {
            return sort.dir;
        }
    }
    /**
     * @param {?} html
     * @return {?}
     */
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @return {?}
     */
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    calcLeftMargin(column, row) {
        /** @type {?} */
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }] }
];
/** @nocollapse */
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyCellComponent.propDecorators = {
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true },] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selected
 * @param {?} row
 * @param {?} comparefn
 * @return {?}
 */
function selectRows(selected, row, comparefn) {
    /** @type {?} */
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
/**
 * @param {?} selected
 * @param {?} rows
 * @param {?} index
 * @param {?} prevIndex
 * @param {?} comparefn
 * @return {?}
 */
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    /** @type {?} */
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        /** @type {?} */
        const row = rows[i];
        /** @type {?} */
        const greater = i >= prevIndex && i <= index;
        /** @type {?} */
        const lesser = i <= prevIndex && i >= index;
        /** @type {?} */
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Model() { }
if (false) {}
class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const multi = this.selectionType === SelectionType.multi;
        /** @type {?} */
        const multiClick = this.selectionType === SelectionType.multiClick;
        /** @type {?} */
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    onActivate(model, index) {
        const { type, event, row } = model;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (((/** @type {?} */ (event))).keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onKeyboardFocus(model) {
        const { keyCode } = (/** @type {?} */ (model.event));
        /** @type {?} */
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            /** @type {?} */
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    focusRow(rowElement, keyCode) {
        /** @type {?} */
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    getPrevNextRow(rowElement, keyCode) {
        /** @type {?} */
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            /** @type {?} */
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        /** @type {?} */
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            /** @type {?} */
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                /** @type {?} */
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        /** @type {?} */
        const rowId = this.rowIdentity(row);
        return selected.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            /** @type {?} */
            const id = this.rowIdentity(r);
            return id === rowId;
        }));
    }
}
DataTableSelectionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-selection',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTableSelectionComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISummaryColumn() { }
if (false) {}
/**
 * @param {?} cells
 * @return {?}
 */
function defaultSumFunc(cells) {
    /** @type {?} */
    const cellsWithValues = cells.filter((/**
     * @param {?} cell
     * @return {?}
     */
    cell => !!cell));
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some((/**
     * @param {?} cell
     * @return {?}
     */
    cell => typeof cell !== 'number'))) {
        return null;
    }
    return cellsWithValues.reduce((/**
     * @param {?} res
     * @param {?} cell
     * @return {?}
     */
    (res, cell) => res + cell));
}
/**
 * @param {?} cells
 * @return {?}
 */
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    /**
     * @private
     * @return {?}
     */
    updateInternalColumns() {
        this._internalColumns = this.columns.map((/**
         * @param {?} col
         * @return {?}
         */
        col => (Object.assign({}, col, { cellTemplate: col.summaryTemplate }))));
    }
    /**
     * @private
     * @return {?}
     */
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        col => !col.summaryTemplate))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            /** @type {?} */
            const cellsFromSingleColumn = this.rows.map((/**
             * @param {?} row
             * @return {?}
             */
            row => row[col.prop]));
            /** @type {?} */
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }] }
];
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            },] }
];
/**
 * Interface definition for INgxDatatableConfig global configuration
 * @record
 */
function INgxDatatableConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ClickType = {
    single: 'single',
    double: 'double',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column Type
 * @record
 */
function TableColumn() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SortPropDir() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function elementsFromPoint(x, y) {
    /** @type {?} */
    const elements = [];
    /** @type {?} */
    const previousPointerEvents = [];
    /** @type {?} */
    let current;
    // TODO: window.getComputedStyle should be used with inferred type (Element)
    /** @type {?} */
    let i;
    /** @type {?} */
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=swimlane-ngx-datatable.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/performance/performance.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/performance/performance.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id='header' *ngIf=\"mobile\">\r\n  <ion-toolbar style=\"--background: transparent;\r\n  --ion-color-base: transparent !important;     --border-width: 0px;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode='md' style=\"--color:#ffffff;max-height: 38px;\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"PageTitle\">{{getTitle()}}</ion-title>\r\n  </ion-toolbar>\r\n  <!-- <div id=\"Loader\" class='loader'>\r\n    <img src=\"../../assets/images/NAA.gif\" alt=\"Loader\" height=\"50\">\r\n  </div> -->\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"mobile\" fullscreen>\r\n  <div class=\"sec1\">\r\n    <ion-card >\r\n      <ion-card-content>\r\n        <div class=\"HeaderDiv\">\r\n          <div class=\"CountryDiv\">\r\n            <span class=\"contryItem\" (click)=\"OnItemClick(item)\" *ngFor=\"let item of CountryClasificationList\">\r\n              <p class=\"CountryP\" [ngStyle]=\"{color: selectedCountry==item? '#ffffff' : '#99acde'}\">{{item}}</p>\r\n              <span class=\"underScoreSpan\" *ngIf=\"selectedCountry == item\"></span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"dropDownDiv\" *ngIf=\"selectedIndexData\" style=\"padding: 0px 10px;\">\r\n          <ion-button (click)=\"openPicker()\" expand=\"block\" fill=\"clear\" shape=\"round\" class=\"dropDownBtn\">\r\n            <div class=\"innerdropDownDiv\">\r\n              <span class=\"innerdropDownsapn\" *ngIf=\"selectedIndexData && selectedIndexName\">{{indexNameReplace(selectedIndexName)}}\r\n                ({{selectedIndexData.indexCode}})</span> <span>\r\n                <ion-icon name=\"ios-arrow-down\"></ion-icon>\r\n              </span></div>\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedIndexData\" class=\"ChipsDiv\">\r\n    <ion-chip mode=\"ios\" outline=\"true\" (click)=\"onConstChipClick()\" [ngClass]=\"{'activeChip': selectedSection == 'construction'}\">\r\n      <ion-label>Construction</ion-label>\r\n    </ion-chip>\r\n    <ion-chip mode=\"ios\" outline=\"true\" *ngIf=\"key != 'Market View'\" (click)=\"onPerfChipClick()\" [ngClass]=\"{'activeChip': selectedSection == 'perfomance'}\">\r\n      <ion-label>Perfomance</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSection == 'perfomance' && key != 'Market View'\">\r\n    <div *ngIf=\"selectedIndexData\" class=\"descDiv\">\r\n      <p (click)=\"descModel = true;\">{{selectedIndexData.description}}</p>\r\n    </div>\r\n\r\n    <div class=\"PerfomanceDateDiv\" *ngIf=\"selectedIndexData && key != 'Market View'\">\r\n      <p>Perfomance: As of {{selectedIndexData.date}}</p>\r\n    </div>\r\n\r\n    <div class=\"DataCardsOuterDiv\" *ngIf=\"selectedIndexData && key != 'Market View'\">\r\n      <div class=\"DataCardsDiv\" *ngIf=\"selectedIndexData\">\r\n        <ion-card (click)=\"oncardClick('value')\" [ngClass]=\"{activeCard: selectedCard == 'value'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">Value</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.value)}}</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">Value</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.value)}}</p>\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('daily')\" [ngClass]=\"{activeCard: selectedCard == 'daily'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">Daily</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.dailyReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">Daily</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.dailyReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('ytd')\" [ngClass]=\"{activeCard: selectedCard == 'ytd'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">YTD</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.ytdReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">YTD</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.ytdReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('1 year')\" [ngClass]=\"{activeCard: selectedCard == '1 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">1 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y1Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">1 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y1Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('3 year')\" [ngClass]=\"{activeCard: selectedCard == '3 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">3 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y3Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">3 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y3Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('5 year')\" [ngClass]=\"{activeCard: selectedCard == '5 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">5 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y5Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">5 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y5Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('10 year')\" [ngClass]=\"{activeCard: selectedCard == '10 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">10 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y10Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">10 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y10Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('cumulative inception')\"\r\n          [ngClass]=\"{activeCard: selectedCard == 'cumulative inception'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\" style=\"text-align: center;\">Cumulative Inception</p>\r\n              </span>\r\n              <span class=\"DataValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(selectedIndexData.cumReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\" style=\"text-align: center;\">Cumulative Inception</p>\r\n              </span>\r\n              <span class=\"BMValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(SelBMIndData.cumReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('annualized inception')\"\r\n          [ngClass]=\"{activeCard: selectedCard == 'annualized inception'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\" style=\"text-align: center;\">Annualized Inception</p>\r\n              </span>\r\n              <span class=\"DataValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(selectedIndexData.annReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\" style=\"text-align: center;\">Annualized Inception</p>\r\n              </span>\r\n              <span class=\"BMValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(SelBMIndData.annReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2019')\" [ngClass]=\"{activeCard: selectedCard == '2019'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2019</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year1*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2019</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year1*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2018')\" [ngClass]=\"{activeCard: selectedCard == '2018'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2018</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year2*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2018</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year2*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2017')\" [ngClass]=\"{activeCard: selectedCard == '2017'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2017</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year3*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2017</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year3*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2016')\" [ngClass]=\"{activeCard: selectedCard == '2016'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2016</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year4*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2016</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year4*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2015')\" [ngClass]=\"{activeCard: selectedCard == '2015'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2015</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year5*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2015</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year5*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2014')\" [ngClass]=\"{activeCard: selectedCard == '2014'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2014</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year6*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2014</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year6*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2013')\" [ngClass]=\"{activeCard: selectedCard == '2013'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2013</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year7*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2013</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year7*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2012')\" [ngClass]=\"{activeCard: selectedCard == '2012'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2012</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year8*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2012</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year8*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2011')\" [ngClass]=\"{activeCard: selectedCard == '2011'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2011</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year9*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2011</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year9*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2010')\" [ngClass]=\"{activeCard: selectedCard == '2010'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2010</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year10*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2010</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year10*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"    \r\nheight: 5vh;\r\n/* height: calc(100vh - 765px);\r\nmax-height: 50px;\r\nmin-height: 35px; */\r\ndisplay: flex;\r\nflex-direction: column;\r\njustify-content: space-around;\" *ngIf=\"selectedIndexData\">\r\n      <div *ngIf=\"selectedIndexData\" class=\"FooterDataDiv\">\r\n        <span>\r\n          <p>First Value Date: {{selectedIndexData.firstValueDt}}</p>\r\n        </span>\r\n        <span>\r\n          <p>Launch Date: {{selectedIndexData.inception}}</p>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"FooterCredit\" *ngIf=\"selectedIndexData\">\r\n        <p>Calculated by S&P Dow Jones Indices</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"    position: absolute;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nbackground: rgba(0, 0, 0, 0.6);\" *ngIf=\"descModel\">\r\n      <ion-card style=\"    --background: #ffffff;\r\n  width: 85vw;\">\r\n        <ion-card-content>\r\n          <div *ngIf=\"selectedIndexData\">\r\n            <span style=\"position: absolute;\r\n        right: 10px;\r\n        top: 10px;\">\r\n              <ion-icon name=\"close-circle-outline\" style=\"font-size: 18px;\" (click)=\"onDescCloseClick()\"></ion-icon>\r\n            </span>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 16px;\r\n        font-family: Open Sans Bold; text-align: center; margin-top: 10px;\">{{selectedIndexName}}</p>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 14px;\r\n        font-family: Open Sans Regular; margin-top: 25px;\">{{selectedIndexData.description}}</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSection == 'construction' && selectedIndexData\">\r\n    <div style=\"    position: absolute;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nbackground: rgba(0, 0, 0, 0.6);\" *ngIf=\"descModel\">\r\n      <ion-card style=\"    --background: #ffffff;\r\n  width: 85vw;\">\r\n        <ion-card-content>\r\n          <div *ngIf=\"selectedIndexData\">\r\n            <span style=\"position: absolute;\r\n        right: 10px;\r\n        top: 10px;\">\r\n              <ion-icon name=\"close-circle-outline\" style=\"font-size: 18px;\" (click)=\"onDescCloseClick()\"></ion-icon>\r\n            </span>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 16px;\r\n        font-family: Open Sans Bold; text-align: center; margin-top: 10px;\">{{selectedIndexName}}</p>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 14px;\r\n        font-family: Open Sans Regular; margin-top: 25px;\">{{selectedIndexData.description}}</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngIf=\"(selectedIndexData && key != 'Market View') && (selectedIndexData.indexId !== 59 && selectedIndexData.indexId !== 60)\" class=\"consDescDiv\">\r\n      <p (click)=\"descModel = true;\">{{selectedIndexData.description}}</p>\r\n    </div>\r\n    \r\n    <div *ngIf=\"selectedIndexData.indexId !== 25 && selectedIndexData.indexId !== 23 && selectedIndexData.indexId !== 21 && selectedIndexData.indexId !== 19 && selectedIndexData.indexId !== 11 && selectedIndexData.indexId !== 8 && selectedIndexData.indexId !== 6 \r\n    && selectedIndexData.indexId !== 3 && selectedIndexData.indexId !== 17 && selectedIndexData.indexId !== 15 && selectedIndexData.indexId !== 102 && selectedIndexData.indexId !== 103 && selectedIndexData.indexId !== 105 && selectedIndexData.indexId !== 106\r\n    && selectedIndexData.indexId !== 66 && selectedIndexData.indexId !== 68 && selectedIndexData.indexId !== 67 && selectedIndexData.indexId !== 65 && selectedIndexData.indexId !== 64 && selectedIndexData.indexId !== 110 && selectedIndexData.indexId !== 109 && selectedIndexData.indexId !== 112 && selectedIndexData.indexId !== 111 \r\n    && selectedIndexData.indexId !== 76 && selectedIndexData.indexId !== 119 && selectedIndexData.indexId !== 115 && selectedIndexData.indexId !== 54 && selectedIndexData.indexId !== 130  && showMVCons\" style=\"    margin: 15px 0 5px 0;\">\r\n      <ion-card style=\"margin: 0px 0px 0px 20px;\r\n      border-radius: 20px 0px 0px 20px;\r\n      background: #fff;\">\r\n        <ion-card-content style=\"padding-inline-end: 0px; padding: 15px 0px 15px 15px;\">\r\n          <div style=\" padding-right: 15px; padding-left: 15px; background: #2a478a;\r\n          border-radius: 15px 0 0 15px;\" (click)=\"onYearClick()\">\r\n            <span style=\"    display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            align-items: center; padding: 5px 0 5px 0; \">\r\n              <p style=\"margin: 0px; color: #fff;\">Year</p>\r\n              <span style=\"display: inherit; align-items: center;\"><p style=\"margin: 0px; margin-right: 20px; font-size: 15px;\r\n                font-family: Open Sans SemiBold; color: #fff;\r\n                \">{{selectedYear}}</p>\r\n                <ion-icon name=\"ios-arrow-down\" style=\"color: #fff;\"></ion-icon></span>\r\n            </span>\r\n          </div>\r\n          <div *ngIf=\"dateList\" class=\"dateDiv\" style=\"overflow-x: auto;\r\n          overflow-y: hidden;display: flex;\r\n          flex-direction: row; margin:10px 5px 0px 5px;\">\r\n            <span *ngFor=\"let item of dateList\" style=\"    display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            background: #0c3b85;\r\n            color: #fff;\r\n            width: 35px;\r\n            height: 65px;\r\n            margin-right: 15px;\r\n            padding: 0 5px;\r\n            border-radius: 20px;\" [ngClass]=\"{activeDate: item.rebalanceDt == selectedDate}\" (click)=\"onDateClick(item.rebalanceDt)\">\r\n              <p>\r\n                {{getDate(item.rebalanceDt)}}\r\n              </p>\r\n              <p>\r\n                {{getMonth(item.rebalanceDt)}}\r\n              </p>\r\n            </span>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div style=\"display: flex;\r\n    justify-content: center;\r\n    align-items: center;\">\r\n      <ion-card style=\"width: 100%;     background: #ffffff;    max-height: 200px;     height: 29vh;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\">\r\n      <span *ngIf=\"pngLoader\" style=\"height: 100%;\r\n      width: 100%;\r\n      position: absolute;display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgb(150 150 150 / 0.5);\r\n    z-index: 2;\"><img style=\"    height: 30px;\r\nwidth: 30px;\" src=\"../../assets/images/NAA.gif\" alt=\"Loading\"></span>\r\n        <ion-card-content style=\"    margin: 0 10px;\r\n        padding-inline-start: 0px;\r\n        padding-inline-end: 0px;\r\n        width: 100%;\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 25\" src=\"../../assets/images/Const/HFELVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFELVT.png','HFELVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 23\" src=\"../../assets/images/Const/HFETT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFETT.png','HFETT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 21\" src=\"../../assets/images/Const/HFJLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJLVT.png','HFJLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 19\" src=\"../../assets/images/Const/HFJTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJTT.png','HFJTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 11\" src=\"../../assets/images/Const/HFLLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLLVT.png','HFLLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 8\" src=\"../../assets/images/Const/HFLTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLTT.png','HFLTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 6\" src=\"../../assets/images/Const/HFSLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSLVT.png','HFSLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 3\" src=\"../../assets/images/Const/HFSTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSTT.png','HFSTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 17\" src=\"../../assets/images/Const/HFULVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFULVT.png','HFULVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 15\" src=\"../../assets/images/Const/HFUTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUTT.png','HFUTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 102\" src=\"../../assets/images/Const/HFSTT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSTT50.png','HFSTT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 103\" src=\"../../assets/images/Const/HFSLVT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSLVT50.png','HFSLVT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 105\" src=\"../../assets/images/Const/HFLTT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLTT50.png','HFLTT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 106\" src=\"../../assets/images/Const/HFLLVT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLLVT50.png','HFLLVT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 66\" src=\"../../assets/images/Const/US_LC_ESG50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_ESG50_Index.png','HFLESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 68\" src=\"../../assets/images/Const/US_LC_DEF50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_DEF50_Index.png','HFLEDEF5')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 67\" src=\"../../assets/images/Const/US_LC_ENV50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_ENV50_Index.png','HFLENV')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 65\" src=\"../../assets/images/Const/US_LC_GOV50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_GOV50_Index.png','HFLGOV')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 64\" src=\"../../assets/images/Const/US_LC_SOC50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_SOC50_Index.png','HFLSOC')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 110\" src=\"../../assets/images/Const/HFUEDEF.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUEDEF.png','HFUEDEF')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 109\" src=\"../../assets/images/Const/HFUESG.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUESG.png','HFUESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 112\" src=\"../../assets/images/Const/HFJEDEF.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJEDEF.png','HFJEDEF')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 111\" src=\"../../assets/images/Const/HFJESG.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJESG.png','HFJESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 76\" src=\"../../assets/images/Const/HFUHYT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUHYT.png','HFUHYT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 119\" src=\"../../assets/images/Const/HFLL.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLL.png','HFLL')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 115\" src=\"../../assets/images/Const/HFLS.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLS.png','HFLS')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 130\" src=\"../../assets/images/Const/HFUEHYT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUEHYT.png','HFUEHYT')\">\r\n          <!-- <img *ngIf=\"selectedIndexData.indexId == 69\" src=\"../../assets/images/Const/NAA_Index Construction_ESG.svg\" (click)=\"onimgClick('www/assets/images/IndexConst/ESG-Const/NAA_Index Construction_ESG.png','HFLEAT5')\"> -->\r\n          <ion-text *ngIf=\"selectedIndexData.indexId !== 25 && selectedIndexData.indexId !== 23 && selectedIndexData.indexId !== 21 && selectedIndexData.indexId !== 19 && selectedIndexData.indexId !== 11 && selectedIndexData.indexId !== 8 && selectedIndexData.indexId !== 6 \r\n          && selectedIndexData.indexId !== 3 && selectedIndexData.indexId !== 17 && selectedIndexData.indexId !== 15 && selectedIndexData.indexId !== 102 && selectedIndexData.indexId !== 103 && selectedIndexData.indexId !== 105 && selectedIndexData.indexId !== 106\r\n          && selectedIndexData.indexId !== 66 && selectedIndexData.indexId !== 68 && selectedIndexData.indexId !== 67 && selectedIndexData.indexId !== 65 && selectedIndexData.indexId !== 64 && selectedIndexData.indexId !== 110 && selectedIndexData.indexId !== 109 && selectedIndexData.indexId !== 112 && selectedIndexData.indexId !== 111 \r\n          && selectedIndexData.indexId !== 76 && selectedIndexData.indexId !== 119 && selectedIndexData.indexId !== 115 && selectedIndexData.indexId !== 59 && selectedIndexData.indexId !== 60 && selectedIndexData.indexId !== 130 && !showMVCons\">\r\n            <h1 style=\"font-weight: bold;\r\n            font-family: Open Sans Bold;\r\n            color: #0e3980;\r\n            text-align: center;\">Comming Soon...</h1>\r\n          </ion-text>\r\n          <div *ngIf=\"selectedIndexData.indexId == 59\" (click)=\"onSvgClick('Globallead')\">\r\n            <svg version=\"1.1\" id=\"Globallead\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"200 50 1500 1000\" style=\"enable-background:new 200 50 1500 1000;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n  .st0 {\r\n    fill: #F0F3F4;\r\n  }\r\n\r\n  .st1 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  .st2 {\r\n    fill: #00AEEF;\r\n  }\r\n\r\n  .st3 {\r\n    fill: #204693;\r\n  }\r\n\r\n  .st4 {\r\n    fill: #00A204;\r\n  }\r\n\r\n  .st5 {\r\n    fill: url(#SVGID_1_);\r\n  }\r\n\r\n  .st6 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.8661;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st7 {\r\n    fill: #284D95;\r\n  }\r\n\r\n  .st8 {\r\n    fill: none;\r\n    stroke: #054BA4;\r\n    stroke-width: 0.9949;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st9 {\r\n    fill: url(#SVGID_2_);\r\n  }\r\n\r\n  .st10 {\r\n    fill: url(#SVGID_3_);\r\n  }\r\n\r\n  .st11 {\r\n    fill: url(#SVGID_4_);\r\n  }\r\n\r\n  .st12 {\r\n    fill: url(#SVGID_5_);\r\n  }\r\n\r\n  .st13 {\r\n    fill: url(#SVGID_6_);\r\n  }\r\n\r\n  .st14 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.8657;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st15 {\r\n    fill: url(#SVGID_7_);\r\n  }\r\n\r\n  .st16 {\r\n    fill: url(#SVGID_8_);\r\n  }\r\n\r\n  .st17 {\r\n    fill: url(#SVGID_9_);\r\n  }\r\n\r\n  .st18 {\r\n    fill: url(#SVGID_10_);\r\n  }\r\n\r\n  .st19 {\r\n    fill: url(#SVGID_11_);\r\n  }\r\n\r\n  .st20 {\r\n    fill: url(#SVGID_12_);\r\n  }\r\n\r\n  .st21 {\r\n    fill: url(#SVGID_13_);\r\n  }\r\n\r\n  .st22 {\r\n    fill: url(#SVGID_14_);\r\n  }\r\n\r\n  .st23 {\r\n    fill: url(#SVGID_15_);\r\n  }\r\n\r\n  .st24 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.9173;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st25 {\r\n    fill: url(#SVGID_16_);\r\n  }\r\n\r\n  .st26 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  .st27 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .st28 {\r\n    font-size: 26.2557px;\r\n  }\r\n\r\n  .st29 {\r\n    fill: url(#SVGID_17_);\r\n  }\r\n\r\n  .st30 {\r\n    fill: url(#SVGID_18_);\r\n  }\r\n\r\n  .st31 {\r\n    fill: #2b478f;\r\n  }\r\n\r\n  .st32 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .st33 {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .st34 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.9202;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st35 {\r\n    fill: url(#SVGID_19_);\r\n  }\r\n\r\n  .st36 {\r\n    fill: url(#SVGID_20_);\r\n  }\r\n\r\n  .st37 {\r\n    fill: url(#SVGID_21_);\r\n  }\r\n\r\n  .st38 {\r\n    fill: url(#SVGID_22_);\r\n  }\r\n\r\n  .st39 {\r\n    fill: url(#SVGID_23_);\r\n  }\r\n\r\n  .as-Of-date{\r\n    transform: matrix(1, 0, 0, 1, 1450, 250);\r\n    font-size: 25px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n\r\n<g>\r\n<g>\r\n  <text class=\"as-Of-date\">As of {{selectedIndexData.date}}</text>\r\n</g>\r\n        <g>\r\n        <line class=\"st24\" x1=\"1224.8\" y1=\"562.5\" x2=\"672.8\" y2=\"562.5\" />\r\n\r\n\t</g>\r\n        <linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"701.738\" y1=\"562.5\" x2=\"251.9701\" y2=\"562.5\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st5\" d=\"M305.2,509.2h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H305.2\r\n\t\tc-29.4,0-53.3-23.9-53.3-53.3v0C252,533.1,275.8,509.2,305.2,509.2z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 335.4045 546.1881)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha United</tspan><tspan x=\"-6.9\" y=\"43.2\" class=\"st26 st27 st28\">Kingdom Leading Index</tspan></text>\r\n\t</g>\r\n        <linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"711.2824\" x2=\"281.1431\" y2=\"711.2824\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st9\" d=\"M334.4,658h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4c-29.4,0-53.3-23.9-53.3-53.3\r\n\t\tv0C281.1,681.9,305,658,334.4,658z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 371.552 694.9708)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Japan</tspan><tspan x=\"46\" y=\"43.2\" class=\"st26 st27 st28\">Leading Index</tspan></text>\r\n\t</g>\r\n        <linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"413.7176\" x2=\"281.1431\" y2=\"413.7176\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st10\" d=\"M334.4,360.4h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4\r\n\t\tc-29.4,0-53.3-23.9-53.3-53.3v0C281.1,384.3,305,360.4,334.4,360.4z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 362.136 397.4059)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Europe</tspan><tspan x=\"15.1\" y=\"43.2\" class=\"st26 st27 st28\">Ex-UK Leading Index</tspan></text>\r\n\t</g>\r\n        <path class=\"st24\" d=\"M730.9,413.7h373.7c9.7,0,17.5,7.8,17.5,17.5v84.6c0,9.7,7.8,17.5,17.5,17.5h111.1\" />\r\n\r\n        <path class=\"st24\" d=\"M730.9,715.3h373.7c9.7,0,17.5-7.8,17.5-17.5v-84.6c0-9.7,7.8-17.5,17.5-17.5h111.1\" />\r\n\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 397.4059)\" class=\"st31 st32 st33\">{{Europe}}</text>\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 543.2706)\" class=\"st31 st32 st33\">{{UK}}</text>\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 697.8878)\" class=\"st31 st32 st33\">{{Japan}}</text>\r\n        <g>\r\n        <path class=\"st1\" d=\"M1614.9,615.8h-343.2c-29.4,0-53.3-23.9-53.3-53.3v0c0-29.4,23.9-53.3,53.3-53.3h343.2\r\n\t\t\tc29.4,0,53.3,23.9,53.3,53.3v0C1668.2,591.9,1644.3,615.8,1614.9,615.8z\" />\r\n\r\n\t</g>\r\n        <g>\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 1273.6868 549.1041)\"><tspan x=\"0\" y=\"0\" class=\"st7 st27 st28\">New Age Alpha Developed </tspan><tspan x=\"0.6\" y=\"43.2\" class=\"st7 st27 st28\">World Ex-US Leading Index</tspan></text>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>\r\n          </div>\r\n          <div *ngIf=\"selectedIndexData.indexId == 60\" (click)=\"onSvgClick('Globallow')\">\r\n            <svg version=\"1.1\" id=\"Globallow\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            viewBox=\"200 50 1500 1000\" style=\"enable-background:new 200 50 1500 1000;\" xml:space=\"preserve\">\r\n       <style type=\"text/css\">\r\n         .st0 {\r\n           fill: #F0F3F4;\r\n         }\r\n\r\n         .st1 {\r\n           fill: #D1D8DD;\r\n         }\r\n\r\n         .st2 {\r\n           fill: #00AEEF;\r\n         }\r\n\r\n         .st3 {\r\n           fill: #204693;\r\n         }\r\n\r\n         .st4 {\r\n           fill: #00A204;\r\n         }\r\n\r\n         .st5 {\r\n           fill: url(#SVGID_1_);\r\n         }\r\n\r\n         .st6 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.8661;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st7 {\r\n           fill: #284D95;\r\n         }\r\n\r\n         .st8 {\r\n           fill: none;\r\n           stroke: #054BA4;\r\n           stroke-width: 0.9949;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st9 {\r\n           fill: url(#SVGID_2_);\r\n         }\r\n\r\n         .st10 {\r\n           fill: url(#SVGID_3_);\r\n         }\r\n\r\n         .st11 {\r\n           fill: url(#SVGID_4_);\r\n         }\r\n\r\n         .st12 {\r\n           fill: url(#SVGID_5_);\r\n         }\r\n\r\n         .st13 {\r\n           fill: url(#SVGID_6_);\r\n         }\r\n\r\n         .st14 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.8657;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st15 {\r\n           fill: url(#SVGID_7_);\r\n         }\r\n\r\n         .st16 {\r\n           fill: url(#SVGID_8_);\r\n         }\r\n\r\n         .st17 {\r\n           fill: url(#SVGID_9_);\r\n         }\r\n\r\n         .st18 {\r\n           fill: url(#SVGID_10_);\r\n         }\r\n\r\n         .st19 {\r\n           fill: url(#SVGID_11_);\r\n         }\r\n\r\n         .st20 {\r\n           fill: url(#SVGID_12_);\r\n         }\r\n\r\n         .st21 {\r\n           fill: url(#SVGID_13_);\r\n         }\r\n\r\n         .st22 {\r\n           fill: url(#SVGID_14_);\r\n         }\r\n\r\n         .st23 {\r\n           fill: url(#SVGID_15_);\r\n         }\r\n\r\n         .st24 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.9173;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st25 {\r\n           fill: url(#SVGID_16_);\r\n         }\r\n\r\n         .st26 {\r\n           fill: #FFFFFF;\r\n         }\r\n\r\n         .st27 {\r\n           font-family: 'Open Sans SemiBold';\r\n         }\r\n\r\n         .st28 {\r\n           font-size: 26.2557px;\r\n         }\r\n\r\n         .st29 {\r\n           fill: url(#SVGID_17_);\r\n         }\r\n\r\n         .st30 {\r\n           fill: url(#SVGID_18_);\r\n         }\r\n\r\n         .st31 {\r\n           fill: #054BA4;\r\n         }\r\n\r\n         .st32 {\r\n           font-family: 'Open Sans SemiBold';\r\n         }\r\n\r\n         .st33 {\r\n           font-size: 25px;\r\n         }\r\n\r\n         .st34 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.9202;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st35 {\r\n           fill: url(#SVGID_19_);\r\n         }\r\n\r\n         .st36 {\r\n           fill: url(#SVGID_20_);\r\n         }\r\n\r\n         .st37 {\r\n           fill: url(#SVGID_21_);\r\n         }\r\n\r\n         .st38 {\r\n           fill: url(#SVGID_22_);\r\n         }\r\n\r\n         .st39 {\r\n           fill: url(#SVGID_23_);\r\n         }\r\n         .as-Of-date{\r\n          transform: matrix(1, 0, 0, 1, 1450, 250);\r\n          font-size: 25px;\r\n          font-family: Open Sans SemiBold;\r\n          fill: #2b478f;\r\n         }\r\n</style>\r\n       <g>\r\n        <g>\r\n          <text class=\"as-Of-date\">As of {{selectedIndexData.date}}</text>\r\n        </g>\r\n       <g>\r\n       <line class=\"st24\" x1=\"1224.8\" y1=\"562.5\" x2=\"672.8\" y2=\"562.5\" />\r\n\r\n               </g>\r\n       <linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"701.738\" y1=\"562.5\" x2=\"251.9701\" y2=\"562.5\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st5\" d=\"M305.2,509.2h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H305.2\r\n     c-29.4,0-53.3-23.9-53.3-53.3v0C252,533.1,275.8,509.2,305.2,509.2z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 335.4045 546.1881)\">\r\n       <tspan x=\"-13\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha United</tspan>\r\n       <tspan x=\"-18\" y=\"43.2\" class=\"st26 st27 st28\">Kingdom Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"711.2824\" x2=\"281.1431\" y2=\"711.2824\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st9\" d=\"M334.4,658h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4c-29.4,0-53.3-23.9-53.3-53.3\r\n     v0C281.1,681.9,305,658,334.4,658z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 371.552 694.9708)\">\r\n       <tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Japan</tspan>\r\n       <tspan x=\"15\" y=\"43.2\" class=\"st26 st27 st28\">Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"413.7176\" x2=\"281.1431\" y2=\"413.7176\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st10\" d=\"M334.4,360.4h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4\r\n     c-29.4,0-53.3-23.9-53.3-53.3v0C281.1,384.3,305,360.4,334.4,360.4z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 362.136 397.4059)\">\r\n       <tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Europe</tspan>\r\n       <tspan x=\"-5\" y=\"43.2\" class=\"st26 st27 st28\">Ex-UK Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <path class=\"st24\" d=\"M730.9,413.7h373.7c9.7,0,17.5,7.8,17.5,17.5v84.6c0,9.7,7.8,17.5,17.5,17.5h111.1\" />\r\n\r\n       <path class=\"st24\" d=\"M730.9,715.3h373.7c9.7,0,17.5-7.8,17.5-17.5v-84.6c0-9.7,7.8-17.5,17.5-17.5h111.1\" />\r\n\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 397.4059)\" class=\"st31 st32 st33\">{{Europe}}</text>\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 543.2706)\" class=\"st31 st32 st33\">{{UK}}</text>\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 697.8878)\" class=\"st31 st32 st33\">{{Japan}}</text>\r\n       <g>\r\n       <path class=\"st1\" d=\"M1614.9,615.8h-343.2c-29.4,0-53.3-23.9-53.3-53.3v0c0-29.4,23.9-53.3,53.3-53.3h343.2\r\n       c29.4,0,53.3,23.9,53.3,53.3v0C1668.2,591.9,1644.3,615.8,1614.9,615.8z\" />\r\n\r\n               </g>\r\n       <g>\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 1273.6868 549.1041)\">\r\n       <tspan x=\"-15\" y=\"0\" class=\"st7 st27 st28\">New Age Alpha Developed </tspan>\r\n       <tspan x=\"-28\" y=\"43.2\" class=\"st7 st27 st28\">World Ex-US Low Volatility Index</tspan>\r\n                   </text>\r\n                 </g>\r\n               </g>\r\n             </g>\r\n           </svg>\r\n          </div>\r\n          \r\n          <div *ngIf=\"showMVCons && selectedIndexData.indexId !== 54\" (click)=\"onSvgClick('RiskSelND')\">\r\n            <svg version=\"1.1\" id=\"RiskSelND\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 590 250\" xml:space=\"preserve\" width=\"100%\" height=\"100%\">\r\n<style type=\"text/css\">\r\n  #RiskSelND .nt0 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  #RiskSelND .nt1 {\r\n    fill: #324D91;\r\n  }\r\n\r\n  #RiskSelND .nt2 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  #RiskSelND .nt3 {\r\n    font-size: 7.5px;\r\n  }\r\n\r\n  #RiskSelND .nt4 {\r\n    fill: #324E90;\r\n  }\r\n\r\n  #RiskSelND .nt5 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  #RiskSelND .nt6 {\r\n    font-size: 6.27px;\r\n  }\r\n\r\n  #RiskSelND .nt7 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .nt8 {\r\n    font-size: 5px;\r\n  }\r\n\r\n  #RiskSelND .nt9 {\r\n    fill: #EB3C29;\r\n  }\r\n\r\n  #RiskSelND .nt10 {\r\n    fill: #60B647;\r\n  }\r\n\r\n  #RiskSelND .nt11 {\r\n    fill: #00B9EE;\r\n  }\r\n\r\n  #RiskSelND .nt12 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  #RiskSelND .nt13 {\r\n    font-size: 5.25px;\r\n  }\r\n\r\n  #RiskSelND .nt14 {\r\n    font-size: 11.28px;\r\n  }\r\n\r\n  #RiskSelND .nt15 {\r\n    font-size: 9px;\r\n  }\r\n\r\n  #RiskSelND .nt16 {\r\n    fill: #07AB51;\r\n  }\r\n\r\n  #RiskSelND .nt17 {\r\n    font-family: 'Open Sans ExtraBold';\r\n  }\r\n\r\n  #RiskSelND .nt18 {\r\n    fill: url(#SVGIDR_1_);\r\n  }\r\n\r\n  #RiskSelND .nt19 {\r\n    fill: url(#SVGIDR_2_);\r\n  }\r\n\r\n  #RiskSelND .nt20 {\r\n    fill: url(#SVGIDR_3_);\r\n  }\r\n\r\n  #RiskSelND .nt21 {\r\n    fill: #EB3C29;\r\n    stroke: #FFFFFF;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .nt22 {\r\n    fill: #60B647;\r\n    stroke: #FFFFFF;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .clsToptxt4, .clsLowtxt4 {\r\n    text-anchor: start;\r\n    font-size: 14px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .clstxt1 {\r\n    text-anchor: start;\r\n    font-size: 15px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .clsToptxt, .clsLowtxt, .clstxt {\r\n    text-anchor: start;\r\n    font-size: 16px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .as-of-date{\r\n    transform: matrix(1, 0, 0, 1, 500, 0);\r\n    font-size: 8px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n    <g>\r\n      <text class=\"as-of-date\">As of {{Rbdisplaydate(selectedDate)}}</text>\r\n    </g>\r\n<g class=\"glines g1\">\r\n            <text transform=\"matrix(1 0 0 1 287.76 25.875)\" class=\"nt4 nt2 nt12\">2 or 3</text>\r\n            <path class=\"nt5\" d=\"M312.3,18.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\tC308.1,20.4,310,18.5,312.3,18.5 M312.3,17.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\tC317.5,19.9,315.2,17.5,312.3,17.5z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M312.3,27.4c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C317,25.3,314.9,27.4,312.3,27.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M312,23h-1.4v-0.6h1.4V21h0.6v1.4h1.4V23h-1.4v1.4H312V23z\" />\r\n\r\n  </g>\r\n            <path class=\"nt0\" d=\"M572.8,34.4c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9H447c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC573.3,36.4,573.1,35.4,572.8,34.4z\" />\r\n\r\n            <path class=\"nt7\" d=\"M221.7,101h54.8c1.7,0,3.2-1.4,3.2-3.1c0,0,0,0,0,0V32c0-1.7,1.4-3.2,3.1-3.2c0,0,0,0,0,0h171.7\" />\r\n\r\n  <!--<text transform=\"matrix(1 0 0 1 488.5681 30.7431)\" class=\"nt1 nt2 nt3\">NAA Leading Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 488.5681 30.7431)\" class=\"clsToptxt clstxt clsTop clsTop nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start\" y=\"-4\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"8\" x=\"0\">Leading Index</tspan>\r\n  </text>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"468.1\" cy=\"28.5\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 460.115 30.275)\" class=\"nt5 nt2 nt6\">100%</text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(553, -91)\" (click)=\"riskSelDev(topOne)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n        </g>\r\n</g>\r\n<g class=\"gOut gOut-2 clsTop clsLow\">\r\n            <g>\r\n            <g>\r\n            <path class=\"nt0\" d=\"M573.3,90h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\t\tC574.4,90,573.9,90,573.3,90z\" />\r\n\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"489.9\" cy=\"71.6\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 483.6002 67.815)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 483.5999 79.495)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            </g>\r\n            <!--<text transform=\"matrix(1 0 0 1 507.1555 66.8151)\" class=\"nt1 nt2 nt3\">NAA Leading Index</text>\r\n  <text transform=\"matrix(1 0 0 1 507.1557 80.9499)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 507.1555 66.8151)\" class=\"clsToptxt clstxt1 clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;  \" y=\"-5\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"7\" x=\"0\">Leading Index</tspan>\r\n            </text>\r\n            <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(569, -45)\" (click)=\"riskSelDev(topTwoTop)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n            <!-- </g> -->\r\n            <text transform=\"matrix(1 0 0 1 507.1557 80.9499)\" class=\"clsLowtxt clstxt1 clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;  \" y=\"0\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"7\" x=\"0\">Low Vol Index</tspan>\r\n            </text>\r\n            <!-- Bottom -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(573, -14)\" (click)=\"riskSelDev(topTwoLow)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n            <!-- </g> -->\r\n          </g>\r\n            <path class=\"nt7\" d=\"M361,53.7h83.3c1.7,0,3.2,1.4,3.2,3.2v11.9c0,1.7,1.4,3.2,3.1,3.2c0,0,0,0,0,0h131.5\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 382.14 59.665)\" class=\"nt4 nt2 nt8\">Currently &gt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 382.14 65.665)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <path class=\"nt5\" d=\"M361,49.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\tC356.9,51.4,358.7,49.5,361,49.5 M361,48.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\tC366.2,50.8,363.9,48.5,361,48.5z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M361,58.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\t\tC365.7,56.3,363.6,58.4,361,58.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M360.9,53.9h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V53.9z\" />\r\n\r\n\t\t</g>\r\n            <circle class=\"nt4\" cx=\"383.3\" cy=\"53.7\" r=\"1.3\" />\r\n\r\n\t</g>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M333,68.3v43.3c0,1.7-1.4,3.2-3.2,3.2l0,0H220.8\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 283.58 122.895)\" class=\"nt11 nt2 nt13\">H-Factor<tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"300.4,116.5 301.6,115.1 299.1,115.1 \t\t\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 289.22 111.025)\" class=\"nt4 nt2 nt12\">1</text>\r\n            <path class=\"nt10\" d=\"M300.2,113.3c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\tC304.9,111.2,302.8,113.3,300.2,113.3z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M300.2,104.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC296,106.3,297.9,104.5,300.2,104.5 M300.2,103.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\t\tC305.4,105.8,303,103.5,300.2,103.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M299.9,109h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V109z\" />\r\n\r\n\t\t</g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"333\" cy=\"68.3\" r=\"24.3\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 326.3991 62.5927)\">\r\n            <tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan>\r\n            <tspan x=\"-5.3\" y=\"7.5\" class=\"nt5 nt2 nt6\">Leading</tspan>\r\n            <tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan>\r\n      </text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n<g>\r\n            <g>\r\n    <!--<g class=\"gOut gOut-3 clsLow\">\r\n      <path class=\"nt0\" d=\"M585.5,114.6c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n    c0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n    c5.8,0,10.5-4.6,10.7-10.4C585.5,120.1,585.5,117.4,585.5,114.6L585.5,114.6L585.5,114.6z\" />\r\n      <g>\r\n      <text transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>\r\n      <g>\r\n      <circle class=\"nt4\" cx=\"496\" cy=\"114.7\" r=\"13.9\" />\r\n      <text transform=\"matrix(1 0 0 1 488.07 116.435)\" class=\"nt5 nt2 nt6\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>-->\r\n            <g class=\"glines g4\">\r\n            <text transform=\"matrix(1 0 0 1 419.94 120.645)\" class=\"nt4 nt2 nt8\">Currently &gt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 419.94 126.645)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <line class=\"nt7\" x1=\"483.5\" y1=\"115\" x2=\"393.5\" y2=\"115\" />\r\n\r\n            <g>\r\n            <circle class=\"nt10\" cx=\"391.6\" cy=\"115\" r=\"4.7\" />\r\n\r\n            <path class=\"nt5\" d=\"M391.6,110.8c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC387.4,112.6,389.3,110.8,391.6,110.8 M391.6,109.8c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tC396.8,112.1,394.4,109.8,391.6,109.8z\" />\r\n\r\n            <path class=\"nt5\" d=\"M391.4,115.1H390v-0.6h1.4V113h0.6v1.4h1.5v0.6h-1.4v1.4h-0.6L391.4,115.1z\" />\r\n\r\n      </g>\r\n            <circle class=\"nt4\" cx=\"421.2\" cy=\"115\" r=\"1.3\" />\r\n\r\n    </g>\r\n  </g>\r\n</g>\r\n<g>\r\n            <g>\r\n            <g class=\"glines g2 g3\">\r\n            <path class=\"nt7\" d=\"M333,68.3v43.3c0,1.7-1.4,3.2-3.2,3.2l0,0H220.8\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 283.58 122.895)\" class=\"nt11 nt2 nt13\">H-Factor<tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"300.4,116.5 301.6,115.1 299.1,115.1 \t\t\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 289.22 111.025)\" class=\"nt4 nt2 nt12\">1</text>\r\n            <path class=\"nt10\" d=\"M300.2,113.3c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\tC304.9,111.2,302.8,113.3,300.2,113.3z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M300.2,104.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC296,106.3,297.9,104.5,300.2,104.5 M300.2,103.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\t\tC305.4,105.8,303,103.5,300.2,103.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M299.9,109h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V109z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <g class=\"glines g2 g3 clsTop4\">\r\n            <circle class=\"nt4\" cx=\"333\" cy=\"68.3\" r=\"24.3\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 326.3991 62.5928)\"><tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan><tspan x=\"-5.3\" y=\"7.5\" class=\"nt5 nt2 nt6\">Leading</tspan><tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan></text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"glines g3\">\r\n            <path class=\"nt7\" d=\"M437.7,115V86c0-1.7-1.4-3.2-3.2-3.2H362\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 381.89 88.785)\" class=\"nt4 nt2 nt8\">Currently &lt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 381.89 94.785)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <path class=\"nt5\" d=\"M361,78.7c2.3,0,4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\tC356.9,80.6,358.7,78.7,361,78.7 M361,77.7c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0\r\n\t\t\tC366.2,80,363.9,77.7,361,77.7z\" />\r\n\r\n            <g>\r\n            <path class=\"nt9\" d=\"M361,87.6c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC365.7,85.5,363.6,87.5,361,87.6z\" />\r\n\r\n            <path class=\"nt5\" d=\"M360.1,83.1v-0.7h1.8v0.7H360.1z\" />\r\n\r\n    </g>\r\n            <circle class=\"nt4\" cx=\"382.7\" cy=\"82.9\" r=\"1.3\" />\r\n\r\n  </g>\r\n            <g class=\"gOut gOut-3 clsLow\">\r\n            <path class=\"nt0\" d=\"M585.5,114.6c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t  c0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t  c5.8,0,10.5-4.6,10.7-10.4C585.5,120.1,585.5,117.4,585.5,114.6L585.5,114.6L585.5,114.6z\" />\r\n\r\n            <line class=\"nt7\" x1=\"483.5\" y1=\"115\" x2=\"437.2\" y2=\"115\" />\r\n\r\n            <g>\r\n        <!--<text  transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"clstxt clsTop clscenter nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;\" y=\"-4\">\r\n            <tspan dy=\"0\" x=\"0\"></tspan>\r\n            <tspan dy=\"8\" x=\"0\"></tspan>\r\n        </text>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"497.2\" cy=\"114.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 488.07 116.4351)\" class=\"nt5 nt2 nt6\">100%</text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(575, -1)\" (click)=\"riskSelDev(topThree)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n        </g>\r\n      </g>\r\n  </g>\r\n</g>\r\n<g class=\"gOut gOut-4 clsTop\">\r\n            <g>\r\n            <path class=\"nt0\" d=\"M573.3,139.3h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\tC574.4,139.3,573.9,139.3,573.3,139.3z\" />\r\n\r\n            <g>\r\n          <!--<text transform=\"matrix(1 0 0 1 508.46 153.365)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 508.46 153.365)\" class=\"clsLowtxt clstxt clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;\" y=\"-5\">\r\n            <tspan dy=\"0\" x=\"0\"></tspan>\r\n            <tspan dy=\"7\" x=\"0\"></tspan>\r\n          </text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(573, 41)\" (click)=\"riskSelDev(topFour)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n            <text transform=\"matrix(1 0 0 1 508.46 168.395)\" class=\"clstxt clsTop nt1 nt2 nt3\">Cash</text>\r\n        </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"489.9\" cy=\"157.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 483.6067 153.745)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 483.6067 165.665)\" class=\"nt5 nt2 nt6\">50%</text>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M582.2,158H459.1c-1.7,0-3.2-1.4-3.2-3.2v0.3c0-1.7-1.4-3.2-3.2-3.2h-65\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 408.6 143.345)\" class=\"nt4 nt2 nt8\">Currently &lt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 408.6 149.345)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <g>\r\n            <path class=\"nt9\" d=\"M389,156.7c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\tC393.7,154.6,391.6,156.7,389,156.7z\" />\r\n\r\n            <path class=\"nt5\" d=\"M389,147.9c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2l0,0\r\n\t\t\tC384.8,149.7,386.7,147.9,389,147.9 M389,146.9c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2l0,0\r\n\t\t\tC394.2,149.2,391.9,146.9,389,146.9z\" />\r\n\r\n            <path class=\"nt5\" d=\"M388.1,152.3v-0.7h1.8v0.7H388.1z\" />\r\n\r\n    </g>\r\n            <circle class=\"nt4\" cx=\"409.2\" cy=\"152.1\" r=\"1.3\" />\r\n\r\n  </g>\r\n</g>\r\n<g>\r\n            <g class=\"glines g5 g4\">\r\n            <path class=\"nt7\" d=\"M329.3,170.2h34c1.7,0,3.2-1.4,3.2-3.2l0,0V132\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 368.9398 162.975)\" class=\"nt4 nt2 nt8\">LEI increasing in any of </text>\r\n            <text transform=\"matrix(1 0 0 1 368.9398 168.975)\" class=\"nt4 nt2 nt8\">the prior 3 months</text>\r\n            <g>\r\n            <path class=\"nt10\" d=\"M329.3,174.9c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC334,172.8,331.9,174.8,329.3,174.9z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M329.3,166c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\t\tC325.2,167.8,327,166,329.3,166 M329.3,165c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0\r\n\t\t\t\t\tC334.5,167.3,332.2,165,329.3,165z\" />\r\n\r\n            <path class=\"nt5\" d=\"M329.1,170.3h-1.4v-0.6h1.4v-1.5h0.6v1.5h1.4v0.6h-1.4v1.5h-0.6V170.3z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <text transform=\"matrix(1 0 0 1 336.4898 177.285)\" class=\"nt11 nt2 nt8\">H-Factor <tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"352.5,171.8 353.8,170.4 351.2,170.4\" />\r\n\r\n            <circle class=\"nt4\" cx=\"366.5\" cy=\"160.8\" r=\"1.3\" />\r\n\r\n  </g>\r\n  \r\n            <g class=\"glines g5 g4 clsLow4\">\r\n            <circle class=\"nt4\" cx=\"366.5\" cy=\"132\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 360.1188 126.3105)\"><tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan><tspan x=\"-5.1\" y=\"7.5\" class=\"nt5 nt2 nt6\">Low Vol</tspan><tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan></text>\r\n  </g>\r\n            <g class=\"glines g4 g5 g6\">\r\n            <path class=\"nt7\" d=\"M293.1,183.8h-29.3c-1.7,0-3.2-1.4-3.2-3.2l0,0v-49.3c0-1.7-1.3-3-3-3l0,0h-36.5\" />\r\n\r\n        <!--<g style=\"transform:rotate(180deg)\">\r\n      <text transform=\"matrix(0 -1 1 0 256.75 166.045)\" class=\"nt4 nt2 nt12\">0</text>\r\n        </g>-->\r\n            <g>\r\n            <path class=\"nt5\" d=\"M254.5,151.6c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\tC250.3,153.5,252.2,151.6,254.5,151.6 M254.5,150.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tc0,0,0,0,0,0C259.7,152.9,257.4,150.6,254.5,150.6z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M254.5,160.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\t\t\tC259.2,158.3,257.1,160.4,254.5,160.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M254.2,156.1h-1.4v-0.6h1.4V154h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V156.1z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"302.6\" cy=\"183.8\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 298.14 181.355)\" class=\"nt5 nt2 nt6\">LEI</text>\r\n            <text transform=\"matrix(1 0 0 1 288.91 188.875)\" class=\"nt5 nt2 nt6\">Indicator</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g>\r\n            <g class=\"glines g4 g5 g6\">\r\n            <path class=\"nt7\" d=\"M293.1,183.8h-29.3c-1.7,0-3.2-1.4-3.2-3.2l0,0v-49.3c0-1.7-1.3-3-3-3l0,0h-36.5\" />\r\n\r\n            <g>\r\n            <text y=\"167\" x=\"252\" class=\"nt4 nt2 nt12\">0</text>\r\n      </g>\r\n            <g>\r\n            <path class=\"nt5\" d=\"M254.5,151.6c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\tC250.3,153.5,252.2,151.6,254.5,151.6 M254.5,150.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tc0,0,0,0,0,0C259.7,152.9,257.4,150.6,254.5,150.6z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M254.5,160.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\t\t\tC259.2,158.3,257.1,160.4,254.5,160.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M254.2,156.1h-1.4v-0.6h1.4V154h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V156.1z\" />\r\n\r\n          </g>\r\n        </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"302.6\" cy=\"183.8\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 298.14 181.355)\" class=\"nt5 nt2 nt6\">LEI</text>\r\n            <text transform=\"matrix(1 0 0 1 288.91 188.875)\" class=\"nt5 nt2 nt6\">Indicator</text>\r\n        </g>\r\n      </g>\r\n            <g class=\"gOut gOut-5\">\r\n            <path class=\"nt0\" d=\"M572.8,195c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9H447c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\tC573.3,192.9,573.1,194,572.8,195z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 489.85 203.325)\" class=\"nt1 nt2 nt3\" style=\"font-size:6pt !important\">Cash</text>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M455.5,201.1h-30.1c-1.7,0-3.2-1.4-3.2-3.1c0,0,0,0,0,0v-4.7c0-1.7-1.4-3.2-3.2-3.2h-87.6\" />\r\n\r\n            <g>\r\n            <path class=\"nt9\" d=\"M332.2,194.5c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC336.8,192.4,334.7,194.5,332.2,194.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M332.2,185.6c2.3,0,4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2\r\n\t\t\t\tC328,187.5,329.8,185.6,332.2,185.6L332.2,185.6 M332.2,184.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2\r\n\t\t\t\tc2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0C337.3,187,335,184.7,332.2,184.6z\" />\r\n\r\n            <path class=\"nt5\" d=\"M331.2,190v-0.7h1.8v0.7H331.2z\" />\r\n\r\n        </g>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 200)\">LEI decreasing 3 consecutive months</text>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 206)\">and latest read is lower than the</text>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 212)\">read 6 months prior.</text>\r\n            <circle class=\"nt4\" cx=\"344.2\" cy=\"190.1\" r=\"1.3\" />\r\n\r\n      </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"468.1\" cy=\"200.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 460.0878 202.6312)\" class=\"nt5 nt2 nt6\">100%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n<g>\r\n            <g class=\"\" id=\"gDecisions\">\r\n            <line class=\"nt4\" style=\"stroke: rgb(43, 71, 143);stroke-width: 2px;transform: translate(72px, 115px);\" x1=\"10\" x2=\"23\"></line>\r\n            <polygon class=\"nt4\" points=\"107.1,115 94.7,110.4 94.7,119.5 \t\t\" />\r\n\r\n            <circle class=\"nt4\" cx=\"43.3\" cy=\"115\" r=\"38.8\" />\r\n\r\n            <g id=\"txtDecisions\">\r\n            <text transform=\"matrix(1 0 0 1 20.2 111.455)\" class=\"nt5 nt2 nt14\"></text>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 117.83 26.145)\" class=\"nt4 nt2 nt15\">Current LEI </text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 36.945)\" class=\"nt16 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 36.945)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 36.945)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 36.945)\" class=\"nt9 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 36.945)\" class=\"nt4 nt2 nt15\">) 6 month</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 47.745)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 58.545)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 58.545)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 58.545)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 58.545)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 58.545)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 58.545)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 58.545)\" class=\"nt4 nt2 nt15\">)</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 101.985)\" class=\"nt4 nt2 nt15\">Current VIX</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 112.785)\" class=\"nt16 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 112.785)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 112.785)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 112.785)\" class=\"nt9 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 112.785)\" class=\"nt4 nt2 nt15\">) 200 day</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 123.585)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 134.3849)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 134.3849)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 134.3849)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 134.3849)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 134.3849)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 134.3849)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 134.3849)\" class=\"nt4 nt2 nt15\">)</text>\r\n            <g [ngStyle]=\"{'display': (valueHtop == 'HFJTT' || valueHtop == 'HFUTT' || valueHtop == 'HFETT') ? 'none' : 'block' }\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current SPTR</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFETT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">Europe BMI</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFUTT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">UK BMI</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFJTT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">Japan BMI</text>\r\n        </g>\r\n            <g class=\"mvbtm\" [ngStyle]=\"{'transform': (valueHtop == 'HFJTT' || valueHtop == 'HFUTT' || valueHtop == 'HFETT') ? 'translate(0px, 10px)' : 'translate(0px, 0px)' }\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 188.615)\" class=\"nt16 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 188.615)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 188.615)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 188.615)\" class=\"nt9 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 188.615)\" class=\"nt4 nt2 nt15\">) 200 day</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 199.415)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 210.215)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 210.215)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 210.215)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 210.215)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 210.215)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 210.215)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 210.215)\" class=\"nt4 nt2 nt15\">)</text>\r\n          </g>\r\n        </g>\r\n            <g>\r\n            <g class=\"GreyRBox\">\r\n            <path class=\"nt0\" d=\"M269.8,202.5c-46.9-48.9-46.9-126.1,0-175.1l0,0c5.3-5.3,5.3-13.9,0-19.2c-2.5-2.6-6-4-9.6-4h-33.8l0,0\r\n\t\t\tc-7.2,0-14,3.6-18,9.5l0,0c-40.4,61.4-40.4,141,0,202.4l0,0c4,6,10.8,9.6,18,9.5l0,0h33.8c7.5,0,13.6-6.1,13.6-13.6\r\n\t\t\tC273.8,208.6,272.4,205.1,269.8,202.5L269.8,202.5z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"269.48\" y1=\"3.255\" x2=\"314.9736\" y2=\"3.255\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n          </g>\r\n            <g class=\"\" id=\"LEI\">\r\n            <path class=\"nt20\" d=\"M265.4,23c-6.1,6.1-11.5,12.7-16.3,19.9l0,0c-5,7.5-9.1,15.5-12.4,23.9c-2,5.1-6.9,8.5-12.3,8.5h-25.9\r\n\t\t\tc-4.3,0-7.8-3.5-7.8-7.7c0-0.7,0.1-1.4,0.3-2.1c2.2-7.7,5-15.2,8.3-22.5l0,0c0.2-0.4,0.3-0.7,0.5-1.1c3.9-8.5,8.5-16.7,13.8-24.5\r\n\t\t\tc2.9-4.2,7.7-6.8,12.9-6.7h33.8c4,0,7.3,3.3,7.3,7.3C267.6,19.7,266.8,21.6,265.4,23z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 206.93 38.685)\" class=\"nt5 nt2 nt6\">Economic</text>\r\n            <text transform=\"matrix(1 0 0 1 205.22 46.2049)\" class=\"nt5 nt2 nt6\">Conditions</text>\r\n            <text transform=\"matrix(1 0 0 1 202.61 53.725)\" class=\"nt5 nt2 nt6\">LEI Indicator</text>\r\n            <g *ngIf=\"LEI==0\" style=\"transform: translate(-10px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"244.5\" cy=\"22\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M243.6,22.2v-0.7h1.9v0.7H243.6z\" />\r\n\r\n        </g>\r\n            <g *ngIf=\"LEI==1\" style=\"transform: translate(5px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"230\" cy=\"22\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M229.8,22.1h-1.4v-0.6h1.4V20h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V22.1z\" />\r\n\r\n        </g>\r\n            <g *ngIf=\"LEI==1 && (selectedIndexData.indexId == 4 || selectedIndexData.indexId == 9 || selectedIndexData.indexId == 107 || selectedIndexData.indexId == 104)\" class=\"info-eco\" style=\"cursor:pointer\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"253px\" y=\"12px\" width=\"11\" height=\"11\"\r\n                 viewBox=\"0 0 172 172\" style=\" fill:#000000;\">\r\n            <g transform=\"translate(4.73,4.73) scale(0.945,0.945)\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"none\" stroke-linecap=\"butt\" stroke-linejoin=\"none\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g stroke=\"#cccccc\" stroke-width=\"10\" stroke-linejoin=\"round\"><path d=\"M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z\" fill=\"#2b478f\"></path><path d=\"M78.83333,78.83333h14.33333v39.41667h-14.33333zM94.95833,59.125c0,4.94142 -4.01692,8.95833 -8.95833,8.95833c-4.94142,0 -8.95833,-4.01692 -8.95833,-8.95833c0,-4.94142 4.01692,-8.95833 8.95833,-8.95833c4.94142,0 8.95833,4.01692 8.95833,8.95833z\" fill=\"#ffffff\"></path></g><path d=\"M0,172v-172h172v172z\" fill=\"none\" stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"></path><g stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"><path d=\"M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z\" fill=\"#2b478f\"></path><path d=\"M78.83333,78.83333h14.33333v39.41667h-14.33333zM94.95833,59.125c0,4.94142 -4.01692,8.95833 -8.95833,8.95833c-4.94142,0 -8.95833,-4.01692 -8.95833,-8.95833c0,-4.94142 4.01692,-8.95833 8.95833,-8.95833c4.94142,0 8.95833,4.01692 8.95833,8.95833z\" fill=\"#ffffff\"></path></g><path d=\"\" fill=\"none\" stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"></path></g></g>\r\n          </svg>\r\n            <g class=\"tooltip-i\" style=\"display:none;\">\r\n            <rect class=\"st6\" x=\"160\" y=\"-44\" rx=\"10\" width=\"145\" height=\"50\" style=\"fill:#2b478f\"></rect>\r\n            <text x=\"167\" y=\"-33\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">When benchmark interest rate is zero,</text>\r\n            <text x=\"167\" y=\"-23\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">the unscheduled rebalance will be</text>\r\n            <text x=\"167\" y=\"-13\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">triggered when the LEI Indicator</text>\r\n            <text x=\"167\" y=\"-3\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">changes sign</text>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g class=\"\" id=\"VIX\">\r\n            <path class=\"nt18\" d=\"M228.2,115c0-6.8,0.5-13.6,1.6-20.3c0.9-5.7-3-11-8.7-11.9c-0.5-0.1-1.1-0.1-1.6-0.1h-23.1\r\n\t\t\tc-5.2,0-9.6,3.8-10.3,9c-2.1,15.5-2.1,31.2,0,46.7c0.7,5.2,5.1,9,10.3,9h23.1c5.7,0,10.4-4.6,10.4-10.4c0-0.5,0-1.1-0.1-1.6\r\n\t\t\tC228.8,128.6,228.2,121.8,228.2,115z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"275.7619\" y1=\"75.4052\" x2=\"352.538\" y2=\"75.4052\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n            <text transform=\"matrix(1 0 0 1 196.09 111.065)\" class=\"nt5 nt2 nt6\">Market</text>\r\n            <text transform=\"matrix(1 0 0 1 191.34 118.585)\" class=\"nt5 nt2 nt6\">Sentiment</text>\r\n            <text transform=\"matrix(1 0 0 1 202.12 126.105)\" class=\"nt5 nt2 nt6\">VIX</text>\r\n            <g *ngIf=\"VIX==0\" style=\"transform: translate(-7px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"214.6\" cy=\"94.2\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M213.7,94.4v-0.7h1.8v0.7H213.7z\" />\r\n\r\n            </g>\r\n            <g *ngIf=\"VIX==1\" style=\"transform: translate(7px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"200\" cy=\"94.2\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M199.8,94.4h-1.4v-0.6h1.4v-1.4h0.7v1.4h1.4v0.6h-1.4v1.4h-0.6L199.8,94.4z\" />\r\n\r\n            </g>\r\n          </g>\r\n            <g class=\"\" id=\"SP\">\r\n            <path class=\"nt19\" d=\"M265.4,207c-6.1-6.1-11.5-12.7-16.3-19.9l0,0c-5-7.5-9.1-15.5-12.4-23.9c-2-5.1-6.9-8.5-12.3-8.5h-25.9\r\n\t\t\tc-4.3,0-7.8,3.5-7.8,7.7c0,0.7,0.1,1.4,0.3,2.1c2.2,7.7,5,15.2,8.3,22.5l0,0c0.2,0.4,0.3,0.7,0.5,1.1c3.9,8.5,8.5,16.7,13.8,24.5\r\n\t\t\tc2.9,4.2,7.7,6.8,12.9,6.7h33.8c4,0,7.3-3.3,7.3-7.3C267.6,210.2,266.8,208.3,265.4,207z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"275.7619\" y1=\"-68.8151\" x2=\"352.538\" y2=\"-68.8151\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n            <text transform=\"matrix(1 0 0 1 214.33 188.405)\" class=\"nt5 nt2 nt6\">Market</text>\r\n            <text transform=\"matrix(1 0 0 1 207.41 195.925)\" class=\"nt5 nt2 nt6\">Momentum</text>\r\n            <g *ngIf=\"SP==0\" style=\"transform: translate(-7px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"221.8\" cy=\"166.5\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M220.9,166.7V166h1.8v0.7L220.9,166.7z\" />\r\n\r\n            </g>\r\n            <g *ngIf=\"SP==1\" style=\"transform: translate(7px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"207.3\" cy=\"166.5\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M207.1,166.6h-1.4V166h1.4v-1.4h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V166.6z\" />\r\n\r\n            </g>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g *ngIf=\"(selectedIndexData.indexId == 4 || selectedIndexData.indexId == 9 || selectedIndexData.indexId == 107 || selectedIndexData.indexId == 104)\" class=\"info-eco\" style=\"cursor:pointer\">\r\n              <text x=\"115\" y=\"242\" style=\"fill: #284d95;font-family: 'Open Sans SemiBold';font-size: 5pt;font-style: italic;\">When benchmark interest rate is zero, the unscheduled rebalance will be triggered when the LEI Indicator changes sign.</text>\r\n            <!--<text x=\"115\" y=\"260\" style=\"fill: #284d95;font-family: 'OpenSans-Semibold';font-size: 5pt;font-style: italic;\"></text>-->\r\n      </g>\r\n</svg>\r\n          </div>\r\n          <div *ngIf=\"selectedIndexData.indexId == 54\" (click)=\"onSvgClick('dvSvgGlobal')\">\r\n            <svg version=\"1.1\" class=\"devWorld\" id=\"dvSvgGlobal\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"-20 -10 680 330\" style=\"width:100%;height:100%\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n  .devWorld .st0 {\r\n    fill: #324D91;\r\n  }\r\n\r\n  .devWorld .st1 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .devWorld .st2 {\r\n    font-size: 9px;\r\n  }\r\n\r\n  .devWorld .st3 {\r\n    fill: #00B9EE;\r\n  }\r\n\r\n  .devWorld .st4 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  .devWorld .st5 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  .devWorld .st6 {\r\n    enable-background: new;\r\n  }\r\n\r\n  .devWorld .st7 {\r\n    font-size: 7px;\r\n  }\r\n\r\n  .devWorld .st8 {\r\n    fill: #324E90;\r\n  }\r\n\r\n  .devWorld .st9 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  .devWorld .st10 {\r\n    font-size: 6.27px;\r\n  }\r\n\r\n  .devWorld .st11 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .devWorld .st12 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  .devWorld .st13 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .devWorld .st14 {\r\n    fill: #D3D8DC;\r\n  }\r\n\r\n  .as-of-date{\r\n    transform: matrix(1, 0, 0, 1, 500, 10);\r\n    font-size: 8px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n<text transform=\"matrix(1 0 0 1 97.6956 18)\" class=\"st0 st1 st2\">New Age Alpha</text>\r\n<text transform=\"matrix(1 0 0 1 97.6956 30.5466)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('US LC')\">U.S. Large-Cap RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 124.3055 85.6264)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('US SC')\">U.S. Small-Cap RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 135.1755 137.9064)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('Europe')\">Europe Ex U.K. RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 134.6202 192.2264)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('UK')\">U.K. RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 121.3547 244.1064)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('Japan')\">Japan RiskSelect Index</text>\r\n<!-- Large Cap -->\r\n<g>\r\n  <text class=\"as-of-date\">As of {{Rbdisplaydate(selectedDate)}}</text>\r\n</g>\r\n<g class=\"LC\">\r\n            <g class=\"LC-1\" *ngIf=\"sLC == '1'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"8\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"16.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-2\" *ngIf=\"sLC == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 143.1757 62.6562)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(216, -24)\" (click)=\"riskSelDev('US LC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115.3185 63.9688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-3\" *ngIf=\"sLC == '3'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"8\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"16.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-4\" *ngIf=\"sLC == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 143.1757 62.6562)\" class=\"st6\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- Bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(216, -24)\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115.3185 63.9688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n    </g>\r\n            <g class=\"LC-5\" *ngIf=\"sLC == '5'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"13\" class=\"st0 st1 st7\">Cash</tspan></text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  </g>\r\n<!--Japan -->\r\n<g class=\"Japan\">\r\n<g class=\"Ja-1\" *ngIf=\"sJAP == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-4\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"4\">Leading Index</text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"Ja-2\" *ngIf=\"sJAP == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-13\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-5\">Leading Index</text>\r\n    </g>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"5\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"13\">Low Vol Index</text>\r\n    </g>\r\n    <!-- Bottom  -->\r\n            <g class=\"rounded-hover\" transform=\"translate(209, 188)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M98.7,267.3h224.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115 263.5)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115 275.5)\" class=\"st9 st1 st10\">50%</text>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"Ja-3\" *ngIf=\"sJAP == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-4\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"4\">Low Vol Index</text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"Ja-4\" *ngIf=\"sJAP == '4'\">\r\n\t\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-13\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-5\">Low Vol Index</text>\r\n    </g>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"9\">Cash</text>\r\n    </g>\r\n    <!-- Bottom  -->\r\n    <!--<g class=\"rounded-hover\" transform=\"translate(209, 188)\" (click)=\"riskSelDev('Japan')\">\r\n      <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n           viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n      <g>\r\n      <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n      <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n    </g>-->\r\n  </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115 263.5)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115 275.5)\" class=\"st9 st1 st10\">50%</text>\r\n    </g>\r\n            <path class=\"st11\" d=\"M98.7,267.3h224.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"Ja-5\" *ngIf=\"sJAP == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n</g>\r\n<!-- UK -->\r\n<g class=\"UK\">\r\n<g class=\"uk-1\" *ngIf=\"sUK == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st6\"><tspan x=\"0\" y=\"-4\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"4.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"uk-2\" *ngIf=\"sUK == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9754 202.7214)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9756 221.8562)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(225, 133)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1185 209.7688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1185 223.1688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n  <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n  </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-3\" *ngIf=\"sUK == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st6\"><tspan x=\"0\" y=\"-4\" class=\"st0 st1 st7\">NAA UK Low </tspan><tspan x=\"0\" y=\"4.4\" class=\"st0 st1 st7\">Vol Index</tspan></text>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-4\" *ngIf=\"sUK == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9754 202.7214)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK Low</tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Vol Index</tspan></text>\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9756 221.8562)\" class=\"st4\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- Bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(225, 133)\" (click)=\"riskSelDev('UK')\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n                  </g>\r\n                 </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1185 209.7688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1185 223.1688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n  <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n  </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-5\" *ngIf=\"sUK == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n</g>\r\n<!-- Europe -->\r\n<g class=\"Europe\">\r\n            <g class=\"Eu-1\" *ngIf=\"sEUR == '1'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <path class=\"st13\" d=\"M136.8,161.2\" />\r\n\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.3955 162.6213)\" class=\"st9 st1 st10\">100%</text>\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"-4\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"4\">Leading Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-2\" *ngIf=\"sEUR == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <path class=\"st13\" d=\"M136.8,161.2\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-13\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-5\">Leading Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"5\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"13\">Low Vol Index</text>\r\n        <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 82)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143 157)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 143 170)\" class=\"st9 st1 st10\">50%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n            <path class=\"st11\" d=\"M130,161.2h250.9\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-3\" *ngIf=\"sEUR == '3'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"-4\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"4\">Low Vol Index</text>\r\n          <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n          </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n    </g>\r\n            <g class=\"Eu-4\" *ngIf=\"sEUR == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-13\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-5\">Low Vol Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"8\">Cash</text>\r\n        <!-- Bottom -->\r\n        <!--<g class=\"rounded-hover\" transform=\"translate(228, 82)\" (click)=\"riskSelDev('Europe')\">\r\n          <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n               viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n          <g>\r\n          <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n          <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n        </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143 157)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 143 170)\" class=\"st9 st1 st10\">50%</text>\r\n        </g>\r\n      </g>\r\n            <path class=\"st11\" d=\"M130,161.2h250.9\" />\r\n\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n      \r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-5\" *ngIf=\"sEUR == '5'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n        </g>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n  </g>\r\n<!-- Small Cap -->\r\n<g class=\"SC\">\r\n<g class=\"SC-1\" *ngIf=\"sSC == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n\t\t          </g>\r\n\t            </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n                  <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US SC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n                  </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n                  </g>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"SC-2\" *ngIf=\"sSC == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9613 96.5714)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9615 115.7062)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 27)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1043 103.6188)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1043 117.0188)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-3\" *ngIf=\"sSC == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g style=\"cursor:pointer\">\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-4\" *ngIf=\"sSC == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9613 96.5714)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9615 115.7062)\" class=\"st4\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(227, 27)\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n                    </g>\r\n                    </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1043 103.6188)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1043 117.0188)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-5\" *ngIf=\"sSC == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n</g>\r\n<g>\r\n            <g>\r\n            <path class=\"st14\" d=\"M511.8,178.8H394.2c-10.1,0-18.3-8.2-18.3-18.3v0c0-10.1,8.2-18.3,18.3-18.3h117.7\r\n\t\t\tc10.1,0,18.3,8.2,18.3,18.3v0C530.1,170.6,521.9,178.8,511.8,178.8z\" />\r\n\r\n\t</g>\r\n            <g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 394.8491 155.9445)\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st2\">New Age Alpha Developed </tspan><tspan x=\"8.9\" y=\"14.8\" class=\"st0 st1 st2\">World RiskSelect Index</tspan></text>\r\n                </g>\r\n            <g><text style=\"fill: #284d95; font-family: 'OpenSans-Semibold' ;font-size: 6pt;font-style: italic;\" transform=\"matrix(1 0 0 1 80 308)\">* The regional allocations are calculated based on the proportional regional weights in the S&amp;P Developed World BMI Index</text></g>\r\n              </g>\r\n</g>\r\n</svg>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!selectedIndexData\" style=\"\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\">\r\n    <img src=\"../../assets/images/NAA.gif\" alt=\"Loader\" style=\"    height: 35px;\">\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-content id=\"content\" class=\"content\" *ngIf=\"mobile\">\r\n  \r\n  <div class=\"HeaderDiv\">\r\n    <div class=\"CountryDiv\">\r\n      <span (click)=\"OnItemClick(item)\" class=\"contryItem\" *ngFor=\"let item of CountryClasificationList\">\r\n        <p class=\"CountryP\" [ngStyle]=\"{'color': selectedCountry == item ? '#ffffff' : '#99acde', 'zoom':selectedCountry == item ? '110%' : '100%' , 'margin-top' : selectedCountry == item ? '5px' : '10px'}\">{{item}}</p>\r\n        <span class=\"underScoreSpan\" *ngIf=\"selectedCountry == item\"></span>\r\n      </span>\r\n    </div>\r\n    <div class=\"dropDownDiv\">\r\n      <ion-button (click)=\"openPicker()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <div class=\"innerdropDownDiv\">\r\n          <span class=\"innerdropDownsapn\" *ngIf=\"selectedIndexData && selectedIndexName\">{{selectedIndexName}} ({{selectedIndexData.indexCode}})</span> <span><ion-icon name=\"ios-arrow-down\"></ion-icon></span></div>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div *ngIf=\"selectedIndexData\">\r\n        <div class=\"PerfomanceDateDiv\">\r\n          <span class=\"perfLabel\">Perfomance</span>\r\n          <span class=\"perfDate\">As of {{selectedIndexData.date}}</span>\r\n        </div>\r\n          <div id='desc' class=\"descDiv\">\r\n            <p>\r\n            <span id=\"desc\" [innerHTML]='description'>\r\n            </span>\r\n            </p>\r\n          </div>\r\n          <div class=\"DataDiv\" id='DataDiv'>\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Value</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.value)}}</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Daily</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.dailyReturn*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">YTD</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.ytdReturn*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">1 Year</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y1Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">3 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y3Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">5 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y5Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text >\r\n                <p class=\"rowHeading\">10 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y10Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Cumulative Inception</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.cumReturns*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Annualized Inception</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.annReturns*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">2019</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.year1*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">2018</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.year2*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2017</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year3*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2016</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year4*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2015</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year5*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2014</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year6*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2013</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year7*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2012</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year8*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2011</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year9*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n            \r\n              <ion-item lines='none'>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2010</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year10*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n          </div>\r\n          <div class=\"FooterDiv\">\r\n          <div class=\"Footer1\">\r\n            <p>First Value Date: <span style=\"color: #394e8b;\">{{selectedIndexData.firstValueDt}}</span></p>\r\n            <p>Launch Date: <span style=\"color: #394e8b;\">{{selectedIndexData.inception}}</span></p>\r\n          </div>\r\n          <div class=\"Footer2\">\r\n            <p>Calculated by S&P Dow Jones Indices</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>-->\r\n\r\n<ion-content forceOverscroll=false *ngIf=\"!mobile\">\r\n  <!-- <app-index></app-index> -->\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js":
/*!**********************************************************!*\
  !*** ./node_modules/save-svg-as-png/lib/saveSvgAsPng.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var out$ =  true && exports ||  true && {} || this || window;
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return out$;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  out$.default = out$;

  var xmlNs = 'http://www.w3.org/2000/xmlns/';
  var xhtmlNs = 'http://www.w3.org/1999/xhtml';
  var svgNs = 'http://www.w3.org/2000/svg';
  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';
  var urlRegex = /url\(["']?(.+?)["']?\)/;
  var fontFormats = {
    woff2: 'font/woff2',
    woff: 'font/woff',
    otf: 'application/x-font-opentype',
    ttf: 'application/x-font-ttf',
    eot: 'application/vnd.ms-fontobject',
    sfnt: 'application/font-sfnt',
    svg: 'image/svg+xml'
  };

  var isElement = function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  };
  var requireDomNode = function requireDomNode(el) {
    if (!isElement(el)) throw new Error('an HTMLElement or SVGElement is required; got ' + el);
  };
  var requireDomNodePromise = function requireDomNodePromise(el) {
    return new Promise(function (resolve, reject) {
      if (isElement(el)) resolve(el);else reject(new Error('an HTMLElement or SVGElement is required; got ' + el));
    });
  };
  var isExternal = function isExternal(url) {
    return url && url.lastIndexOf('http', 0) === 0 && url.lastIndexOf(window.location.host) === -1;
  };

  var getFontMimeTypeFromUrl = function getFontMimeTypeFromUrl(fontUrl) {
    var formats = Object.keys(fontFormats).filter(function (extension) {
      return fontUrl.indexOf('.' + extension) > 0;
    }).map(function (extension) {
      return fontFormats[extension];
    });
    if (formats) return formats[0];
    console.error('Unknown font format for ' + fontUrl + '. Fonts may not be working correctly.');
    return 'application/octet-stream';
  };

  var arrayBufferToBase64 = function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }return window.btoa(binary);
  };

  var getDimension = function getDimension(el, clone, dim) {
    var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return typeof v === 'undefined' || v === null || isNaN(parseFloat(v)) ? 0 : v;
  };

  var getDimensions = function getDimensions(el, clone, width, height) {
    if (el.tagName === 'svg') return {
      width: width || getDimension(el, clone, 'width'),
      height: height || getDimension(el, clone, 'height')
    };else if (el.getBBox) {
      var _el$getBBox = el.getBBox(),
          x = _el$getBBox.x,
          y = _el$getBBox.y,
          _width = _el$getBBox.width,
          _height = _el$getBBox.height;

      return {
        width: x + _width,
        height: y + _height
      };
    }
  };

  var reEncode = function reEncode(data) {
    return decodeURIComponent(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      var c = String.fromCharCode('0x' + p1);
      return c === '%' ? '%25' : c;
    }));
  };

  var uriToBlob = function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], { type: mimeString });
  };

  var query = function query(el, selector) {
    if (!selector) return;
    try {
      return el.querySelector(selector) || el.parentNode && el.parentNode.querySelector(selector);
    } catch (err) {
      console.warn('Invalid CSS selector "' + selector + '"', err);
    }
  };

  var detectCssFont = function detectCssFont(rule, href) {
    // Match CSS font-face rules to external links.
    // @font-face {
    //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
    // }
    var match = rule.cssText.match(urlRegex);
    var url = match && match[1] || '';
    if (!url || url.match(/^data:/) || url === 'about:blank') return;
    var fullUrl = url.startsWith('../') ? href + '/../' + url : url.startsWith('./') ? href + '/.' + url : url;
    return {
      text: rule.cssText,
      format: getFontMimeTypeFromUrl(fullUrl),
      url: fullUrl
    };
  };

  var inlineImages = function inlineImages(el) {
    return Promise.all(Array.from(el.querySelectorAll('image')).map(function (image) {
      var href = image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || image.getAttribute('href');
      if (!href) return Promise.resolve(null);
      if (isExternal(href)) {
        href += (href.indexOf('?') === -1 ? '?' : '&') + 't=' + new Date().valueOf();
      }
      return new Promise(function (resolve, reject) {
        var canvas = document.createElement('canvas');
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = href;
        img.onerror = function () {
          return reject(new Error('Could not load ' + href));
        };
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.getContext('2d').drawImage(img, 0, 0);
          image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL('image/png'));
          resolve(true);
        };
      });
    }));
  };

  var cachedFonts = {};
  var inlineFonts = function inlineFonts(fonts) {
    return Promise.all(fonts.map(function (font) {
      return new Promise(function (resolve, reject) {
        if (cachedFonts[font.url]) return resolve(cachedFonts[font.url]);

        var req = new XMLHttpRequest();
        req.addEventListener('load', function () {
          // TODO: it may also be worth it to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet)
          var fontInBase64 = arrayBufferToBase64(req.response);
          var fontUri = font.text.replace(urlRegex, 'url("data:' + font.format + ';base64,' + fontInBase64 + '")') + '\n';
          cachedFonts[font.url] = fontUri;
          resolve(fontUri);
        });
        req.addEventListener('error', function (e) {
          console.warn('Failed to load font from: ' + font.url, e);
          cachedFonts[font.url] = null;
          resolve(null);
        });
        req.addEventListener('abort', function (e) {
          console.warn('Aborted loading font from: ' + font.url, e);
          resolve(null);
        });
        req.open('GET', font.url);
        req.responseType = 'arraybuffer';
        req.send();
      });
    })).then(function (fontCss) {
      return fontCss.filter(function (x) {
        return x;
      }).join('');
    });
  };

  var cachedRules = null;
  var styleSheetRules = function styleSheetRules() {
    if (cachedRules) return cachedRules;
    return cachedRules = Array.from(document.styleSheets).map(function (sheet) {
      try {
        return { rules: sheet.cssRules, href: sheet.href };
      } catch (e) {
        console.warn('Stylesheet could not be loaded: ' + sheet.href, e);
        return {};
      }
    });
  };

  var inlineCss = function inlineCss(el, options) {
    var _ref = options || {},
        selectorRemap = _ref.selectorRemap,
        modifyStyle = _ref.modifyStyle,
        modifyCss = _ref.modifyCss,
        fonts = _ref.fonts,
        excludeUnusedCss = _ref.excludeUnusedCss;

    var generateCss = modifyCss || function (selector, properties) {
      var sel = selectorRemap ? selectorRemap(selector) : selector;
      var props = modifyStyle ? modifyStyle(properties) : properties;
      return sel + '{' + props + '}\n';
    };
    var css = [];
    var detectFonts = typeof fonts === 'undefined';
    var fontList = fonts || [];
    styleSheetRules().forEach(function (_ref2) {
      var rules = _ref2.rules,
          href = _ref2.href;

      if (!rules) return;
      Array.from(rules).forEach(function (rule) {
        if (typeof rule.style != 'undefined') {
          if (query(el, rule.selectorText)) css.push(generateCss(rule.selectorText, rule.style.cssText));else if (detectFonts && rule.cssText.match(/^@font-face/)) {
            var font = detectCssFont(rule, href);
            if (font) fontList.push(font);
          } else if (!excludeUnusedCss) {
            css.push(rule.cssText);
          }
        }
      });
    });

    return inlineFonts(fontList).then(function (fontCss) {
      return css.join('\n') + fontCss;
    });
  };

  var downloadOptions = function downloadOptions() {
    if (!navigator.msSaveOrOpenBlob && !('download' in document.createElement('a'))) {
      return { popup: window.open() };
    }
  };

  out$.prepareSvg = function (el, options, done) {
    requireDomNode(el);

    var _ref3 = options || {},
        _ref3$left = _ref3.left,
        left = _ref3$left === undefined ? 0 : _ref3$left,
        _ref3$top = _ref3.top,
        top = _ref3$top === undefined ? 0 : _ref3$top,
        w = _ref3.width,
        h = _ref3.height,
        _ref3$scale = _ref3.scale,
        scale = _ref3$scale === undefined ? 1 : _ref3$scale,
        _ref3$responsive = _ref3.responsive,
        responsive = _ref3$responsive === undefined ? false : _ref3$responsive,
        _ref3$excludeCss = _ref3.excludeCss,
        excludeCss = _ref3$excludeCss === undefined ? false : _ref3$excludeCss;

    return inlineImages(el).then(function () {
      var clone = el.cloneNode(true);
      clone.style.backgroundColor = (options || {}).backgroundColor || el.style.backgroundColor;

      var _getDimensions = getDimensions(el, clone, w, h),
          width = _getDimensions.width,
          height = _getDimensions.height;

      if (el.tagName !== 'svg') {
        if (el.getBBox) {
          if (clone.getAttribute('transform') != null) {
            clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
          }
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.appendChild(clone);
          clone = svg;
        } else {
          console.error('Attempted to render non-SVG element', el);
          return;
        }
      }

      clone.setAttribute('version', '1.1');
      clone.setAttribute('viewBox', [left, top, width, height].join(' '));
      if (!clone.getAttribute('xmlns')) clone.setAttributeNS(xmlNs, 'xmlns', svgNs);
      if (!clone.getAttribute('xmlns:xlink')) clone.setAttributeNS(xmlNs, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');

      if (responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute('width', width * scale);
        clone.setAttribute('height', height * scale);
      }

      Array.from(clone.querySelectorAll('foreignObject > *')).forEach(function (foreignObject) {
        foreignObject.setAttributeNS(xmlNs, 'xmlns', foreignObject.tagName === 'svg' ? svgNs : xhtmlNs);
      });

      if (excludeCss) {
        var outer = document.createElement('div');
        outer.appendChild(clone);
        var src = outer.innerHTML;
        if (typeof done === 'function') done(src, width, height);else return { src: src, width: width, height: height };
      } else {
        return inlineCss(el, options).then(function (css) {
          var style = document.createElement('style');
          style.setAttribute('type', 'text/css');
          style.innerHTML = '<![CDATA[\n' + css + '\n]]>';

          var defs = document.createElement('defs');
          defs.appendChild(style);
          clone.insertBefore(defs, clone.firstChild);

          var outer = document.createElement('div');
          outer.appendChild(clone);
          var src = outer.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');

          if (typeof done === 'function') done(src, width, height);else return { src: src, width: width, height: height };
        });
      }
    });
  };

  out$.svgAsDataUri = function (el, options, done) {
    requireDomNode(el);
    return out$.prepareSvg(el, options).then(function (_ref4) {
      var src = _ref4.src,
          width = _ref4.width,
          height = _ref4.height;

      var svgXml = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + src));
      if (typeof done === 'function') {
        done(svgXml, width, height);
      }
      return svgXml;
    });
  };

  out$.svgAsPngUri = function (el, options, done) {
    requireDomNode(el);

    var _ref5 = options || {},
        _ref5$encoderType = _ref5.encoderType,
        encoderType = _ref5$encoderType === undefined ? 'image/png' : _ref5$encoderType,
        _ref5$encoderOptions = _ref5.encoderOptions,
        encoderOptions = _ref5$encoderOptions === undefined ? 0.8 : _ref5$encoderOptions,
        canvg = _ref5.canvg;

    var convertToPng = function convertToPng(_ref6) {
      var src = _ref6.src,
          width = _ref6.width,
          height = _ref6.height;

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (canvg) canvg(canvas, src);else context.drawImage(src, 0, 0);

      var png = void 0;
      try {
        png = canvas.toDataURL(encoderType, encoderOptions);
      } catch (e) {
        if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name === 'SecurityError') {
          console.error('Rendered SVG images cannot be downloaded in this browser.');
          return;
        } else throw e;
      }
      if (typeof done === 'function') done(png, canvas.width, canvas.height);
      return Promise.resolve(png);
    };

    if (canvg) return out$.prepareSvg(el, options).then(convertToPng);else return out$.svgAsDataUri(el, options).then(function (uri) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
          return resolve(convertToPng({
            src: image,
            width: image.width,
            height: image.height
          }));
        };
        image.onerror = function () {
          reject('There was an error loading the data URI as an image on the following SVG\n' + window.atob(uri.slice(26)) + 'Open the following link to see browser\'s diagnosis\n' + uri);
        };
        image.src = uri;
      });
    });
  };

  out$.download = function (name, uri, options) {
    if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(uriToBlob(uri), name);else {
      var saveLink = document.createElement('a');
      if ('download' in saveLink) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;
          saveLink.onclick = function () {
            return requestAnimationFrame(function () {
              return URL.revokeObjectURL(url);
            });
          };
        } catch (e) {
          console.error(e);
          console.warn('Error while getting object URL. Falling back to string URL.');
          saveLink.href = uri;
        }
        saveLink.click();
        document.body.removeChild(saveLink);
      } else if (options && options.popup) {
        options.popup.document.title = name;
        options.popup.location.replace(uri);
      }
    }
  };

  out$.saveSvg = function (el, name, options) {
    var downloadOpts = downloadOptions(); // don't inline, can't be async
    return requireDomNodePromise(el).then(function (el) {
      return out$.svgAsDataUri(el, options || {});
    }).then(function (uri) {
      return out$.download(name, uri, downloadOpts);
    });
  };

  out$.saveSvgAsPng = function (el, name, options) {
    var downloadOpts = downloadOptions(); // don't inline, can't be async
    return requireDomNodePromise(el).then(function (el) {
      return out$.svgAsPngUri(el, options || {});
    }).then(function (uri) {
      return out$.download(name, uri, downloadOpts);
    });
  };
})();

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),

/***/ "./src/app/performance/performance-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/performance/performance-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PerformancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformancePageRoutingModule", function() { return PerformancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _performance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance.page */ "./src/app/performance/performance.page.ts");




const routes = [
    {
        path: '',
        component: _performance_page__WEBPACK_IMPORTED_MODULE_3__["PerformancePage"]
    }
];
let PerformancePageRoutingModule = class PerformancePageRoutingModule {
};
PerformancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerformancePageRoutingModule);



/***/ }),

/***/ "./src/app/performance/performance.module.ts":
/*!***************************************************!*\
  !*** ./src/app/performance/performance.module.ts ***!
  \***************************************************/
/*! exports provided: PerformancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformancePageModule", function() { return PerformancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _performance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./performance-routing.module */ "./src/app/performance/performance-routing.module.ts");
/* harmony import */ var _performance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./performance.page */ "./src/app/performance/performance.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let PerformancePageModule = class PerformancePageModule {
};
PerformancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _performance_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerformancePageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ],
        declarations: [_performance_page__WEBPACK_IMPORTED_MODULE_6__["PerformancePage"]]
    })
], PerformancePageModule);



/***/ }),

/***/ "./src/app/performance/performance.page.scss":
/*!***************************************************!*\
  !*** ./src/app/performance/performance.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none !important; }\n\nion-content {\n  --overflow: hidden;\n  --background: url('Performance_BG.svg') no-repeat center center / cover; }\n\nion-content .sec1 ion-card {\n    --background: linear-gradient(rgba(34, 75, 158, 0.4),rgba(28, 54, 117, 0.4));\n    box-shadow: 0px -7px 20px -5px rgba(0, 0, 0, 0.1);\n    -webkit-margin-start: 10px;\n            margin-inline-start: 10px;\n    -webkit-margin-end: 10px;\n            margin-inline-end: 10px;\n    margin-top: 15px;\n    margin-bottom: 15px; }\n\nion-content .sec1 ion-card ion-card-content {\n      -webkit-padding-start: 5px;\n              padding-inline-start: 5px;\n      -webkit-padding-end: 5px;\n              padding-inline-end: 5px;\n      height: 21vh;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n              justify-content: space-between; }\n\nion-content .descDiv {\n    padding: 0 15px;\n    height: 10vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .descDiv p {\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular;\n      line-height: 1.4;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden; }\n\nion-content .consDescDiv {\n    padding: 0 15px;\n    height: 10vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .consDescDiv p {\n      -webkit-line-clamp: '5';\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular;\n      line-height: 1.4;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden; }\n\nion-content .CountryDiv::-webkit-scrollbar {\n    display: none; }\n\nion-content .HeaderDiv .CountryDiv {\n    overflow-x: auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -ms-overflow-style: none; }\n\nion-content .HeaderDiv .CountryDiv .contryItem {\n      padding: 5px 20px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; }\n\nion-content .HeaderDiv .CountryDiv .contryItem .CountryP {\n        font-size: 20px;\n        margin: 10px 0;\n        color: #99acde;\n        -webkit-transition: 0.2s;\n        transition: 0.2s;\n        font-family: Open Sans SemiBold;\n        white-space: nowrap;\n        -webkit-transition: 0.3s;\n        transition: 0.3s; }\n\nion-content .HeaderDiv .CountryDiv .contryItem .underScoreSpan {\n        width: 25px;\n        height: 4px;\n        background: #ffffff;\n        border-radius: 10px;\n        -webkit-transition: 0.3s;\n        transition: 0.3s; }\n\nion-content .segmentDiv {\n    padding: 0 40px; }\n\nion-content .segmentDiv ion-segment {\n      height: 28px; }\n\nion-content .segmentDiv ion-segment ion-segment-button {\n        --background: #ffffff;\n        --background-checked: #2a478a;\n        --border-width: 0px;\n        --border-color: #2a478a;\n        --color: #2a478a;\n        --color-checked: #ffffff;\n        -webkit-transition: 0.3s;\n        transition: 0.3s; }\n\nion-content .dropDownDiv {\n    height: 6vh;\n    padding: 0 15px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .dropDownDiv .dropDownBtn {\n      --background: #2a478a;\n      --color: #ffffff;\n      height: 30px;\n      font-size: 14px;\n      font-family: Open Sans Regular;\n      --padding-start: 10px;\n      --padding-end: 10px;\n      width: 100%; }\n\nion-content .dropDownDiv .dropDownBtn .innerdropDownDiv {\n        text-align: left;\n        width: 100%;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center;\n        overflow: hidden;\n        color: #ffffff; }\n\nion-content .dropDownDiv .dropDownBtn .innerdropDownDiv .innerdropDownsapn {\n          white-space: normal;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 1;\n          text-transform: none;\n          line-height: 1.4; }\n\nion-content .PerfomanceDateDiv {\n    padding: 0 20px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    height: 3vh;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .PerfomanceDateDiv p {\n      margin: 0;\n      font-size: 11px;\n      color: #ffffff;\n      font-family: Open Sans Regular;\n      font-style: italic; }\n\nion-content .DataCardsOuterDiv::-webkit-scrollbar {\n    display: none; }\n\nion-content .DataCardsOuterDiv {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    height: 42vh;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .DataCardsDiv {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n\nion-content .DataCardsDiv ion-card {\n      border-radius: 25px;\n      --background: #103579;\n      border: 1px solid #154284;\n      margin-top: 10px;\n      margin-bottom: 10px;\n      -webkit-margin-start: 10px;\n              margin-inline-start: 10px;\n      -webkit-margin-end: 10px;\n              margin-inline-end: 10px; }\n\nion-content .DataCardsDiv ion-card ion-card-content {\n        min-height: 235px;\n        width: 150px;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-pack: space-evenly;\n                justify-content: space-evenly;\n        -webkit-box-align: center;\n                align-items: center;\n        padding-top: 5px;\n        padding-bottom: 5px; }\n\nion-content .DataCardsDiv ion-card .perfData {\n        height: calc(100vh - 740px);\n        min-height: 70px;\n        max-height: 90px;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center; }\n\nion-content .DataCardsDiv ion-card .perfData .DataTitle {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n                  flex-direction: column;\n          -webkit-box-align: center;\n                  align-items: center; }\n\nion-content .DataCardsDiv ion-card .perfData .DataTitle .ticker {\n            color: #ffffff;\n            font-size: 16px;\n            font-family: Open Sans SemiBold;\n            margin: 0;\n            line-height: 1.3;\n            text-align: center;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            display: -webkit-box; }\n\nion-content .DataCardsDiv ion-card .perfData .DataTitle .sub-title {\n            color: #2162c1;\n            font-size: 12px;\n            font-family: Open Sans SemiBold;\n            margin: 0;\n            line-height: 1; }\n\nion-content .DataCardsDiv ion-card .perfData .DataValue {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n\nion-content .DataCardsDiv ion-card .perfData .DataValue p {\n            color: #ffffff;\n            font-size: 16px;\n            font-family: Open Sans Regular; }\n\nion-content .DataCardsDiv ion-card .BMData {\n        height: calc(100vh - 740px);\n        min-height: 80px;\n        max-height: 90px;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center; }\n\nion-content .DataCardsDiv ion-card .BMData .BMDataTitle {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n                  align-items: center; }\n\nion-content .DataCardsDiv ion-card .BMData .BMDataTitle .BMIndname {\n            font-size: 16px;\n            color: #ffffff;\n            font-family: Open Sans SemiBold;\n            line-height: 1.3;\n            margin: 0;\n            text-align: center;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            display: -webkit-box; }\n\nion-content .DataCardsDiv ion-card .BMData .BMDataTitle .BMSubTitle {\n            color: #2162c1;\n            font-size: 12px;\n            font-family: Open Sans SemiBold;\n            margin: 0;\n            line-height: 1; }\n\nion-content .DataCardsDiv ion-card .BMData .BMValue {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n\nion-content .DataCardsDiv ion-card .BMData .BMValue p {\n            color: #ffffff;\n            font-size: 16px;\n            font-family: Open Sans Regular; }\n\nion-content .DataCardsDiv ion-card .container {\n        width: 100%;\n        height: 2px;\n        background-color: black;\n        position: relative; }\n\nion-content .DataCardsDiv ion-card .blue {\n        background: #2162c1; }\n\nion-content .DataCardsDiv ion-card .circle {\n        display: inline-block;\n        vertical-align: middle;\n        width: 8px;\n        height: 8px;\n        background-color: white;\n        border: solid 1px black;\n        border-radius: 50%;\n        position: absolute;\n        top: -3px;\n        left: calc(50% - 5px); }\n\nion-content .DataCardsDiv ion-card .blue .circle {\n        background: #164591;\n        border-color: #164591; }\n\nion-content .hypenOuterDiv {\n    height: 10vh;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .hypenOuterDiv .hypen {\n      height: 2px;\n      width: 25px;\n      background: #ffffff; }\n\nion-content .FooterDataDiv {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 0 20px; }\n\nion-content .FooterDataDiv p {\n      font-size: 10px;\n      color: #fff;\n      font-family: Open Sans Regular;\n      margin: 0; }\n\nion-content .FooterCredit {\n    text-align: center; }\n\nion-content .FooterCredit p {\n      color: #fff;\n      font-family: Open Sans SemiBold;\n      margin: 0;\n      font-size: 10px; }\n\n.activeCard {\n  --background: #ffffff !important; }\n\n.activeCard .ticker {\n    color: #00B9FF !important; }\n\n.activeCard .sub-title {\n    color: #103579 !important; }\n\n.activeCard .DataValue p {\n    color: #103579 !important; }\n\n.activeCard .BMIndname {\n    color: #00B9FF !important; }\n\n.activeCard .BMSubTitle {\n    color: #103579 !important; }\n\n.activeCard .BMValue p {\n    color: #103579 !important; }\n\n.activeCard .blue {\n    background: #E9ECF0 !important; }\n\n.activeCard .blue .circle {\n      background: #103579 !important;\n      border-color: #103579 !important; }\n\n.activeCard .hypen {\n    background: #103579 !important; }\n\n.dateDiv::-webkit-scrollbar {\n  display: none; }\n\n.activeDate {\n  color: #00b9ff !important; }\n\n.ChipsDiv {\n  margin: 0px 15px;\n  height: 5vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.ChipsDiv ion-chip {\n    border-color: #3880ff;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n\n.ChipsDiv ion-chip ion-label {\n      color: #3880ff; }\n\n.ChipsDiv .activeChip {\n    border-color: #ffffff !important; }\n\n.ChipsDiv .activeChip ion-label {\n      color: #ffffff; }\n\n#txtDecisions {\n  text-anchor: middle;\n  font-size: 18px;\n  font-family: Open Sans Bold; }\n\n#txtIndicators {\n  text-anchor: middle;\n  font-size: 10px;\n  font-family: Open Sans Bold; }\n\n#RiskSelND .clsToptxt4, #RiskSelND .clsLowtxt4 {\n  text-anchor: start;\n  font-size: 14px;\n  font-family: Open Sans Bold; }\n\n#RiskSelND .nt3 {\n  font-size: 5.5pt !important; }\n\n#RiskSelND .disable {\n  fill-opacity: 1 !important;\n  stroke-opacity: 1 !important; }\n\n#RiskSelND .disable text {\n    fill: #d2d8dd; }\n\n#RiskSelND .disable rect, #RiskSelND .disable circle {\n    fill: #d2d8dd;\n    fill-opacity: 1 !important;\n    stroke-opacity: 1 !important; }\n\n#RiskSelND .disable .rounded-hover {\n    cursor: auto;\n    display: none; }\n\n#RiskSelND .disable .rounded-hover .circleHvr {\n      cursor: auto; }\n\n#RiskSelND .disable .rounded-hover circle.Ct0 {\n      fill: #fff; }\n\n#RiskSelND .disable .rounded-hover circle.Ct1 {\n      stroke: #d2d8dd; }\n\n#RiskSelND .disable path.nt10, #RiskSelND .disable path.nt9, #RiskSelND .disable path.nt11, #RiskSelND .disable line.nt10, #RiskSelND .disable line.nt9, #RiskSelND .disable line.nt11, #RiskSelND .disable polygon.nt10, #RiskSelND .disable polygon.nt9, #RiskSelND .disable polygon.nt11 {\n    fill: #d2d8dd; }\n\n#RiskSelND .disable path.nt7, #RiskSelND .disable line.nt7, #RiskSelND .disable polygon.nt7 {\n    stroke: #d2d8dd; }\n\n#RiskSelND .disable path.nt0, #RiskSelND .disable line.nt0, #RiskSelND .disable polygon.nt0 {\n    stroke: #d2d8dd;\n    fill-opacity: 1 !important;\n    stroke-opacity: 1 !important;\n    fill: transparent !important; }\n\n#RiskSelND .disable .nt5 {\n    fill: #FFFFFF !important; }\n\n#RiskSelND .clsLow4 text, #RiskSelND .clsTop4 text {\n  fill: #fff !important; }\n\n#RiskSelND .nt5 {\n  fill: #fff !important; }\n\n.ios .PageTitle {\n  text-align: left;\n  padding: 0px 45px;\n  font-size: 18px;\n  color: #00b9ff; }\n\n.md .PageTitle {\n  text-align: left;\n  padding: 0px;\n  font-size: 18px;\n  color: #00b9ff; }\n\n@media (max-height: 600px) {\n  .descDiv, .consDescDiv {\n    height: 8vh !important;\n    margin-top: 5px; }\n    .descDiv p, .consDescDiv p {\n      -webkit-line-clamp: 2 !important; }\n  .DataCardsDiv ion-card ion-card-content {\n    min-height: 200px !important;\n    width: 130px !important; }\n  .DataCardsOuterDiv {\n    height: 40vh !important; }\n  .dropDownBtn {\n    height: 25px !important; }\n  .ChipsDiv ion-chip {\n    height: 28px !important; }\n  .sec1 ion-card {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important; }\n  .innerdropDownsapn {\n    font-size: 12px !important; }\n  .BMIndname {\n    font-size: 14px !important; }\n  .ticker {\n    font-size: 14px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZm9ybWFuY2UvQzpcXFByb2plY3RzXFxOQUFscGhhTW9iaWxlL3NyY1xcYXBwXFxwZXJmb3JtYW5jZVxccGVyZm9ybWFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksaUNBQWlDLEVBQUE7O0FBR3JDO0VBQ0ksa0JBQVc7RUFDWCx1RUFBYSxFQUFBOztBQUZqQjtJQU1ZLDRFQUFhO0lBQ2IsaURBQThDO0lBQzlDLDBCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBWC9CO01BY2dCLDBCQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIseUJBQThCO2NBQTlCLDhCQUE4QixFQUFBOztBQW5COUM7SUEwQlEsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBOztBQS9CM0I7TUFrQ1ksV0FBVztNQUNYLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixxQkFBcUI7TUFDckIsNEJBQTRCO01BQzVCLGdCQUFnQixFQUFBOztBQXpDNUI7SUE4Q1EsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBOztBQW5EM0I7TUFzRFksdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxlQUFlO01BQ2YsOEJBQThCO01BQzlCLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIscUJBQXFCO01BQ3JCLDRCQUE0QjtNQUM1QixnQkFBZ0IsRUFBQTs7QUE5RDVCO0lBbUVRLGFBQWEsRUFBQTs7QUFuRXJCO0lBNEVZLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBd0IsRUFBQTs7QUEvRXBDO01Bb0ZnQixpQkFBaUI7TUFDakIsb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTs7QUF0RnRDO1FBMEZvQixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7UUFDZCx3QkFBZ0I7UUFBaEIsZ0JBQWdCO1FBQ2hCLCtCQUErQjtRQUMvQixtQkFBbUI7UUFDbkIsd0JBQWdCO1FBQWhCLGdCQUFnQixFQUFBOztBQWhHcEM7UUFvR29CLFdBQVc7UUFDWCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix3QkFBZ0I7UUFBaEIsZ0JBQWdCLEVBQUE7O0FBeEdwQztJQStHUSxlQUFlLEVBQUE7O0FBL0d2QjtNQWlIWSxZQUFZLEVBQUE7O0FBakh4QjtRQW1IZ0IscUJBQWE7UUFDYiw2QkFBcUI7UUFDckIsbUJBQWU7UUFDZix1QkFBZTtRQUNmLGdCQUFRO1FBQ1Isd0JBQWdCO1FBQ2hCLHdCQUFnQjtRQUFoQixnQkFBZ0IsRUFBQTs7QUF6SGhDO0lBK0hRLFdBQVc7SUFHWCxlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7O0FBckkzQjtNQXdJWSxxQkFBYTtNQUNiLGdCQUFRO01BQ1IsWUFBWTtNQUNaLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIscUJBQWdCO01BQ2hCLG1CQUFjO01BQ2QsV0FBVyxFQUFBOztBQS9JdkI7UUFrSmdCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsb0JBQWE7UUFBYixhQUFhO1FBQ2IsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLHlCQUE4QjtnQkFBOUIsOEJBQThCO1FBQzlCLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7O0FBeko5QjtVQTRKb0IsbUJBQW1CO1VBQ25CLG9CQUFvQjtVQUNwQiw0QkFBNEI7VUFDNUIscUJBQXFCO1VBQ3JCLG9CQUFvQjtVQUNwQixnQkFBZ0IsRUFBQTs7QUFqS3BDO0lBeUtRLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFHWCx5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7O0FBL0szQjtNQWlMWSxTQUFTO01BQ1QsZUFBZTtNQUNmLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsa0JBQWtCLEVBQUE7O0FBckw5QjtJQTBMUSxhQUFhLEVBQUE7O0FBMUxyQjtJQThMUSxrQkFBa0I7SUFDdEIsa0JBQWtCO0lBQ2QsWUFBWTtJQUNaLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFLaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBOztBQXZNM0I7SUEyTVEsMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBOztBQTVNM0I7TUErTVksbUJBQW1CO01BQ25CLHFCQUFhO01BQ2IseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsMEJBQXlCO2NBQXpCLHlCQUF5QjtNQUN6Qix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7O0FBck5uQztRQXVOZ0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixvQkFBYTtRQUFiLGFBQWE7UUFDYiw0QkFBc0I7UUFBdEIsNkJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsOEJBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBOztBQTlObkM7UUFrT2dCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0Qix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBOztBQXhPbkM7VUEwT29CLG9CQUFhO1VBQWIsYUFBYTtVQUNiLDRCQUFzQjtVQUF0Qiw2QkFBc0I7a0JBQXRCLHNCQUFzQjtVQUN0Qix5QkFBbUI7a0JBQW5CLG1CQUFtQixFQUFBOztBQTVPdkM7WUE4T3dCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsK0JBQStCO1lBQy9CLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLDRCQUE0QjtZQUM1QixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLG9CQUFvQixFQUFBOztBQXZQNUM7WUEwUHdCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsK0JBQStCO1lBQy9CLFNBQVM7WUFDVCxjQUFjLEVBQUE7O0FBOVB0QztVQW1Rb0Isb0JBQWE7VUFBYixhQUFhO1VBQ2Isd0JBQXVCO2tCQUF2Qix1QkFBdUIsRUFBQTs7QUFwUTNDO1lBc1F3QixjQUFjO1lBQ2QsZUFBZTtZQUNmLDhCQUE4QixFQUFBOztBQXhRdEQ7UUE4UWdCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0Qix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBOztBQXBSbkM7VUFzUm9CLG9CQUFhO1VBQWIsYUFBYTtVQUNiLDRCQUFzQjtVQUF0Qiw2QkFBc0I7a0JBQXRCLHNCQUFzQjtVQUN0Qix3QkFBdUI7a0JBQXZCLHVCQUF1QjtVQUN2Qix5QkFBbUI7a0JBQW5CLG1CQUFtQixFQUFBOztBQXpSdkM7WUEyUndCLGVBQWU7WUFDZixjQUFjO1lBQ2QsK0JBQStCO1lBQy9CLGdCQUFnQjtZQUNoQixTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLDRCQUE0QjtZQUM1QixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLG9CQUFvQixFQUFBOztBQXBTNUM7WUF1U3dCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsK0JBQStCO1lBQy9CLFNBQVM7WUFDVCxjQUFjLEVBQUE7O0FBM1N0QztVQWdUb0Isb0JBQWE7VUFBYixhQUFhO1VBQ2Isd0JBQXVCO2tCQUF2Qix1QkFBdUIsRUFBQTs7QUFqVDNDO1lBb1R3QixjQUFjO1lBQ2QsZUFBZTtZQUNmLDhCQUE4QixFQUFBOztBQXRUdEQ7UUE0VGdCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLGtCQUFrQixFQUFBOztBQS9UbEM7UUFvVWdCLG1CQUFtQixFQUFBOztBQXBVbkM7UUF3VWdCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULHFCQUFxQixFQUFBOztBQWpWckM7UUFxVmdCLG1CQUFtQjtRQUNuQixxQkFBcUIsRUFBQTs7QUF0VnJDO0lBNFZRLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7O0FBaFczQjtNQWtXWSxXQUFXO01BQ1gsV0FBVztNQUNYLG1CQUFtQixFQUFBOztBQXBXL0I7SUF5V1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlLEVBQUE7O0FBNVd2QjtNQStXWSxlQUFlO01BQ2YsV0FBVztNQUNYLDhCQUE4QjtNQUM5QixTQUFTLEVBQUE7O0FBbFhyQjtJQXVYUSxrQkFBa0IsRUFBQTs7QUF2WDFCO01BeVhZLFdBQVc7TUFDWCwrQkFBK0I7TUFDL0IsU0FBUztNQUNULGVBQWUsRUFBQTs7QUFLM0I7RUFDSSxnQ0FBYSxFQUFBOztBQURqQjtJQUlRLHlCQUF5QixFQUFBOztBQUpqQztJQVFRLHlCQUF5QixFQUFBOztBQVJqQztJQWFZLHlCQUF5QixFQUFBOztBQWJyQztJQWtCUSx5QkFBeUIsRUFBQTs7QUFsQmpDO0lBc0JRLHlCQUF5QixFQUFBOztBQXRCakM7SUEyQlkseUJBQXlCLEVBQUE7O0FBM0JyQztJQWdDUSw4QkFBOEIsRUFBQTs7QUFoQ3RDO01BbUNZLDhCQUE4QjtNQUM5QixnQ0FBZ0MsRUFBQTs7QUFwQzVDO0lBeUNRLDhCQUE4QixFQUFBOztBQUl0QztFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFMdkI7SUFPUSxxQkFBcUI7SUFDckIsd0JBQWdCO0lBQWhCLGdCQUFnQixFQUFBOztBQVJ4QjtNQVVZLGNBQWMsRUFBQTs7QUFWMUI7SUFlUSxnQ0FBZ0MsRUFBQTs7QUFmeEM7TUFpQlksY0FBYyxFQUFBOztBQUsxQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFLL0I7RUFHUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDJCQUEyQixFQUFBOztBQUxuQztFQVNNLDJCQUEyQixFQUFBOztBQVRqQztFQWFNLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFkbEM7SUFpQlEsYUFBYSxFQUFBOztBQWpCckI7SUFxQlEsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEIsRUFBQTs7QUF2QnBDO0lBMkJRLFlBQVk7SUFDWixhQUFhLEVBQUE7O0FBNUJyQjtNQStCVSxZQUFZLEVBQUE7O0FBL0J0QjtNQW1DVSxVQUFVLEVBQUE7O0FBbkNwQjtNQXVDVSxlQUFlLEVBQUE7O0FBdkN6QjtJQTZDVSxhQUFhLEVBQUE7O0FBN0N2QjtJQWlEVSxlQUFlLEVBQUE7O0FBakR6QjtJQXFEVSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEIsRUFBQTs7QUF4RHRDO0lBNkRRLHdCQUF3QixFQUFBOztBQTdEaEM7RUFtRVEscUJBQXFCLEVBQUE7O0FBbkU3QjtFQXdFTSxxQkFBcUIsRUFBQTs7QUFxTTNCO0VBRVEsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUl0QjtFQUVRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUF5RXRCO0VBQ0k7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZSxFQUFBO0lBRm5CO01BSVEsZ0NBQWlDLEVBQUE7RUFJekM7SUFHWSw0QkFBNEI7SUFDNUIsdUJBQXVCLEVBQUE7RUFLbkM7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHVCQUF1QixFQUFBO0VBRzNCO0lBRVEsdUJBQXVCLEVBQUE7RUFJL0I7SUFFUSwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7RUFJdEM7SUFDSSwwQkFBMEIsRUFBQTtFQUc5QjtJQUNJLDBCQUEwQixFQUFBO0VBRzlCO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gfVxyXG5cclxuLmhlYWRlci1tZDphZnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvUGVyZm9ybWFuY2VfQkcuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbiAgICAuc2VjMXtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzNCwgNzUsIDE1OCwgMC40KSxyZ2JhKDI4LCA1NCwgMTE3LCAwLjQpKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IC03cHggMjBweCAtNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7IFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDVweDsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxdmg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NEaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zRGVzY0RpdntcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICc1JztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5Db3VudHJ5RGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuSGVhZGVyRGl2IHtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCA0NXB4IC8gMHB4IDE4cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHJcbiAgICAgICAgLkNvdW50cnlEaXYge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAgICAgICAgIC5jb250cnlJdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgICAgICAgICAgICAgICAuQ291bnRyeVAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5YWNkZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51bmRlclNjb3JlU3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlZ21lbnREaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMmE0NzhhO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMmE0NzhhO1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvcjogIzJhNDc4YTtcclxuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3BEb3duRGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDZ2aDtcclxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NTVweCk7XHJcbiAgICAgICAgLy8gbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuZHJvcERvd25CdG4ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMyYTQ3OGE7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuaW5uZXJkcm9wRG93bkRpdiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgLmlubmVyZHJvcERvd25zYXBuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5QZXJmb21hbmNlRGF0ZURpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBoZWlnaHQ6IDN2aDtcclxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3OTBweCk7XHJcbiAgICAgICAgLy8gbWluLWhlaWdodDogMTVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuRGF0YUNhcmRzT3V0ZXJEaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5EYXRhQ2FyZHNPdXRlckRpdiB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogNDJ2aDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIC8vIG1pbi1oZWlnaHQ6IDMydmg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAwcHgpO1xyXG4gICAgICAgIC8vIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDM0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuRGF0YUNhcmRzRGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzEwMzU3OTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE1NDI4NDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjM1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGVyZkRhdGEge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzQwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuRGF0YVRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAudGlja2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxNjJjMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuRGF0YVZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuQk1EYXRhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc0MHB4KTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLkJNRGF0YVRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAuQk1JbmRuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5CTVN1YlRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTYyYzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLkJNVmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ibHVlIHtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjE2MmMxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmx1ZSAuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNjQ1OTE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMxNjQ1OTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmh5cGVuT3V0ZXJEaXYge1xyXG4gICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmh5cGVuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuRm9vdGVyRGF0YURpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLkZvb3RlckNyZWRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlQ2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50aWNrZXJ7XHJcbiAgICAgICAgY29sb3I6ICMwMEI5RkYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMTAzNTc5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLkRhdGFWYWx1ZXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzEwMzU3OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuQk1JbmRuYW1le1xyXG4gICAgICAgIGNvbG9yOiAjMDBCOUZGICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLkJNU3ViVGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICMxMDM1NzkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuQk1WYWx1ZXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzEwMzU3OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmx1ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTlFQ0YwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDM1NzkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTAzNTc5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oeXBlbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTAzNTc5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlRGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlRGF0ZXtcclxuICAgIGNvbG9yOiAjMDBiOWZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5DaGlwc0RpdntcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1jaGlwe1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM4ODBmZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmVDaGlwe1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jdHh0RGVjaXNpb25zIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbn1cclxuXHJcbiN0eHRJbmRpY2F0b3JzIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiNSaXNrU2VsTkQge1xyXG5cclxuICAgIC5jbHNUb3B0eHQ0LCAuY2xzTG93dHh0NCB7XHJcbiAgICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAubnQzIHtcclxuICAgICAgZm9udC1zaXplOiA1LjVwdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRpc2FibGUge1xyXG4gICAgICBmaWxsLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgc3Ryb2tlLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICBcclxuICAgICAgdGV4dCB7XHJcbiAgICAgICAgZmlsbDogI2QyZDhkZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZWN0LCBjaXJjbGUge1xyXG4gICAgICAgIGZpbGw6ICNkMmQ4ZGQ7XHJcbiAgICAgICAgZmlsbC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucm91bmRlZC1ob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgXHJcbiAgICAgICAgLmNpcmNsZUh2ciB7XHJcbiAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNpcmNsZS5DdDAge1xyXG4gICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY2lyY2xlLkN0MSB7XHJcbiAgICAgICAgICBzdHJva2U6ICNkMmQ4ZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHBhdGgsIGxpbmUsIHBvbHlnb24ge1xyXG4gICAgICAgICYubnQxMCwgJi5udDksICYubnQxMSB7XHJcbiAgICAgICAgICBmaWxsOiAjZDJkOGRkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmLm50NyB7XHJcbiAgICAgICAgICBzdHJva2U6ICNkMmQ4ZGQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICYubnQwIHtcclxuICAgICAgICAgIHN0cm9rZTogI2QyZDhkZDtcclxuICAgICAgICAgIGZpbGwtb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5udDUge1xyXG4gICAgICAgIGZpbGw6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNsc0xvdzQsIC5jbHNUb3A0IHtcclxuICAgICAgdGV4dCB7XHJcbiAgICAgICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubnQ1IHtcclxuICAgICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbi8vIC5IZWFkZXJEaXZ7XHJcbi8vICAgICBoZWlnaHQ6IDEyNXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDQ1cHggLyAwcHggMThweDtcclxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcblxyXG4vL1xyXG5cclxuLy8gICAgIC5Db3VudHJ5RGl2e1xyXG4vLyAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbi8vICAgICAgICAgLmNvbnRyeUl0ZW17XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAgICAvLyBoZWlnaHQ6IDh2aDtcclxuXHJcbi8vICAgICAgICAgICAgIC5Db3VudHJ5UHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICM5OWFjZGU7XHJcbi8vICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuLy8gICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIC51bmRlclNjb3JlU3BhbntcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuZHJvcERvd25EaXZ7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbi8vICAgICAgICAgLmlubmVyZHJvcERvd25EaXZ7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47Y29sb3I6ICMwMGI5ZmY7XHJcblxyXG4vLyAgICAgICAgICAgICAuaW5uZXJkcm9wRG93bnNhcG57XHJcbi8vICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4vLyAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYXJke1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xyXG4vLyAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTczcHgpO1xyXG5cclxuLy8gICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbi8vICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gICAgICAgICAuUGVyZm9tYW5jZURhdGVEaXZ7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbi8vICAgICAgICAgICAgIC5wZXJmTGFiZWx7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgLnBlcmZEYXRle1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTRlOGI7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5kZXNjRGl2e1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4vLyAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MnB4O1xyXG5cclxuLy8gICAgICAgICAgICAgcHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjMzk0ZThiO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgc3BhbntcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLkRhdGFEaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5EYXRhRGl2e1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTVweCk7XHJcbi8vICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuLy8gICAgICAgICAgICAgaW9uLWl0ZW17XHJcbi8vICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6I2RjZGNkYztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpb24tdGV4dHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIC5yb3dIZWFkaW5ne1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLnJvd1ZhbHVle1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzk0ZThiO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuRm9vdGVyRGl2e1xyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4vLyAgICAgICAgICAgICAuRm9vdGVyMXtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIC5Gb290ZXIye1xyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBwe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM5NGU4YjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10b29sYmFye1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xyXG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4vLyAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyB9XHJcblxyXG4uaW9zIHtcclxuICAgIC5QYWdlVGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDQ1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWQge1xyXG4gICAgLlBhZ2VUaXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAubG9hZGVye1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIHdpZHRoOiAxMDB2dztcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICB6LWluZGV4OiA5OTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbi8vIC8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIC8vICAgICB6LWluZGV4OiA5OTk5O1xyXG4vLyAvLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gLy8gICAgIHdpZHRoOiAxMDB2dztcclxuLy8gLy8gICAgIHRvcDogMDtcclxuLy8gLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAvLyAgICAgbGVmdDogMDtcclxuLy8gLy8gICAgIGJvdHRvbTogMDtcclxuLy8gLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuLy8gICAgIGlvbi1jb250ZW50e1xyXG4vLyAgICAgICAgIC0tb3ZlcmZsb3c6IGF1dG87XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlvbi1jYXJke1xyXG4vLyAgICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuRGF0YURpdntcclxuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjBweCkgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuQ291bnRyeURpdntcclxuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG5cclxuLy8gICAgICAgICAuY29udHJ5SXRlbXtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxNXZoICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAgICAgICAgICAgICAuQ291bnRyeVB7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuZGVzY0RpdntcclxuLy8gICAgICAgICBtaW4taGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmRyb3BEb3duRGl2e1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuSGVhZGVyRGl2e1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCl7XHJcbiAgICAuZGVzY0RpdiwgLmNvbnNEZXNjRGl2e1xyXG4gICAgICAgIGhlaWdodDogOHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcCA6IDIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLkRhdGFDYXJkc0RpdntcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuRGF0YUNhcmRzT3V0ZXJEaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3BEb3duQnRue1xyXG4gICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5DaGlwc0RpdntcclxuICAgICAgICBpb24tY2hpcHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWMxe1xyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyZHJvcERvd25zYXBue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5CTUluZG5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpY2tlcntcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/performance/performance.page.ts":
/*!*************************************************!*\
  !*** ./src/app/performance/performance.page.ts ***!
  \*************************************************/
/*! exports provided: PerformancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformancePage", function() { return PerformancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/dataHandler/data-handler.service */ "./src/app/services/dataHandler/data-handler.service.ts");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_11__);












let PerformancePage = class PerformancePage {
    constructor(dataHandler, route, menuController, file, photoViewer, platform, httpClient, pickerCtrl, screenOrientation) {
        this.dataHandler = dataHandler;
        this.route = route;
        this.menuController = menuController;
        this.file = file;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.httpClient = httpClient;
        this.pickerCtrl = pickerCtrl;
        this.screenOrientation = screenOrientation;
        this.RelIndexPart = [
            {
                id: '12',
                top: 'NAA Japan|Leading Index',
                mid: 'NAA Japan Low |Vol Index',
                center: 'NAA Japan |Low Vol Index'
            },
            {
                id: '9',
                top: 'NAA U.S. LC |Leading Index',
                mid: 'NAA U.S. LC |Low Vol Index',
                center: 'NAA U.S. LC|Low Vol Index'
            },
            {
                id: '13',
                top: 'NAA Europe Ex UK|Leading Index',
                mid: 'NAA Europe Ex UK |Low Vol Index',
                center: 'NAA Europe Ex UK |Low Vol Index'
            },
            {
                id: '1',
                top: 'NAA UK|Leading Index',
                mid: 'NAA UK |Low Vol Index',
                center: 'NAA UK Low |Vol Index'
            },
            {
                id: '4',
                top: 'NAA U.S. SC | Leading Index',
                mid: 'NAA U.S. SC |Low Vol Index',
                center: 'NAA U.S. SC |Low Vol Index'
            },
            {
                id: '107',
                top: 'NAA U.S. LC |Leading 50 Index',
                mid: 'NAA U.S. LC |Low Vol 50 Index',
                center: 'NAA U.S. LC|Low Vol 50 Index'
            },
            {
                id: '104',
                top: 'NAA U.S. SC | Leading 50 Index',
                mid: 'NAA U.S. SC |Low Vol 50 Index',
                center: 'NAA U.S. SC |Low Vol 50 Index'
            }, {
                id: '69',
                top: 'NAA U.S. LC|ESG 50 Index',
                mid: 'NAA U.S. LC ESG|Defensive 50 Index',
                center: 'NAA U.S. LC ESG|Defensive 50 Index'
            },
            {
                id: '108',
                top: 'NAA UK|ESG 50 Index',
                mid: 'NAA UK ESG|Defensive 50 Index',
                center: 'NAA UK ESG|Defensive 50 Index'
            },
            {
                id: '113',
                top: 'NAA Japan|ESG 50 Index',
                mid: 'NAA Japan ESG|Defensive 50 Index',
                center: 'NAA Japan ESG|Defensive 50 Index'
            }
        ];
        this.LEI_E = 0;
        this.rebalance_dates = [];
        this.VIX_E = 0;
        this.SP_E = 0;
        this.Output = 4;
        this.LEI = 0;
        this.VIX = 0;
        this.SP = 0;
        this.SelRelIndexPart = [];
        this.pngLoader = false;
        this.rebalanceDates = [];
        this.HFLAT = "0.00%";
        this.HFSAT = "0.00%";
        this.HFEAT = "0.00%";
        this.HFUAT = "0.00%";
        this.HFJAT = "0.00%";
        this.HFR = "0.00%";
        this.ShowAll = true;
        this.showMVCons = false;
        this.dateList = [];
        this.yearList = [];
        this.OptionsList = [];
        this.selectedSection = 'construction';
        this.itemActive = false;
        this.PerformanceData = [];
        this.SelBMIndData = [];
        this.showMore = false;
        this.EquityList = [];
        this.ESGList = [];
        this.FIList = [];
        this.selectedCard = 'value';
        this.descModel = false;
        this.IndexData = [];
        this.Index = [];
        this.CountryClasificationList = ['USA', 'Europe', 'UK', 'Japan', 'Dev. World'];
        this.performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
        this.APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
        this.selWith = window.innerWidth;
        this.selWith = this.selWith - 30;
        // this.menuController.swipeEnable()
        // this.menuController.enable(false);
    }
    ngAfterViewInit() {
        if (this.mobile) {
            // var ref = document.getElementById('IndexListCard');
            // ref.onscroll= this.OnCardScroll;
        }
    }
    ngOnDestroy() {
        this.screenOrientation.unlock();
        // this.menuController.enable(true);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.key = params['Key'];
        });
        if (this.PerformanceData.length == 0) {
        }
        //console.log(this.key);
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            this.loadData();
        }
    }
    OnCardScroll(e) {
        var ref = document.getElementById('IndexListCard');
        if (ref.scrollTop > 200) {
            ref.classList.add("bottomCardScrollUp");
        }
    }
    loadData() {
        if (this.key == 'ESG') {
            this.dataHandler.getPerfData().subscribe(res => {
                //    console.log(res);
                this.PerformanceData = res;
                this.dataHandler.getEsgPerfData().subscribe(res => {
                    //    console.log(res);
                    var temp = [];
                    temp = res;
                    temp = temp.filter(data => data.indexId != 108 && data.indexId != 113 && data.indexId != 69);
                    //    console.log(temp);
                    this.IndexData = temp;
                    this.CheckCountry();
                    this.OnItemClick(this.CountryClasificationList[0]);
                });
            });
        }
        else if (this.key == 'Fixed Income') {
            this.dataHandler.getPerfData().subscribe(res => {
                //    console.log(res);
                this.PerformanceData = res;
                this.dataHandler.getFIPerfData().subscribe(res => {
                    //    console.log(res);
                    var temp = [];
                    temp = res;
                    // temp = temp.filter(data => data.indexId != 130);
                    console.log(temp);
                    this.IndexData = temp;
                    this.CheckCountry();
                    this.OnItemClick(this.CountryClasificationList[0]);
                });
            });
        }
        else if (this.key == 'Leading Equity') {
            this.dataHandler.getPerfData().subscribe(res => {
                //    console.log(res);
                this.PerformanceData = res;
                this.dataHandler.getEquityPerfIndData().subscribe(res => {
                    //    console.log(res);
                    var temp = [];
                    temp = res;
                    var LeadingIndex = temp.filter((rec) => rec.indexName.indexOf('Leading') != -1);
                    //  console.log(LeadingIndex);
                    this.IndexData = LeadingIndex;
                    this.CheckCountry();
                    this.OnItemClick(this.CountryClasificationList[0]);
                });
            });
        }
        else if (this.key == 'Long_Short Equity') {
            this.dataHandler.getPerfData().subscribe(res => {
                //   console.log(res);
                this.PerformanceData = res;
                this.dataHandler.getEquityPerfIndData().subscribe(res => {
                    //    console.log(res);
                    var temp = [];
                    temp = res;
                    var LongShortIndex = temp.filter((rec) => (rec.indexName.indexOf('Long') != -1 || rec.indexName.indexOf('Short') != -1) && rec.indexName.indexOf('Long-Short') == -1);
                    //  console.log(LongShortIndex);
                    this.IndexData = LongShortIndex;
                    this.CheckCountry();
                    this.OnItemClick(this.CountryClasificationList[0]);
                });
            });
        }
        else if (this.key == 'Low Volatility') {
            this.dataHandler.getPerfData().subscribe(res => {
                //    console.log(res);
                this.PerformanceData = res;
                this.dataHandler.getEquityPerfIndData().subscribe(res => {
                    //    console.log(res);
                    var temp = [];
                    temp = res;
                    var LowVolIndex = temp.filter((rec) => rec.indexName.indexOf('Low Volatility') != -1);
                    //   console.log(LowVolIndex);
                    this.IndexData = LowVolIndex;
                    this.CheckCountry();
                    this.OnItemClick(this.CountryClasificationList[0]);
                });
            });
        }
        else if (this.key == 'Market View') {
            // console.log('Market View part');
            this.dataHandler.getEquityPerfIndData().subscribe(res => {
                var temp = [];
                temp = res;
                temp = temp.filter(data => data.indexId == 107 || data.indexId == 104 || data.indexId == 13 || data.indexId == 1 || data.indexId == 12 || data.indexId == 54);
                this.IndexData = temp;
                this.dataHandler.getEsgPerfData().subscribe(res => {
                    var temp = [];
                    temp = res;
                    temp.filter((data) => {
                        if (data.indexId == 69 || data.indexId == 108 || data.indexId == 113) {
                            this.IndexData.push(data);
                        }
                    });
                    //   console.log(this.IndexData);
                    this.CheckCountry();
                    this.onConstChipClick();
                    this.OnItemClick(this.CountryClasificationList[0]);
                    this.showMVCons = true;
                });
            });
        }
        // else if(this.key == 'Target Volatility Controlled'){
        //   this.dataHandler.getEquityPerfIndData().subscribe(res=>{
        //     console.log(res);
        //    });
        // }
        // this.httpClient.get(this.performanceAPIUrl).subscribe(data=>{
        //   // this.PerformanceData = data;
        //   // console.log(this.PerformanceData);
        //   this.getFIList();
        //   // this.getESGList();
        // this.httpClient.get(this.APIUrl).subscribe(data=>{
        //   this.IndexData = data
        //   // console.log(this.IndexData);
        //   var i = 0;
        //   this.Index[0] = undefined;
        //   this.getEquityList();
        //   for(i=1; i<this.CountryClasificationList.length;i++){
        //     var temp = this.filterIndex(this.CountryClasificationList[i]);
        //     if(this.CountryClasificationList[i] !== 'USA'){
        //     temp= temp.sort((a, b) => {
        //       return a.sortOrder - b.sortOrder;
        //     });
        //   }
        //     this.Index.push(temp);
        //  }
        //  console.log(this.Index);
        //console.log(this.selectedIndex);
        // document.getElementById('Loader').style.display='none';
        // });
        // });
    }
    CheckCountry() {
        var temp = [];
        if (this.IndexData.length != 0) {
            if (this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1).length != 0) {
                temp.push("USA");
            }
            if (this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1).length != 0) {
                temp.push("Europe");
            }
            if (this.IndexData.filter(data => (data.indexName.indexOf('United Kingdom') != -1 || data.indexName.indexOf('UK') != -1) && data.indexName.indexOf('Ex-UK') == -1).length != 0) {
                temp.push("UK");
            }
            if (this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1).length != 0) {
                temp.push("Japan");
            }
            if (this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1).length != 0) {
                temp.push("Dev. World");
            }
            this.CountryClasificationList = temp;
            //   console.log(temp);
        }
    }
    OnItemClick(item) {
        //  console.log(item);
        this.selectedCountry = item;
        this.selectedOption = null;
        //  console.log(this.IndexData);
        if (item == 'USA') {
            this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1);
        }
        else if (item == 'Japan') {
            this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1);
        }
        else if (item == 'Europe') {
            this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1);
        }
        else if (item == 'Dev. World') {
            this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1);
        }
        else if (item == 'UK') {
            this.SelCountryData = this.IndexData.filter(data => (data.indexName.indexOf('United Kingdom') != -1 || data.indexName.indexOf('UK') != -1) && data.indexName.indexOf('Ex-UK') == -1);
        }
        this.SelCountryData = this.SelCountryData.sort((a, b) => {
            return a.sortOrder - b.sortOrder;
        });
        // console.log(this.SelCountryData);
        // if(item == 'USA'){
        //   // this.segmentChanged('Equity');
        //   this.selectedIndexName = this.Index[0][0].indexName.replace('New Age Alpha ','');
        // }else{
        //   this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ','');
        //   // console.log(this.selectedIndexName);
        // }
        this.itemActive = true;
        // console.log(this.selectedIndexName);
        this.onOptionsSelected(this.SelCountryData[0].indexId);
    }
    onIndexItemClick() {
        document.getElementById('BottomCardDiv').style.display = "none";
        document.getElementById('BottomCardDiv').style.transition = ".2s";
    }
    replaceId(item) {
        var itm = item.replace(/ /g, '-');
        return itm;
    }
    replaceIdCard(item) {
        var itm = item.replace(/ /g, '-');
        return itm + 'Card';
    }
    onIndexChange(event) {
        this.selectedIndex = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
        // console.log(this.selectedIndex);
        this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ', '');
        // this.selectedIndex = this.filterIndex(item)[0].IndexName;
        // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
        var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
        this.selectedIndexData = inddata[0];
        // console.log(this.selectedIndexData);
        // console.log(event.target.value);
        var d = this.IndexData.filter(data => data.indexName.indexOf(event.target.value) != -1);
        this.selectedIndex = d[0];
        var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
        this.selectedIndexData = inddata[0];
        // console.log(this.selectedIndexData);
        this.onCancelClick();
        // setTimeout(()=>{
        //   // this.animateSequenceStart();
        // },300);
    }
    onOptionsSelected(indId) {
        if (this.key != 'Market View') {
            this.selectedIndex = this.SelCountryData.filter(data => data.indexId == indId)[0];
            //  console.log(this.selectedIndex);
            this.selectedIndexData = this.PerformanceData.filter(data => data.indexId == indId)[0];
            // console.log(this.selectedIndexData);
            this.selectedIndexName = this.selectedIndexData.indexName;
            this.getBMData();
            this.createChart();
        }
        else {
            this.selectedIndex = this.SelCountryData.filter(data => data.indexId == indId)[0];
            //  console.log(this.selectedIndex);
            this.selectedIndexData = this.SelCountryData.filter(data => data.indexId == indId)[0];
            this.selectedIndexName = this.selectedIndexData.indexName;
            // console.log(this.selectedIndexData);
            // this.getBMData();
            // if(this.selectedIndexData.indexId == 54){
            // this.GlobalChartCreate();
            // }else{
            this.createChart();
            // }
        }
    }
    getBMData() {
        var temp = this.PerformanceData.filter(x => x.indexId == this.selectedIndexData.benchMarkId && x.relatedIndexId == this.selectedIndexData.indexId);
        if (temp.length != 0) {
            temp[0].indexName = temp[0].indexName.indexOf("(") > -1 ? temp[0].indexName.split("(")[0] : temp[0].indexName;
            this.SelBMIndData = temp[0];
        }
        else {
            this.SelBMIndData = null;
        }
        // console.log(this.SelBMIndData);
    }
    getEquityList() {
        var filterStr = 'U.S.';
        var tempEq = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        tempEq = tempEq.sort((a, b) => {
            return a.sortOrder - b.sortOrder;
        });
        this.EquityList = tempEq;
    }
    onPerfChipClick() {
        this.selectedSection = 'perfomance';
    }
    onConstChipClick() {
        this.selectedSection = 'construction';
    }
    onimgClick(img, title) {
        this.photoViewer.show(this.file.applicationDirectory + img, title, { share: false });
    }
    onYearClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let opts = {
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Confirm',
                        handler: (val) => {
                            this.selectedYear = val.Year.text;
                            //      console.log(this.selectedYear);
                            this.getYearData();
                            this.selectedDate = this.dateList[0].rebalanceDt;
                            this.fetchSignal(this.selectedDate);
                        }
                    }],
                columns: [{
                        name: 'Year',
                        selectedIndex: this.getselectedYear(),
                        options: this.getYearColumnOptions()
                    }]
            };
            //  console.log(this.selectedYear);
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
        });
    }
    getselectedYear() {
        //  console.log(''+this.selectedYear);
        if (this.selectedYear) {
            // console.log(this.yearList);
            var temp = this.yearList.filter(i => i == this.selectedYear)[0];
            //  console.log(temp);
            var selectedyearIndex = this.yearList.indexOf(temp);
            // console.log(selectedyearIndex);
            return selectedyearIndex;
        }
        else {
            return 0;
        }
    }
    getYearData() {
        var yearIndex = this.yearList.indexOf(this.selectedYear);
        //  console.log(yearIndex);
        this.dateList = this.rebalance_dates[yearIndex].values;
        //  console.log(this.dateList);
    }
    getYearColumnOptions() {
        var that = this;
        if (this.rebalance_dates.length != 0) {
            var tempdates = [...this.rebalance_dates];
            // that.yearList.length = 0;
            that.yearList = tempdates.map(i => { return i.key; });
            //  console.log(this.yearList);
            var temp = [];
            this.yearList.filter(i => {
                temp.push({ text: i, value: i });
            });
            return temp;
        }
        // console.log(this.yearList);
    }
    openPicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let opts = {
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Confirm',
                        handler: (val) => {
                            this.selectedOption = val;
                            var temp = val.Index.text;
                            temp = temp.slice(0, temp.indexOf('(') - 1);
                            this.selectedIndexName = temp;
                            this.onOptionsSelected(this.getSelectedDataId(temp));
                            this.getColumnOptions();
                        }
                    }
                ],
                cssClass: 'picOptions',
                columns: [{
                        name: 'Index',
                        selectedIndex: this.getSelectedIndex(),
                        options: this.getColumnOptions()
                    }],
            };
            //console.log(this.selectedOption);
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
        });
    }
    getSelectedDataId(val) {
        // console.log(val);
        var temp = this.SelCountryData.filter(data => data.indexName.replace('New Age Alpha ', '').replace('Total Return ', '') == val)[0];
        //  console.log(temp);
        return temp.indexId;
    }
    getSelectedIndex() {
        if (this.selectedOption) {
            var temp = this.OptionsList.filter(i => i.text == this.selectedOption.Index.text);
            var selectedindexVal = this.OptionsList.indexOf(temp[0]);
            return selectedindexVal;
        }
        else {
            return undefined;
        }
    }
    getColumnOptions() {
        this.OptionsList.length = 0;
        // console.log(this.SelCountryData);
        this.SelCountryData.forEach(element => {
            var temp = element.indexName.replace('New Age Alpha ', '').replace('Total Return ', '');
            temp = temp + " (" + element.indexCode + ")";
            this.OptionsList.push({ text: temp, value: temp });
        });
        return this.OptionsList;
    }
    onCancelClick() {
        setTimeout(() => {
            document.getElementById('BottomCardDiv').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('BottomCardDiv').style.display = "none";
            }, 700);
            setTimeout(() => {
                document.getElementById('parentdiv').style.paddingTop = "0px";
                document.getElementById('header').style.display = 'block';
            }, 500);
        }, 100);
    }
    onDescCloseClick() {
        this.descModel = false;
    }
    oncardClick(val) {
        // console.log(val);
        this.selectedCard = val;
    }
    roundValue(val) {
        var v = Math.round(val * 100) / 100;
        return v.toFixed(2);
    }
    createChart() {
        var that = this;
        this.dataHandler.getRebalanceDates(this.selectedIndexData.indexId).then(data => {
            //  console.log(data);
            if (data.length > 0) {
                data.sort((x, y) => {
                    return d3__WEBPACK_IMPORTED_MODULE_8__["descending"](x.rebalanceDt, y.rebalanceDt);
                });
                that.rebalance_dates = d3__WEBPACK_IMPORTED_MODULE_8__["nest"]()
                    .key(d => { return d.rebalanceDt.substring(0, 4); })
                    .entries(data).sort((x, y) => { d3__WEBPACK_IMPORTED_MODULE_8__["descending"](x.key, y.key); });
                //   console.log(that.rebalance_dates);
                this.selectedYear = that.rebalance_dates[0].key;
                //   console.log(this.selectedYear);
                this.getYearColumnOptions();
                this.getYearData();
                that.selectedDate = this.rebalance_dates[0].values[0].rebalanceDt;
                that.isUnscheduled = this.rebalance_dates[0].values[0].unscheduled;
                //  console.log(this.selectedDate);
                //   console.log(this.isUnscheduled);
                that.fetchSignal(that.selectedDate);
                this.SelRelIndexPart = this.RelIndexPart.filter(data => data.id == this.selectedIndexData.indexId)[0];
                // console.log
                // console.log(this.SelRelIndexPart);
                this.ShowAll = false;
            }
        });
    }
    fetchSignal(tradedate) {
        // console.log(tradedate);
        var that = this;
        this.dataHandler.getSignalsByDate(this.selectedIndexData.indexId, tradedate).then(signaldata => {
            //    console.log(signaldata);
            if (this.selectedIndexData.indexId == 54) {
                if (signaldata.length > 0) {
                    let USLC = signaldata.filter(x => x.indexCode == 9)[0];
                    let USSC = signaldata.filter(x => x.indexCode == 4)[0];
                    let Euro = signaldata.filter(x => x.indexCode == 13)[0];
                    let Uk = signaldata.filter(x => x.indexCode == 1)[0];
                    let Jap = signaldata.filter(x => x.indexCode == 12)[0];
                    if (USLC != undefined) {
                        if (USLC.urltt == 1) {
                            that.sLC = 1;
                        }
                        else if (USLC.urlvt == 1) {
                            that.sLC = 3;
                        }
                        else if (USLC.cash == 1) {
                            that.sLC = 5;
                        }
                        else if (USLC.urltt == .5 && USLC.urlvt == .5) {
                            that.sLC = 2;
                        }
                        else if (USLC.urlvt == .5 && USLC.cash == .5) {
                            that.sLC = 4;
                        }
                    }
                    if (USSC != undefined) {
                        if (USSC.urltt == 1) {
                            that.sSC = 1;
                        }
                        else if (USSC.urlvt == 1) {
                            that.sSC = 3;
                        }
                        else if (USSC.cash == 1) {
                            that.sSC = 5;
                        }
                        else if (USSC.urltt == .5 && USSC.urlvt == .5) {
                            that.sSC = 2;
                        }
                        else if (USSC.urlvt == .5 && USSC.cash == .5) {
                            that.sSC = 4;
                        }
                    }
                    if (Uk != undefined) {
                        if (Uk.urltt == 1) {
                            that.sUK = 1;
                        }
                        else if (Uk.urlvt == 1) {
                            that.sUK = 3;
                        }
                        else if (Uk.cash == 1) {
                            that.sUK = 5;
                        }
                        else if (Uk.urltt == .5 && Uk.urlvt == .5) {
                            that.sUK = 2;
                        }
                        else if (Uk.urlvt == .5 && Uk.cash == .5) {
                            that.sUK = 4;
                        }
                    }
                    if (Jap != undefined) {
                        if (Jap.urltt == 1) {
                            that.sJAP = 1;
                        }
                        else if (Jap.urlvt == 1) {
                            that.sJAP = 3;
                        }
                        else if (Jap.cash == 1) {
                            that.sJAP = 5;
                        }
                        else if (Jap.urltt == .5 && Jap.urlvt == .5) {
                            that.sJAP = 2;
                        }
                        else if (Jap.urlvt == .5 && Jap.cash == .5) {
                            that.sJAP = 4;
                        }
                    }
                    if (Euro != undefined) {
                        if (Euro.urltt == 1) {
                            that.sEUR = 1;
                        }
                        else if (Euro.urlvt == 1) {
                            that.sEUR = 3;
                        }
                        else if (Euro.cash == 1) {
                            that.sEUR = 5;
                        }
                        else if (Euro.urltt == .5 && Euro.urlvt == .5) {
                            that.sEUR = 2;
                        }
                        else if (Euro.urlvt == .5 && Euro.cash == .5) {
                            that.sEUR = 4;
                        }
                    }
                    // that.EnableGroup();
                    this.dataHandler.GetGlobalSignalsByDate(this.selectedIndexData.indexId, tradedate).then(globalsignaldata => {
                        if (globalsignaldata.length > 0) {
                            that.HFLAT = (globalsignaldata[0].hflat * 100).toFixed(2) + "%";
                            that.HFSAT = (globalsignaldata[0].hfsat * 100).toFixed(2) + "%";
                            that.HFEAT = (globalsignaldata[0].hfeat * 100).toFixed(2) + "%";
                            that.HFJAT = (globalsignaldata[0].hfjat * 100).toFixed(2) + "%";
                            that.HFUAT = (globalsignaldata[0].hfuat * 100).toFixed(2) + "%";
                            that.HFR = ((globalsignaldata[0].hflat + globalsignaldata[0].hfsat) * 100).toFixed(2) + "%";
                            that.Europe = (globalsignaldata[0].europe * 100).toFixed(2) + "%";
                            that.UK = (globalsignaldata[0].uk * 100).toFixed(2) + "%";
                            that.Japan = (globalsignaldata[0].japan * 100).toFixed(2) + "%";
                        }
                    });
                }
            }
            else {
                if (signaldata.length > 0) {
                    if (this.key != 'Market View') {
                        that.LEI_E = signaldata[0].lei;
                        that.trggtyp = signaldata[0].triggerType;
                        that.VIX_E = signaldata[0].vix;
                        that.SP_E = signaldata[0].sptr;
                        that.Europe = that.roundValue(signaldata[0].europe * 100) + '%';
                        that.UK = that.roundValue(signaldata[0].uk * 100) + '%';
                        that.Japan = that.roundValue(signaldata[0].japan * 100) + '%';
                    }
                    else {
                        that.LEI = signaldata[0].lei;
                        that.VIX = signaldata[0].vix;
                        that.SP = signaldata[0].sptr;
                        that.trgrtyp = signaldata[0].triggerType;
                    }
                    if (signaldata[0].urltt == 1) {
                        that.Output = 1;
                    }
                    else if (signaldata[0].urlvt == 1) {
                        that.Output = 3;
                    }
                    else if (signaldata[0].cash == 1) {
                        that.Output = 5;
                    }
                    else if (signaldata[0].urltt == .5 && signaldata[0].urlvt == .5) {
                        that.Output = 2;
                    }
                    else if (signaldata[0].urlvt == .5 && signaldata[0].cash == .5) {
                        that.Output = 4;
                    }
                    if (this.key == 'Market View') {
                        this.EnableGroup();
                    }
                    // console.log('LEI_E', that.LEI_E);
                    // console.log('trggtyp', that.trggtyp);
                    // console.log('VIX_E', that.VIX_E);
                    // console.log('SP_E', that.SP_E);
                    // console.log('Output', that.Output);
                }
            }
        });
    }
    getDate(rebalanceDT) {
        var tempdt = rebalanceDT.slice(0, 4) + "/" + rebalanceDT.slice(4, 6) + '/' + rebalanceDT.slice(6, 8);
        var temp = new Date(tempdt);
        return temp.getDate();
    }
    getMonth(rebalanceDT) {
        var tempdt = rebalanceDT.slice(0, 4) + "/" + rebalanceDT.slice(4, 6) + '/' + rebalanceDT.slice(6, 8);
        var temp = new Date(tempdt);
        return temp.toLocaleString('default', { month: 'short' });
    }
    onDateClick(rebalancedt) {
        // console.log('dateclick');
        this.ShowAll = false;
        this.selectedDate = rebalancedt;
        this.isUnscheduled = this.rebalance_dates.filter(data => data.key == this.selectedYear)[0].values.filter(da => da.rebalanceDt == this.selectedDate)[0].unscheduled;
        // console.log(this.isUnscheduled);
        this.fetchSignal(rebalancedt);
    }
    indexNameReplace(item) {
        var temp = item.replace('New Age Alpha ', '');
        temp = temp.replace('Total Return ', '');
        return temp;
    }
    getTitle() {
        if (this.key == 'ESG') {
            return 'ESG Strategies';
        }
        else if (this.key == 'Fixed Income') {
            return 'Fixed Income Strategies';
        }
        else if (this.key == 'Leading Equity') {
            return 'Leading Equity Strategies';
        }
        else if (this.key == 'Long_Short Equity') {
            return 'Long / Short Equity Strategies';
        }
        else if (this.key == 'Low Volatility') {
            return 'Low Volatility Strategies';
        }
        else if (this.key == 'Market View') {
            return 'Market View';
        }
    }
    onSvgClick(id) {
        this.pngLoader = true;
        let width = 0;
        let height = 0;
        let scale = 0;
        var options;
        if (this.key == 'Market View') {
            if (this.selectedIndexData.indexId == 54) {
                options = {
                    width: 600,
                    height: 350,
                    scale: 0.6,
                    backgroundColor: '#ffffff',
                    top: -10,
                    left: 0
                };
            }
            else if (this.isUnscheduled == 'N') {
                options = {
                    width: 600,
                    height: 300,
                    scale: 0.6,
                    backgroundColor: '#ffffff',
                    top: -30,
                    left: 50
                };
            }
            else {
                options = {
                    width: 600,
                    height: 300,
                    scale: 0.6,
                    backgroundColor: '#ffffff',
                    top: -30,
                    left: -5
                };
            }
        }
        else {
            options = {
                width: 2000,
                height: 1000,
                scale: 0.5,
                backgroundColor: '#ffffff'
            };
        }
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_11__["svgAsPngUri"](document.getElementById(id), options, (uri) => {
            // console.log(uri);
            this.photoViewer.show(uri, this.selectedIndex.indexCode, { share: false });
            this.pngLoader = false;
        });
    }
    EnableGroup() {
        // console.log('enable Group');
        let that = this;
        let decText = that.selectedIndex.decision;
        //  console.log(decText);
        if (that.selectedIndex.indexId == 4 || that.selectedIndex.indexId == 9 || that.selectedIndex.indexId == 107 || that.selectedIndex.indexId == 104) {
            if (this.trgrtyp == "LEI") {
                decText = "Leading Economic Index (LEI) Trigger";
            }
        }
        d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtDecisions").select("text").remove();
        d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtDecisions").append("text")
            .attr("x", 0)
            .attr("y", function () {
            if (that.selectedIndex.indexId == 12)
                return decText.length < 14 ? 110 : 105;
            else if (decText.indexOf('LEI') > -1)
                return 98;
            else
                return decText.length < 14 ? 110 : 105;
        })
            .style("font-size", "9px")
            .attr("dy", 0)
            .attr("fill", "#fff")
            .attr("class", "st1 st2 st3")
            .text(decText).call(that.wrap, 55, 42);
        if (that.selectedIndex.indexId == 4 || that.selectedIndex.indexId == 9 || that.selectedIndex.indexId == 107 || that.selectedIndex.indexId == 104) {
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("fill-opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("stroke-opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#RiskSelND").attr("viewBox", "60 -10 550 260");
            if (this.isUnscheduled == "Y") {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#RiskSelND").attr("viewBox", "-30 -20 650 270");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtDecisions").select("text").append("tspan")
                    .attr("x", 42)
                    .attr("dy", "1.4em")
                    .style("font-size", "7px")
                    .style("font-style", "italic")
                    .text("(Unscheduled)");
            }
        }
        else {
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("fill-opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("stroke-opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#RiskSelND").attr("viewBox", "60 -10 550 260");
            if (this.isUnscheduled == "Y") {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]('#txtDecisions').select('text').attr('y', 100);
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#RiskSelND").attr("viewBox", "-30 -20 650 270");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#gDecisions").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtDecisions").select("text").append("tspan")
                    .attr("x", 42)
                    .attr("dy", "1.4em")
                    .style("font-size", "7px")
                    .style("font-style", "italic")
                    .text("(Unscheduled)");
            }
        }
        d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".signalgrp").style("fill-opacity", "1");
        d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".signalgrp").style("stroke-opacity", "1");
        d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".signalgrp").classed('disable', false);
        if (!this.ShowAll) {
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".signalgrp").style("fill-opacity", "0.6");
            //d3.selectAll(".signalgrp").node().classList.add("disable");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".signalgrp").classed("disable", true);
            // d3.selectAll(".csignalgrp").select("circle").style("fill", "#EF462F");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".csignalgrp").style("fill-opacity", "1");
            if (this.LEI == 1) {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#LEI").style("fill-opacity", "1");
                // d3.select("#cLEI").select("circle").style("fill", "#45b65c");
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#cLEI").style("fill-opacity", "0");
            }
            if (this.VIX == 1) {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#VIX").style("fill-opacity", "1");
                // d3.select("#cVIX").select("circle").style("fill", "#45b65c");
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#cVIX").style("fill-opacity", "0");
            }
            if (this.SP == 1) {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#SP").style("fill-opacity", "1");
                //d3.select("#cSP").select("circle").style("fill", "#45b65c");
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#cSP").style("fill-opacity", "0");
            }
            d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#infoCash").style("display", "none");
            let TotSignal = parseInt(this.LEI.toString()) + parseInt(this.VIX.toString()) + parseInt(this.SP.toString());
            let SignalIndText = "";
            if (TotSignal >= 2) {
                SignalIndText = "Two or More Positive Indicators";
            }
            if (TotSignal == 1) {
                SignalIndText = "One Positive Indicator";
            }
            if (TotSignal == 0) {
                SignalIndText = "All Negative Indicator";
            }
            if (TotSignal == 1 && that.Output == 5) {
                SignalIndText = "Continue To Remain In Cash";
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#infoCash").style("display", "block");
            }
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".clsLowtxt").each(function (d, i) {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).selectAll("tspan").each(function (e, j) {
                    that.topTwoLow = that.SelRelIndexPart.mid.split("|")[0] + that.SelRelIndexPart.mid.split("|")[1];
                    that.topTwoLow = that.topTwoLow.replace(/\s+/g, '_');
                    that.topFour = that.SelRelIndexPart.mid.split("|")[0] + that.SelRelIndexPart.mid.split("|")[1];
                    that.topFour = that.topFour.replace(/\s+/g, '_');
                    if (j == 0) {
                        d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.mid.split("|")[0]);
                    }
                    else if (j == 1) {
                        d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.mid.split("|")[1]);
                    }
                });
            });
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".clsToptxt").each(function (d, i) {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).selectAll("tspan").each(function (e, j) {
                    that.topOne = that.SelRelIndexPart.top.split("|")[0] + ' ' + that.SelRelIndexPart.top.split("|")[1];
                    that.topOne = that.topOne.replace(/\s+/g, '_');
                    that.topTwoTop = that.SelRelIndexPart.top.split("|")[0] + ' ' + that.SelRelIndexPart.top.split("|")[1];
                    that.topTwoTop = that.topTwoTop.replace(/\s+/g, '_');
                    if (j == 0) {
                        d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.top.split("|")[0]);
                    }
                    else if (j == 1) {
                        d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.top.split("|")[1]);
                    }
                });
            });
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".clscenter").each(function (d, i) {
                if (that.SelRelIndexPart.center != undefined) {
                    d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).selectAll("tspan").each(function (e, j) {
                        that.topThree = that.SelRelIndexPart.center.split("|")[0] + ' ' + that.SelRelIndexPart.center.split("|")[1];
                        that.topThree = that.topThree.replace(/\s+/g, '_');
                        if (j == 0) {
                            d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.center.split("|")[0]);
                        }
                        else if (j == 1) {
                            d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.center.split("|")[1]);
                        }
                        else if (j == 2) {
                            d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).text(that.SelRelIndexPart.center.split("|")[2]);
                        }
                    });
                }
            });
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".clsTop4").select("text").remove();
            d3__WEBPACK_IMPORTED_MODULE_8__["select"](".clsTop4").append("text")
                .attr("class", "clsToptxt4")
                .attr("y", function () {
                return that.SelRelIndexPart.top.replace("|", " ").length < 25 ? 61 : 58;
            })
                .attr("dy", .25)
                .attr("fill", "#fff")
                .style("font-size", "5.5px")
                .style('text-anchor', 'middle')
                .text(that.SelRelIndexPart.top.replace("|", " ")).call(that.wrap, 31, 333);
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".clsLow4").select("text").remove();
            d3__WEBPACK_IMPORTED_MODULE_8__["select"](".clsLow4").append("text")
                .attr("class", "clsLowtxt4")
                .attr("y", function () {
                return that.SelRelIndexPart.mid.replace("|", " ").length < 36 ? 122 : 118;
            })
                .attr("dy", .25)
                .attr("fill", "#fff")
                .style("font-size", "5.5px")
                .style('text-anchor', 'middle')
                .text(that.SelRelIndexPart.mid.replace("|", " ")).call(that.wrap, 31, 366);
            d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtIndicators").select("text").remove();
            d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#txtIndicators").append("text")
                .attr("y", 30)
                .attr("dy", .25)
                .attr("fill", "#fff")
                .text(SignalIndText).call(that.wrap, 50, 0);
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut").style("fill-opacity", ".5");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut").style("stroke-opacity", ".2");
            //d3.selectAll(".gOut").node().classList.add("disable");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut").classed("disable", true);
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut-" + this.Output).style("fill-opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut-" + this.Output).style("stroke-opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".gOut-" + this.Output).classed('disable', false);
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".glines").style("fill-opacity", ".4");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".glines").style("stroke-opacity", "0.2");
            //d3.selectAll(".glines").node().classList.add("disable");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".glines").classed("disable", true);
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g0").style("fill-opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g0").classed('disable', false);
            //console.log("==" + TotSignal + "==" + this.Output + "==");
            if (TotSignal >= 2 && this.Output == 1) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g1").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g1").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g1").classed('disable', false);
            }
            else if (TotSignal == 1 && this.Output == 2) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g2").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g2").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g2").classed('disable', false);
            }
            else if (TotSignal == 1 && this.Output == 3) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g3").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g3").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g3").classed('disable', false);
            }
            else if (TotSignal == 0 && this.Output == 3) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g4").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g4").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g4").classed('disable', false);
            }
            else if (TotSignal == 0 && this.Output == 4) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g5").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g5").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g5").classed('disable', false);
            }
            else if ((TotSignal == 0 || TotSignal == 1) && this.Output == 5) {
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g6").style("fill-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g6").style("stroke-opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".g6").classed('disable', false);
            }
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".info").on("mouseover", function () {
                //console.log(d3.select(this).attr('id'));
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("." + d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).attr('id') + "pop").style("display", "block");
            }).on("mouseout", function () {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("." + d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).attr('id') + "pop").style("display", "none");
            });
            d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".infoCash").on("mouseover", function () {
                //console.log(d3.select(this).attr('id'));
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("." + d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).attr('id') + "pop").style("display", "block");
            }).on("mouseout", function () {
                d3__WEBPACK_IMPORTED_MODULE_8__["select"]("." + d3__WEBPACK_IMPORTED_MODULE_8__["select"](this).attr('id') + "pop").style("display", "none");
            });
        }
        $("#const_loader").show().delay(3000).queue(function (n) {
            $(this).hide();
            n();
        });
        d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#dvContain").style("display", "block");
    }
    wrap(text, width, xval) {
        text.each(function () {
            var text = d3__WEBPACK_IMPORTED_MODULE_8__["select"](this), words = text.text().split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.1, // ems
            y = text.attr("y"), dy = parseFloat(text.attr("dy")), tspan = text.text(null).append("tspan").attr("x", xval).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", xval).attr("dy", lineHeight + dy + "em").text(word);
                }
            }
        });
    }
    Rbdisplaydate(val) {
        if (val != undefined) {
            var temp = val.slice(4, 6) + '/' + val.slice(6, 8) + '/' + val.slice(0, 4);
            return temp;
        }
    }
};
PerformancePage.ctorParameters = () => [
    { type: _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_10__["DataHandlerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"] }
];
PerformancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-performance',
        template: __webpack_require__(/*! raw-loader!./performance.page.html */ "./node_modules/raw-loader/index.js!./src/app/performance/performance.page.html"),
        styles: [__webpack_require__(/*! ./performance.page.scss */ "./src/app/performance/performance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_10__["DataHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]])
], PerformancePage);



/***/ })

}]);
//# sourceMappingURL=performance-performance-module-es2015.js.map