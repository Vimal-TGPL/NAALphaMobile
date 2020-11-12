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

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/performance/performance.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/performance/performance.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id='header' *ngIf=\"mobile\">\r\n  <ion-toolbar style=\"--background: transparent;\r\n  --ion-color-base: transparent !important;     --border-width: 0px;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode='md' style=\"--color:#ffffff;max-height: 38px;\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"PageTitle\">{{getTitle()}}</ion-title>\r\n  </ion-toolbar>\r\n  <!-- <div id=\"Loader\" class='loader'>\r\n    <img src=\"../../assets/images/NAA.gif\" alt=\"Loader\" height=\"50\">\r\n  </div> -->\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"mobile\" fullscreen>\r\n  <div class=\"sec1\">\r\n    <ion-card >\r\n      <ion-card-content>\r\n        <div class=\"HeaderDiv\">\r\n          <div class=\"CountryDiv\">\r\n            <span class=\"contryItem\" (click)=\"OnItemClick(item)\" *ngFor=\"let item of CountryClasificationList\">\r\n              <p class=\"CountryP\" [ngStyle]=\"{color: selectedCountry==item? '#ffffff' : '#99acde'}\">{{item}}</p>\r\n              <span class=\"underScoreSpan\" *ngIf=\"selectedCountry == item\"></span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"dropDownDiv\" *ngIf=\"selectedIndexData\" style=\"padding: 0px 10px;\">\r\n          <ion-button (click)=\"openPicker()\" expand=\"block\" fill=\"clear\" shape=\"round\" class=\"dropDownBtn\">\r\n            <div class=\"innerdropDownDiv\">\r\n              <span class=\"innerdropDownsapn\" *ngIf=\"selectedIndexData && selectedIndexName\">{{indexNameReplace(selectedIndexName)}}\r\n                ({{selectedIndexData.indexCode}})</span> <span>\r\n                <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n              </span></div>\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedIndexData\" class=\"ChipsDiv\">\r\n    <ion-chip mode=\"ios\" outline=\"true\" (click)=\"onConstChipClick()\" [ngClass]=\"{'activeChip': selectedSection == 'construction'}\">\r\n      <ion-label>Construction</ion-label>\r\n    </ion-chip>\r\n    <ion-chip mode=\"ios\" outline=\"true\" *ngIf=\"key != 'Market View'\" (click)=\"onPerfChipClick()\" [ngClass]=\"{'activeChip': selectedSection == 'perfomance'}\">\r\n      <ion-label>Perfomance</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSection == 'perfomance' && key != 'Market View'\">\r\n    <div *ngIf=\"selectedIndexData\" class=\"descDiv\">\r\n      <p (click)=\"descModel = true;\">{{selectedIndexData.description}}</p>\r\n    </div>\r\n\r\n    <div class=\"PerfomanceDateDiv\" *ngIf=\"selectedIndexData && key != 'Market View'\">\r\n      <p>Perfomance: As of {{selectedIndexData.date}}</p>\r\n    </div>\r\n\r\n    <div class=\"DataCardsOuterDiv\" *ngIf=\"selectedIndexData && key != 'Market View'\">\r\n      <div class=\"DataCardsDiv\" *ngIf=\"selectedIndexData\">\r\n        <ion-card (click)=\"oncardClick('value')\" [ngClass]=\"{activeCard: selectedCard == 'value'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">Value</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.value)}}</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">Value</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.value)}}</p>\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('daily')\" [ngClass]=\"{activeCard: selectedCard == 'daily'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">Daily</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.dailyReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">Daily</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.dailyReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('ytd')\" [ngClass]=\"{activeCard: selectedCard == 'ytd'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">YTD</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.ytdReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">YTD</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.ytdReturn*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('1 year')\" [ngClass]=\"{activeCard: selectedCard == '1 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">1 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y1Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">1 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y1Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('3 year')\" [ngClass]=\"{activeCard: selectedCard == '3 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">3 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y3Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">3 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y3Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('5 year')\" [ngClass]=\"{activeCard: selectedCard == '5 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">5 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y5Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">5 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y5Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('10 year')\" [ngClass]=\"{activeCard: selectedCard == '10 year'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">10 Year</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.y10Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">10 Year</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.y10Return*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('cumulative inception')\"\r\n          [ngClass]=\"{activeCard: selectedCard == 'cumulative inception'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\" style=\"text-align: center;\">Cumulative Inception</p>\r\n              </span>\r\n              <span class=\"DataValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(selectedIndexData.cumReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\" style=\"text-align: center;\">Cumulative Inception</p>\r\n              </span>\r\n              <span class=\"BMValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(SelBMIndData.cumReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('annualized inception')\"\r\n          [ngClass]=\"{activeCard: selectedCard == 'annualized inception'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\" style=\"text-align: center;\">Annualized Inception</p>\r\n              </span>\r\n              <span class=\"DataValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(selectedIndexData.annReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\" style=\"text-align: center;\">Annualized Inception</p>\r\n              </span>\r\n              <span class=\"BMValue\" style=\" margin-top: 10px;\">\r\n                <p>{{roundValue(SelBMIndData.annReturns*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2019')\" [ngClass]=\"{activeCard: selectedCard == '2019'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2019</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year1*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2019</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year1*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2018')\" [ngClass]=\"{activeCard: selectedCard == '2018'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2018</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year2*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2018</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year2*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2017')\" [ngClass]=\"{activeCard: selectedCard == '2017'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2017</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year3*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2017</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year3*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2016')\" [ngClass]=\"{activeCard: selectedCard == '2016'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2016</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year4*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2016</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year4*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2015')\" [ngClass]=\"{activeCard: selectedCard == '2015'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2015</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year5*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2015</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year5*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2014')\" [ngClass]=\"{activeCard: selectedCard == '2014'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2014</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year6*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2014</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year6*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2013')\" [ngClass]=\"{activeCard: selectedCard == '2013'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2013</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year7*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2013</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year7*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2012')\" [ngClass]=\"{activeCard: selectedCard == '2012'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2012</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year8*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2012</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year8*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2011')\" [ngClass]=\"{activeCard: selectedCard == '2011'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2011</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year9*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2011</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year9*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card (click)=\"oncardClick('2010')\" [ngClass]=\"{activeCard: selectedCard == '2010'}\">\r\n          <ion-card-content>\r\n            <div class=\"perfData\">\r\n              <span class=\"DataTitle\">\r\n                <p class=\"ticker\">{{selectedIndexData.indexCode}}</p>\r\n                <p class=\"sub-title\">2010</p>\r\n              </span>\r\n              <span class=\"DataValue\">\r\n                <p>{{roundValue(selectedIndexData.year10*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"container blue\">\r\n              <div class=\"circle\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"BMData\" *ngIf=\"SelBMIndData\">\r\n              <span class=\"BMDataTitle\">\r\n                <p class=\"BMIndname\">{{SelBMIndData.indexName}}</p>\r\n                <p class=\"BMSubTitle\">2010</p>\r\n              </span>\r\n              <span class=\"BMValue\">\r\n                <p>{{roundValue(SelBMIndData.year10*100)}}%</p>\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!SelBMIndData\" class=\"hypenOuterDiv\">\r\n              <div class=\"hypen\"></div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"    \r\nheight: 5vh;\r\n/* height: calc(100vh - 765px);\r\nmax-height: 50px;\r\nmin-height: 35px; */\r\ndisplay: flex;\r\nflex-direction: column;\r\njustify-content: space-around;\" *ngIf=\"selectedIndexData\">\r\n      <div *ngIf=\"selectedIndexData\" class=\"FooterDataDiv\">\r\n        <span>\r\n          <p>First Value Date: {{selectedIndexData.firstValueDt}}</p>\r\n        </span>\r\n        <span>\r\n          <p>Launch Date: {{selectedIndexData.inception}}</p>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"FooterCredit\" *ngIf=\"selectedIndexData\">\r\n        <p>Calculated by S&P Dow Jones Indices</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"    position: absolute;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nbackground: rgba(0, 0, 0, 0.6);\" *ngIf=\"descModel\">\r\n      <ion-card style=\"    --background: #ffffff;\r\n  width: 85vw;\">\r\n        <ion-card-content>\r\n          <div *ngIf=\"selectedIndexData\">\r\n            <span style=\"position: absolute;\r\n        right: 10px;\r\n        top: 10px;\">\r\n              <ion-icon name=\"close-circle-outline\" style=\"font-size: 18px;\" (click)=\"onDescCloseClick()\"></ion-icon>\r\n            </span>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 16px;\r\n        font-family: Open Sans Bold; text-align: center; margin-top: 10px;\">{{selectedIndexName}}</p>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 14px;\r\n        font-family: Open Sans Regular; margin-top: 25px;\">{{selectedIndexData.description}}</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSection == 'construction' && selectedIndexData\">\r\n    <div style=\"    position: absolute;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nbackground: rgba(0, 0, 0, 0.6);\" *ngIf=\"descModel\">\r\n      <ion-card style=\"    --background: #ffffff;\r\n  width: 85vw;\">\r\n        <ion-card-content>\r\n          <div *ngIf=\"selectedIndexData\">\r\n            <span style=\"position: absolute;\r\n        right: 10px;\r\n        top: 10px;\">\r\n              <ion-icon name=\"close-circle-outline\" style=\"font-size: 18px;\" (click)=\"onDescCloseClick()\"></ion-icon>\r\n            </span>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 16px;\r\n        font-family: Open Sans Bold; text-align: center; margin-top: 10px;\">{{selectedIndexName}}</p>\r\n            <p style=\"color: #1c3675;\r\n        font-size: 14px;\r\n        font-family: Open Sans Regular; margin-top: 25px;\">{{selectedIndexData.description}}</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngIf=\"(selectedIndexData && key != 'Market View') && (selectedIndexData.indexId !== 59 && selectedIndexData.indexId !== 60)\" class=\"consDescDiv\">\r\n      <p (click)=\"descModel = true;\">{{selectedIndexData.description}}</p>\r\n    </div>\r\n    \r\n    <div *ngIf=\"selectedIndexData.indexId !== 25 && selectedIndexData.indexId !== 23 && selectedIndexData.indexId !== 21 && selectedIndexData.indexId !== 19 && selectedIndexData.indexId !== 11 && selectedIndexData.indexId !== 8 && selectedIndexData.indexId !== 6 \r\n    && selectedIndexData.indexId !== 3 && selectedIndexData.indexId !== 17 && selectedIndexData.indexId !== 15 && selectedIndexData.indexId !== 102 && selectedIndexData.indexId !== 103 && selectedIndexData.indexId !== 105 && selectedIndexData.indexId !== 106\r\n    && selectedIndexData.indexId !== 66 && selectedIndexData.indexId !== 68 && selectedIndexData.indexId !== 67 && selectedIndexData.indexId !== 65 && selectedIndexData.indexId !== 64 && selectedIndexData.indexId !== 110 && selectedIndexData.indexId !== 109 && selectedIndexData.indexId !== 112 && selectedIndexData.indexId !== 111 \r\n    && selectedIndexData.indexId !== 76 && selectedIndexData.indexId !== 119 && selectedIndexData.indexId !== 115 && selectedIndexData.indexId !== 54 && selectedIndexData.indexId !== 130  && showMVCons\" style=\"    margin: 15px 0 5px 0;\">\r\n      <ion-card style=\"margin: 0px 0px 0px 20px;\r\n      border-radius: 20px 0px 0px 20px;\r\n      background: #fff;\">\r\n        <ion-card-content style=\"padding-inline-end: 0px; padding: 15px 0px 15px 15px;\">\r\n          <div style=\" padding-right: 15px; padding-left: 15px; background: #2a478a;\r\n          border-radius: 15px 0 0 15px;\" (click)=\"onYearClick()\">\r\n            <span style=\"    display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            align-items: center; padding: 5px 0 5px 0; \">\r\n              <p style=\"margin: 0px; color: #fff;\">Year</p>\r\n              <span style=\"display: inherit; align-items: center;\"><p style=\"margin: 0px; margin-right: 20px; font-size: 15px;\r\n                font-family: Open Sans SemiBold; color: #fff;\r\n                \">{{selectedYear}}</p>\r\n                <ion-icon name=\"chevron-down-outline\" style=\"color: #fff;\"></ion-icon></span>\r\n            </span>\r\n          </div>\r\n          <div *ngIf=\"dateList\" class=\"dateDiv\" style=\"overflow-x: auto;\r\n          overflow-y: hidden;display: flex;\r\n          flex-direction: row; margin:10px 5px 0px 5px;\">\r\n            <span *ngFor=\"let item of dateList\" style=\"    display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            background: #0c3b85;\r\n            color: #fff;\r\n            width: 35px;\r\n            height: 65px;\r\n            margin-right: 15px;\r\n            padding: 0 5px;\r\n            border-radius: 20px;\" [ngClass]=\"{activeDate: item.rebalanceDt == selectedDate}\" (click)=\"onDateClick(item.rebalanceDt)\">\r\n              <p>\r\n                {{getDate(item.rebalanceDt)}}\r\n              </p>\r\n              <p>\r\n                {{getMonth(item.rebalanceDt)}}\r\n              </p>\r\n            </span>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div style=\"display: flex;\r\n    justify-content: center;\r\n    align-items: center;\">\r\n      <ion-card style=\"width: 100%;     background: #ffffff;    max-height: 200px;     height: 29vh;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\">\r\n      <span *ngIf=\"pngLoader\" style=\"height: 100%;\r\n      width: 100%;\r\n      position: absolute;display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgb(150 150 150 / 0.5);\r\n    z-index: 2;\"><img style=\"    height: 30px;\r\nwidth: 30px;\" src=\"../../assets/images/NAA.gif\" alt=\"Loading\"></span>\r\n        <ion-card-content style=\"    margin: 0 10px;\r\n        padding-inline-start: 0px;\r\n        padding-inline-end: 0px;\r\n        width: 100%;\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 25\" src=\"../../assets/images/Const/HFELVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFELVT.png','HFELVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 23\" src=\"../../assets/images/Const/HFETT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFETT.png','HFETT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 21\" src=\"../../assets/images/Const/HFJLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJLVT.png','HFJLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 19\" src=\"../../assets/images/Const/HFJTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJTT.png','HFJTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 11\" src=\"../../assets/images/Const/HFLLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLLVT.png','HFLLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 8\" src=\"../../assets/images/Const/HFLTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLTT.png','HFLTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 6\" src=\"../../assets/images/Const/HFSLVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSLVT.png','HFSLVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 3\" src=\"../../assets/images/Const/HFSTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSTT.png','HFSTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 17\" src=\"../../assets/images/Const/HFULVT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFULVT.png','HFULVT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 15\" src=\"../../assets/images/Const/HFUTT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUTT.png','HFUTT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 102\" src=\"../../assets/images/Const/HFSTT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSTT50.png','HFSTT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 103\" src=\"../../assets/images/Const/HFSLVT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFSLVT50.png','HFSLVT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 105\" src=\"../../assets/images/Const/HFLTT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLTT50.png','HFLTT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 106\" src=\"../../assets/images/Const/HFLLVT50.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLLVT50.png','HFLLVT50')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 66\" src=\"../../assets/images/Const/US_LC_ESG50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_ESG50_Index.png','HFLESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 68\" src=\"../../assets/images/Const/US_LC_DEF50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_DEF50_Index.png','HFLEDEF5')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 67\" src=\"../../assets/images/Const/US_LC_ENV50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_ENV50_Index.png','HFLENV')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 65\" src=\"../../assets/images/Const/US_LC_GOV50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_GOV50_Index.png','HFLGOV')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 64\" src=\"../../assets/images/Const/US_LC_SOC50_Index.svg\" (click)=\"onimgClick('www/assets/images/Const/US_LC_SOC50_Index.png','HFLSOC')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 110\" src=\"../../assets/images/Const/HFUEDEF.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUEDEF.png','HFUEDEF')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 109\" src=\"../../assets/images/Const/HFUESG.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUESG.png','HFUESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 112\" src=\"../../assets/images/Const/HFJEDEF.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJEDEF.png','HFJEDEF')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 111\" src=\"../../assets/images/Const/HFJESG.svg\" (click)=\"onimgClick('www/assets/images/Const/HFJESG.png','HFJESG')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 76\" src=\"../../assets/images/Const/HFUHYT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUHYT.png','HFUHYT')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 119\" src=\"../../assets/images/Const/HFLL.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLL.png','HFLL')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 115\" src=\"../../assets/images/Const/HFLS.svg\" (click)=\"onimgClick('www/assets/images/Const/HFLS.png','HFLS')\">\r\n          <img *ngIf=\"selectedIndexData.indexId == 130\" src=\"../../assets/images/Const/HFUEHYT.svg\" (click)=\"onimgClick('www/assets/images/Const/HFUEHYT.png','HFUEHYT')\">\r\n          <!-- <img *ngIf=\"selectedIndexData.indexId == 69\" src=\"../../assets/images/Const/NAA_Index Construction_ESG.svg\" (click)=\"onimgClick('www/assets/images/IndexConst/ESG-Const/NAA_Index Construction_ESG.png','HFLEAT5')\"> -->\r\n          <ion-text *ngIf=\"selectedIndexData.indexId !== 25 && selectedIndexData.indexId !== 23 && selectedIndexData.indexId !== 21 && selectedIndexData.indexId !== 19 && selectedIndexData.indexId !== 11 && selectedIndexData.indexId !== 8 && selectedIndexData.indexId !== 6 \r\n          && selectedIndexData.indexId !== 3 && selectedIndexData.indexId !== 17 && selectedIndexData.indexId !== 15 && selectedIndexData.indexId !== 102 && selectedIndexData.indexId !== 103 && selectedIndexData.indexId !== 105 && selectedIndexData.indexId !== 106\r\n          && selectedIndexData.indexId !== 66 && selectedIndexData.indexId !== 68 && selectedIndexData.indexId !== 67 && selectedIndexData.indexId !== 65 && selectedIndexData.indexId !== 64 && selectedIndexData.indexId !== 110 && selectedIndexData.indexId !== 109 && selectedIndexData.indexId !== 112 && selectedIndexData.indexId !== 111 \r\n          && selectedIndexData.indexId !== 76 && selectedIndexData.indexId !== 119 && selectedIndexData.indexId !== 115 && selectedIndexData.indexId !== 59 && selectedIndexData.indexId !== 60 && selectedIndexData.indexId !== 130 && !showMVCons\">\r\n            <h1 style=\"font-weight: bold;\r\n            font-family: Open Sans Bold;\r\n            color: #0e3980;\r\n            text-align: center;\">Comming Soon...</h1>\r\n          </ion-text>\r\n          <div *ngIf=\"selectedIndexData.indexId == 59\" (click)=\"onSvgClick('Globallead')\">\r\n            <svg version=\"1.1\" id=\"Globallead\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"200 50 1500 1000\" style=\"enable-background:new 200 50 1500 1000;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n  .st0 {\r\n    fill: #F0F3F4;\r\n  }\r\n\r\n  .st1 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  .st2 {\r\n    fill: #00AEEF;\r\n  }\r\n\r\n  .st3 {\r\n    fill: #204693;\r\n  }\r\n\r\n  .st4 {\r\n    fill: #00A204;\r\n  }\r\n\r\n  .st5 {\r\n    fill: url(#SVGID_1_);\r\n  }\r\n\r\n  .st6 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.8661;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st7 {\r\n    fill: #284D95;\r\n  }\r\n\r\n  .st8 {\r\n    fill: none;\r\n    stroke: #054BA4;\r\n    stroke-width: 0.9949;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st9 {\r\n    fill: url(#SVGID_2_);\r\n  }\r\n\r\n  .st10 {\r\n    fill: url(#SVGID_3_);\r\n  }\r\n\r\n  .st11 {\r\n    fill: url(#SVGID_4_);\r\n  }\r\n\r\n  .st12 {\r\n    fill: url(#SVGID_5_);\r\n  }\r\n\r\n  .st13 {\r\n    fill: url(#SVGID_6_);\r\n  }\r\n\r\n  .st14 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.8657;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st15 {\r\n    fill: url(#SVGID_7_);\r\n  }\r\n\r\n  .st16 {\r\n    fill: url(#SVGID_8_);\r\n  }\r\n\r\n  .st17 {\r\n    fill: url(#SVGID_9_);\r\n  }\r\n\r\n  .st18 {\r\n    fill: url(#SVGID_10_);\r\n  }\r\n\r\n  .st19 {\r\n    fill: url(#SVGID_11_);\r\n  }\r\n\r\n  .st20 {\r\n    fill: url(#SVGID_12_);\r\n  }\r\n\r\n  .st21 {\r\n    fill: url(#SVGID_13_);\r\n  }\r\n\r\n  .st22 {\r\n    fill: url(#SVGID_14_);\r\n  }\r\n\r\n  .st23 {\r\n    fill: url(#SVGID_15_);\r\n  }\r\n\r\n  .st24 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.9173;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st25 {\r\n    fill: url(#SVGID_16_);\r\n  }\r\n\r\n  .st26 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  .st27 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .st28 {\r\n    font-size: 26.2557px;\r\n  }\r\n\r\n  .st29 {\r\n    fill: url(#SVGID_17_);\r\n  }\r\n\r\n  .st30 {\r\n    fill: url(#SVGID_18_);\r\n  }\r\n\r\n  .st31 {\r\n    fill: #2b478f;\r\n  }\r\n\r\n  .st32 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .st33 {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .st34 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-width: 2.9202;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .st35 {\r\n    fill: url(#SVGID_19_);\r\n  }\r\n\r\n  .st36 {\r\n    fill: url(#SVGID_20_);\r\n  }\r\n\r\n  .st37 {\r\n    fill: url(#SVGID_21_);\r\n  }\r\n\r\n  .st38 {\r\n    fill: url(#SVGID_22_);\r\n  }\r\n\r\n  .st39 {\r\n    fill: url(#SVGID_23_);\r\n  }\r\n\r\n  .as-Of-date{\r\n    transform: matrix(1, 0, 0, 1, 1450, 250);\r\n    font-size: 25px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n\r\n<g>\r\n<g>\r\n  <text class=\"as-Of-date\">As of {{selectedIndexData.date}}</text>\r\n</g>\r\n        <g>\r\n        <line class=\"st24\" x1=\"1224.8\" y1=\"562.5\" x2=\"672.8\" y2=\"562.5\" />\r\n\r\n\t</g>\r\n        <linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"701.738\" y1=\"562.5\" x2=\"251.9701\" y2=\"562.5\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st5\" d=\"M305.2,509.2h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H305.2\r\n\t\tc-29.4,0-53.3-23.9-53.3-53.3v0C252,533.1,275.8,509.2,305.2,509.2z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 335.4045 546.1881)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha United</tspan><tspan x=\"-6.9\" y=\"43.2\" class=\"st26 st27 st28\">Kingdom Leading Index</tspan></text>\r\n\t</g>\r\n        <linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"711.2824\" x2=\"281.1431\" y2=\"711.2824\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st9\" d=\"M334.4,658h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4c-29.4,0-53.3-23.9-53.3-53.3\r\n\t\tv0C281.1,681.9,305,658,334.4,658z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 371.552 694.9708)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Japan</tspan><tspan x=\"46\" y=\"43.2\" class=\"st26 st27 st28\">Leading Index</tspan></text>\r\n\t</g>\r\n        <linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"413.7176\" x2=\"281.1431\" y2=\"413.7176\">\r\n        <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n        <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n\t</linearGradient>\r\n        <path class=\"st10\" d=\"M334.4,360.4h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4\r\n\t\tc-29.4,0-53.3-23.9-53.3-53.3v0C281.1,384.3,305,360.4,334.4,360.4z\" />\r\n\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 362.136 397.4059)\"><tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Europe</tspan><tspan x=\"15.1\" y=\"43.2\" class=\"st26 st27 st28\">Ex-UK Leading Index</tspan></text>\r\n\t</g>\r\n        <path class=\"st24\" d=\"M730.9,413.7h373.7c9.7,0,17.5,7.8,17.5,17.5v84.6c0,9.7,7.8,17.5,17.5,17.5h111.1\" />\r\n\r\n        <path class=\"st24\" d=\"M730.9,715.3h373.7c9.7,0,17.5-7.8,17.5-17.5v-84.6c0-9.7,7.8-17.5,17.5-17.5h111.1\" />\r\n\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 397.4059)\" class=\"st31 st32 st33\">{{Europe}}</text>\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 543.2706)\" class=\"st31 st32 st33\">{{UK}}</text>\r\n        <text transform=\"matrix(0.99 0 0 1 897.7092 697.8878)\" class=\"st31 st32 st33\">{{Japan}}</text>\r\n        <g>\r\n        <path class=\"st1\" d=\"M1614.9,615.8h-343.2c-29.4,0-53.3-23.9-53.3-53.3v0c0-29.4,23.9-53.3,53.3-53.3h343.2\r\n\t\t\tc29.4,0,53.3,23.9,53.3,53.3v0C1668.2,591.9,1644.3,615.8,1614.9,615.8z\" />\r\n\r\n\t</g>\r\n        <g>\r\n        <g>\r\n        <text transform=\"matrix(1 0 0 1 1273.6868 549.1041)\"><tspan x=\"0\" y=\"0\" class=\"st7 st27 st28\">New Age Alpha Developed </tspan><tspan x=\"0.6\" y=\"43.2\" class=\"st7 st27 st28\">World Ex-US Leading Index</tspan></text>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>\r\n          </div>\r\n          <div *ngIf=\"selectedIndexData.indexId == 60\" (click)=\"onSvgClick('Globallow')\">\r\n            <svg version=\"1.1\" id=\"Globallow\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            viewBox=\"200 50 1500 1000\" style=\"enable-background:new 200 50 1500 1000;\" xml:space=\"preserve\">\r\n       <style type=\"text/css\">\r\n         .st0 {\r\n           fill: #F0F3F4;\r\n         }\r\n\r\n         .st1 {\r\n           fill: #D1D8DD;\r\n         }\r\n\r\n         .st2 {\r\n           fill: #00AEEF;\r\n         }\r\n\r\n         .st3 {\r\n           fill: #204693;\r\n         }\r\n\r\n         .st4 {\r\n           fill: #00A204;\r\n         }\r\n\r\n         .st5 {\r\n           fill: url(#SVGID_1_);\r\n         }\r\n\r\n         .st6 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.8661;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st7 {\r\n           fill: #284D95;\r\n         }\r\n\r\n         .st8 {\r\n           fill: none;\r\n           stroke: #054BA4;\r\n           stroke-width: 0.9949;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st9 {\r\n           fill: url(#SVGID_2_);\r\n         }\r\n\r\n         .st10 {\r\n           fill: url(#SVGID_3_);\r\n         }\r\n\r\n         .st11 {\r\n           fill: url(#SVGID_4_);\r\n         }\r\n\r\n         .st12 {\r\n           fill: url(#SVGID_5_);\r\n         }\r\n\r\n         .st13 {\r\n           fill: url(#SVGID_6_);\r\n         }\r\n\r\n         .st14 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.8657;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st15 {\r\n           fill: url(#SVGID_7_);\r\n         }\r\n\r\n         .st16 {\r\n           fill: url(#SVGID_8_);\r\n         }\r\n\r\n         .st17 {\r\n           fill: url(#SVGID_9_);\r\n         }\r\n\r\n         .st18 {\r\n           fill: url(#SVGID_10_);\r\n         }\r\n\r\n         .st19 {\r\n           fill: url(#SVGID_11_);\r\n         }\r\n\r\n         .st20 {\r\n           fill: url(#SVGID_12_);\r\n         }\r\n\r\n         .st21 {\r\n           fill: url(#SVGID_13_);\r\n         }\r\n\r\n         .st22 {\r\n           fill: url(#SVGID_14_);\r\n         }\r\n\r\n         .st23 {\r\n           fill: url(#SVGID_15_);\r\n         }\r\n\r\n         .st24 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.9173;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st25 {\r\n           fill: url(#SVGID_16_);\r\n         }\r\n\r\n         .st26 {\r\n           fill: #FFFFFF;\r\n         }\r\n\r\n         .st27 {\r\n           font-family: 'Open Sans SemiBold';\r\n         }\r\n\r\n         .st28 {\r\n           font-size: 26.2557px;\r\n         }\r\n\r\n         .st29 {\r\n           fill: url(#SVGID_17_);\r\n         }\r\n\r\n         .st30 {\r\n           fill: url(#SVGID_18_);\r\n         }\r\n\r\n         .st31 {\r\n           fill: #054BA4;\r\n         }\r\n\r\n         .st32 {\r\n           font-family: 'Open Sans SemiBold';\r\n         }\r\n\r\n         .st33 {\r\n           font-size: 25px;\r\n         }\r\n\r\n         .st34 {\r\n           fill: none;\r\n           stroke: #00B9EE;\r\n           stroke-width: 2.9202;\r\n           stroke-linecap: round;\r\n           stroke-linejoin: round;\r\n           stroke-miterlimit: 10;\r\n         }\r\n\r\n         .st35 {\r\n           fill: url(#SVGID_19_);\r\n         }\r\n\r\n         .st36 {\r\n           fill: url(#SVGID_20_);\r\n         }\r\n\r\n         .st37 {\r\n           fill: url(#SVGID_21_);\r\n         }\r\n\r\n         .st38 {\r\n           fill: url(#SVGID_22_);\r\n         }\r\n\r\n         .st39 {\r\n           fill: url(#SVGID_23_);\r\n         }\r\n         .as-Of-date{\r\n          transform: matrix(1, 0, 0, 1, 1450, 250);\r\n          font-size: 25px;\r\n          font-family: Open Sans SemiBold;\r\n          fill: #2b478f;\r\n         }\r\n</style>\r\n       <g>\r\n        <g>\r\n          <text class=\"as-Of-date\">As of {{selectedIndexData.date}}</text>\r\n        </g>\r\n       <g>\r\n       <line class=\"st24\" x1=\"1224.8\" y1=\"562.5\" x2=\"672.8\" y2=\"562.5\" />\r\n\r\n               </g>\r\n       <linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"701.738\" y1=\"562.5\" x2=\"251.9701\" y2=\"562.5\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st5\" d=\"M305.2,509.2h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H305.2\r\n     c-29.4,0-53.3-23.9-53.3-53.3v0C252,533.1,275.8,509.2,305.2,509.2z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 335.4045 546.1881)\">\r\n       <tspan x=\"-13\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha United</tspan>\r\n       <tspan x=\"-18\" y=\"43.2\" class=\"st26 st27 st28\">Kingdom Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"711.2824\" x2=\"281.1431\" y2=\"711.2824\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st9\" d=\"M334.4,658h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4c-29.4,0-53.3-23.9-53.3-53.3\r\n     v0C281.1,681.9,305,658,334.4,658z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 371.552 694.9708)\">\r\n       <tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Japan</tspan>\r\n       <tspan x=\"15\" y=\"43.2\" class=\"st26 st27 st28\">Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"730.911\" y1=\"413.7176\" x2=\"281.1431\" y2=\"413.7176\">\r\n       <stop offset=\"0\" style=\"stop-color:#00BEFF\" />\r\n\r\n       <stop offset=\"1\" style=\"stop-color:#054BA4\" />\r\n\r\n               </linearGradient>\r\n       <path class=\"st10\" d=\"M334.4,360.4h343.2c29.4,0,53.3,23.9,53.3,53.3v0c0,29.4-23.9,53.3-53.3,53.3H334.4\r\n     c-29.4,0-53.3-23.9-53.3-53.3v0C281.1,384.3,305,360.4,334.4,360.4z\" />\r\n\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 362.136 397.4059)\">\r\n       <tspan x=\"0\" y=\"0\" class=\"st26 st27 st28\">New Age Alpha Europe</tspan>\r\n       <tspan x=\"-5\" y=\"43.2\" class=\"st26 st27 st28\">Ex-UK Low Volatility Index</tspan>\r\n                 </text>\r\n               </g>\r\n       <path class=\"st24\" d=\"M730.9,413.7h373.7c9.7,0,17.5,7.8,17.5,17.5v84.6c0,9.7,7.8,17.5,17.5,17.5h111.1\" />\r\n\r\n       <path class=\"st24\" d=\"M730.9,715.3h373.7c9.7,0,17.5-7.8,17.5-17.5v-84.6c0-9.7,7.8-17.5,17.5-17.5h111.1\" />\r\n\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 397.4059)\" class=\"st31 st32 st33\">{{Europe}}</text>\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 543.2706)\" class=\"st31 st32 st33\">{{UK}}</text>\r\n       <text transform=\"matrix(0.99 0 0 1 897.7092 697.8878)\" class=\"st31 st32 st33\">{{Japan}}</text>\r\n       <g>\r\n       <path class=\"st1\" d=\"M1614.9,615.8h-343.2c-29.4,0-53.3-23.9-53.3-53.3v0c0-29.4,23.9-53.3,53.3-53.3h343.2\r\n       c29.4,0,53.3,23.9,53.3,53.3v0C1668.2,591.9,1644.3,615.8,1614.9,615.8z\" />\r\n\r\n               </g>\r\n       <g>\r\n       <g>\r\n       <text transform=\"matrix(1 0 0 1 1273.6868 549.1041)\">\r\n       <tspan x=\"-15\" y=\"0\" class=\"st7 st27 st28\">New Age Alpha Developed </tspan>\r\n       <tspan x=\"-28\" y=\"43.2\" class=\"st7 st27 st28\">World Ex-US Low Volatility Index</tspan>\r\n                   </text>\r\n                 </g>\r\n               </g>\r\n             </g>\r\n           </svg>\r\n          </div>\r\n          \r\n          <div *ngIf=\"showMVCons && selectedIndexData.indexId !== 54\" (click)=\"onSvgClick('RiskSelND')\">\r\n            <svg version=\"1.1\" id=\"RiskSelND\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 590 250\" xml:space=\"preserve\" width=\"100%\" height=\"100%\">\r\n<style type=\"text/css\">\r\n  #RiskSelND .nt0 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  #RiskSelND .nt1 {\r\n    fill: #324D91;\r\n  }\r\n\r\n  #RiskSelND .nt2 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  #RiskSelND .nt3 {\r\n    font-size: 7.5px;\r\n  }\r\n\r\n  #RiskSelND .nt4 {\r\n    fill: #324E90;\r\n  }\r\n\r\n  #RiskSelND .nt5 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  #RiskSelND .nt6 {\r\n    font-size: 6.27px;\r\n  }\r\n\r\n  #RiskSelND .nt7 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .nt8 {\r\n    font-size: 5px;\r\n  }\r\n\r\n  #RiskSelND .nt9 {\r\n    fill: #EB3C29;\r\n  }\r\n\r\n  #RiskSelND .nt10 {\r\n    fill: #60B647;\r\n  }\r\n\r\n  #RiskSelND .nt11 {\r\n    fill: #00B9EE;\r\n  }\r\n\r\n  #RiskSelND .nt12 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  #RiskSelND .nt13 {\r\n    font-size: 5.25px;\r\n  }\r\n\r\n  #RiskSelND .nt14 {\r\n    font-size: 11.28px;\r\n  }\r\n\r\n  #RiskSelND .nt15 {\r\n    font-size: 9px;\r\n  }\r\n\r\n  #RiskSelND .nt16 {\r\n    fill: #07AB51;\r\n  }\r\n\r\n  #RiskSelND .nt17 {\r\n    font-family: 'Open Sans ExtraBold';\r\n  }\r\n\r\n  #RiskSelND .nt18 {\r\n    fill: url(#SVGIDR_1_);\r\n  }\r\n\r\n  #RiskSelND .nt19 {\r\n    fill: url(#SVGIDR_2_);\r\n  }\r\n\r\n  #RiskSelND .nt20 {\r\n    fill: url(#SVGIDR_3_);\r\n  }\r\n\r\n  #RiskSelND .nt21 {\r\n    fill: #EB3C29;\r\n    stroke: #FFFFFF;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .nt22 {\r\n    fill: #60B647;\r\n    stroke: #FFFFFF;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  #RiskSelND .clsToptxt4, .clsLowtxt4 {\r\n    text-anchor: start;\r\n    font-size: 14px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .clstxt1 {\r\n    text-anchor: start;\r\n    font-size: 15px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .clsToptxt, .clsLowtxt, .clstxt {\r\n    text-anchor: start;\r\n    font-size: 16px;\r\n    font-family: Open Sans Bold;\r\n  }\r\n\r\n  #RiskSelND .as-of-date{\r\n    transform: matrix(1, 0, 0, 1, 500, 0);\r\n    font-size: 8px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n    <g>\r\n      <text class=\"as-of-date\">As of {{Rbdisplaydate(selectedDate)}}</text>\r\n    </g>\r\n<g class=\"glines g1\">\r\n            <text transform=\"matrix(1 0 0 1 287.76 25.875)\" class=\"nt4 nt2 nt12\">2 or 3</text>\r\n            <path class=\"nt5\" d=\"M312.3,18.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\tC308.1,20.4,310,18.5,312.3,18.5 M312.3,17.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\tC317.5,19.9,315.2,17.5,312.3,17.5z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M312.3,27.4c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C317,25.3,314.9,27.4,312.3,27.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M312,23h-1.4v-0.6h1.4V21h0.6v1.4h1.4V23h-1.4v1.4H312V23z\" />\r\n\r\n  </g>\r\n            <path class=\"nt0\" d=\"M572.8,34.4c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9H447c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC573.3,36.4,573.1,35.4,572.8,34.4z\" />\r\n\r\n            <path class=\"nt7\" d=\"M221.7,101h54.8c1.7,0,3.2-1.4,3.2-3.1c0,0,0,0,0,0V32c0-1.7,1.4-3.2,3.1-3.2c0,0,0,0,0,0h171.7\" />\r\n\r\n  <!--<text transform=\"matrix(1 0 0 1 488.5681 30.7431)\" class=\"nt1 nt2 nt3\">NAA Leading Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 488.5681 30.7431)\" class=\"clsToptxt clstxt clsTop clsTop nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start\" y=\"-4\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"8\" x=\"0\">Leading Index</tspan>\r\n  </text>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"468.1\" cy=\"28.5\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 460.115 30.275)\" class=\"nt5 nt2 nt6\">100%</text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(553, -91)\" (click)=\"riskSelDev(topOne)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n        </g>\r\n</g>\r\n<g class=\"gOut gOut-2 clsTop clsLow\">\r\n            <g>\r\n            <g>\r\n            <path class=\"nt0\" d=\"M573.3,90h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\t\tC574.4,90,573.9,90,573.3,90z\" />\r\n\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"489.9\" cy=\"71.6\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 483.6002 67.815)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 483.5999 79.495)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            </g>\r\n            <!--<text transform=\"matrix(1 0 0 1 507.1555 66.8151)\" class=\"nt1 nt2 nt3\">NAA Leading Index</text>\r\n  <text transform=\"matrix(1 0 0 1 507.1557 80.9499)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 507.1555 66.8151)\" class=\"clsToptxt clstxt1 clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;  \" y=\"-5\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"7\" x=\"0\">Leading Index</tspan>\r\n            </text>\r\n            <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(569, -45)\" (click)=\"riskSelDev(topTwoTop)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n            <!-- </g> -->\r\n            <text transform=\"matrix(1 0 0 1 507.1557 80.9499)\" class=\"clsLowtxt clstxt1 clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;  \" y=\"0\">\r\n            <tspan dy=\"0\" x=\"0\">NAA U.S. LC</tspan>\r\n            <tspan dy=\"7\" x=\"0\">Low Vol Index</tspan>\r\n            </text>\r\n            <!-- Bottom -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(573, -14)\" (click)=\"riskSelDev(topTwoLow)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n            <!-- </g> -->\r\n          </g>\r\n            <path class=\"nt7\" d=\"M361,53.7h83.3c1.7,0,3.2,1.4,3.2,3.2v11.9c0,1.7,1.4,3.2,3.1,3.2c0,0,0,0,0,0h131.5\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 382.14 59.665)\" class=\"nt4 nt2 nt8\">Currently &gt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 382.14 65.665)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <path class=\"nt5\" d=\"M361,49.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\tC356.9,51.4,358.7,49.5,361,49.5 M361,48.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\tC366.2,50.8,363.9,48.5,361,48.5z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M361,58.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\t\tC365.7,56.3,363.6,58.4,361,58.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M360.9,53.9h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V53.9z\" />\r\n\r\n\t\t</g>\r\n            <circle class=\"nt4\" cx=\"383.3\" cy=\"53.7\" r=\"1.3\" />\r\n\r\n\t</g>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M333,68.3v43.3c0,1.7-1.4,3.2-3.2,3.2l0,0H220.8\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 283.58 122.895)\" class=\"nt11 nt2 nt13\">H-Factor<tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"300.4,116.5 301.6,115.1 299.1,115.1 \t\t\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 289.22 111.025)\" class=\"nt4 nt2 nt12\">1</text>\r\n            <path class=\"nt10\" d=\"M300.2,113.3c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\tC304.9,111.2,302.8,113.3,300.2,113.3z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M300.2,104.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC296,106.3,297.9,104.5,300.2,104.5 M300.2,103.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\t\tC305.4,105.8,303,103.5,300.2,103.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M299.9,109h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V109z\" />\r\n\r\n\t\t</g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"333\" cy=\"68.3\" r=\"24.3\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 326.3991 62.5927)\">\r\n            <tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan>\r\n            <tspan x=\"-5.3\" y=\"7.5\" class=\"nt5 nt2 nt6\">Leading</tspan>\r\n            <tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan>\r\n      </text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n<g>\r\n            <g>\r\n    <!--<g class=\"gOut gOut-3 clsLow\">\r\n      <path class=\"nt0\" d=\"M585.5,114.6c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n    c0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n    c5.8,0,10.5-4.6,10.7-10.4C585.5,120.1,585.5,117.4,585.5,114.6L585.5,114.6L585.5,114.6z\" />\r\n      <g>\r\n      <text transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>\r\n      <g>\r\n      <circle class=\"nt4\" cx=\"496\" cy=\"114.7\" r=\"13.9\" />\r\n      <text transform=\"matrix(1 0 0 1 488.07 116.435)\" class=\"nt5 nt2 nt6\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>-->\r\n            <g class=\"glines g4\">\r\n            <text transform=\"matrix(1 0 0 1 419.94 120.645)\" class=\"nt4 nt2 nt8\">Currently &gt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 419.94 126.645)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <line class=\"nt7\" x1=\"483.5\" y1=\"115\" x2=\"393.5\" y2=\"115\" />\r\n\r\n            <g>\r\n            <circle class=\"nt10\" cx=\"391.6\" cy=\"115\" r=\"4.7\" />\r\n\r\n            <path class=\"nt5\" d=\"M391.6,110.8c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC387.4,112.6,389.3,110.8,391.6,110.8 M391.6,109.8c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tC396.8,112.1,394.4,109.8,391.6,109.8z\" />\r\n\r\n            <path class=\"nt5\" d=\"M391.4,115.1H390v-0.6h1.4V113h0.6v1.4h1.5v0.6h-1.4v1.4h-0.6L391.4,115.1z\" />\r\n\r\n      </g>\r\n            <circle class=\"nt4\" cx=\"421.2\" cy=\"115\" r=\"1.3\" />\r\n\r\n    </g>\r\n  </g>\r\n</g>\r\n<g>\r\n            <g>\r\n            <g class=\"glines g2 g3\">\r\n            <path class=\"nt7\" d=\"M333,68.3v43.3c0,1.7-1.4,3.2-3.2,3.2l0,0H220.8\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 283.58 122.895)\" class=\"nt11 nt2 nt13\">H-Factor<tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"300.4,116.5 301.6,115.1 299.1,115.1 \t\t\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 289.22 111.025)\" class=\"nt4 nt2 nt12\">1</text>\r\n            <path class=\"nt10\" d=\"M300.2,113.3c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7v0\r\n\t\t\tC304.9,111.2,302.8,113.3,300.2,113.3z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M300.2,104.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2v0\r\n\t\t\t\tC296,106.3,297.9,104.5,300.2,104.5 M300.2,103.5c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2v0\r\n\t\t\t\tC305.4,105.8,303,103.5,300.2,103.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M299.9,109h-1.4v-0.6h1.4v-1.4h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V109z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <g class=\"glines g2 g3 clsTop4\">\r\n            <circle class=\"nt4\" cx=\"333\" cy=\"68.3\" r=\"24.3\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 326.3991 62.5928)\"><tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan><tspan x=\"-5.3\" y=\"7.5\" class=\"nt5 nt2 nt6\">Leading</tspan><tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan></text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"glines g3\">\r\n            <path class=\"nt7\" d=\"M437.7,115V86c0-1.7-1.4-3.2-3.2-3.2H362\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 381.89 88.785)\" class=\"nt4 nt2 nt8\">Currently &lt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 381.89 94.785)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <path class=\"nt5\" d=\"M361,78.7c2.3,0,4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\tC356.9,80.6,358.7,78.7,361,78.7 M361,77.7c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0\r\n\t\t\tC366.2,80,363.9,77.7,361,77.7z\" />\r\n\r\n            <g>\r\n            <path class=\"nt9\" d=\"M361,87.6c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC365.7,85.5,363.6,87.5,361,87.6z\" />\r\n\r\n            <path class=\"nt5\" d=\"M360.1,83.1v-0.7h1.8v0.7H360.1z\" />\r\n\r\n    </g>\r\n            <circle class=\"nt4\" cx=\"382.7\" cy=\"82.9\" r=\"1.3\" />\r\n\r\n  </g>\r\n            <g class=\"gOut gOut-3 clsLow\">\r\n            <path class=\"nt0\" d=\"M585.5,114.6c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t  c0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t  c5.8,0,10.5-4.6,10.7-10.4C585.5,120.1,585.5,117.4,585.5,114.6L585.5,114.6L585.5,114.6z\" />\r\n\r\n            <line class=\"nt7\" x1=\"483.5\" y1=\"115\" x2=\"437.2\" y2=\"115\" />\r\n\r\n            <g>\r\n        <!--<text  transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 513.3396 116.8354)\" class=\"clstxt clsTop clscenter nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;\" y=\"-4\">\r\n            <tspan dy=\"0\" x=\"0\"></tspan>\r\n            <tspan dy=\"8\" x=\"0\"></tspan>\r\n        </text>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"497.2\" cy=\"114.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 488.07 116.4351)\" class=\"nt5 nt2 nt6\">100%</text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(575, -1)\" (click)=\"riskSelDev(topThree)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n        </g>\r\n      </g>\r\n  </g>\r\n</g>\r\n<g class=\"gOut gOut-4 clsTop\">\r\n            <g>\r\n            <path class=\"nt0\" d=\"M573.3,139.3h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\tC574.4,139.3,573.9,139.3,573.3,139.3z\" />\r\n\r\n            <g>\r\n          <!--<text transform=\"matrix(1 0 0 1 508.46 153.365)\" class=\"nt1 nt2 nt3\">NAA Low Vol Index</text>-->\r\n            <text transform=\"matrix(1 0 0 1 508.46 153.365)\" class=\"clsLowtxt clstxt clsMid nt1 nt2 nt3\" fill=\"#666\" style=\"text-anchor: start;\" y=\"-5\">\r\n            <tspan dy=\"0\" x=\"0\"></tspan>\r\n            <tspan dy=\"7\" x=\"0\"></tspan>\r\n          </text>\r\n          <!-- Top -->\r\n            <!-- <g class=\"rounded-hover\" transform=\"translate(573, 41)\" (click)=\"riskSelDev(topFour)\"> -->\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg> -->\r\n          <!-- </g> -->\r\n            <text transform=\"matrix(1 0 0 1 508.46 168.395)\" class=\"clstxt clsTop nt1 nt2 nt3\">Cash</text>\r\n        </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"489.9\" cy=\"157.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 483.6067 153.745)\" class=\"nt5 nt2 nt6\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 483.6067 165.665)\" class=\"nt5 nt2 nt6\">50%</text>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M582.2,158H459.1c-1.7,0-3.2-1.4-3.2-3.2v0.3c0-1.7-1.4-3.2-3.2-3.2h-65\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 408.6 143.345)\" class=\"nt4 nt2 nt8\">Currently &lt; 200 day </text>\r\n            <text transform=\"matrix(1 0 0 1 408.6 149.345)\" class=\"nt4 nt2 nt8\">moving average</text>\r\n            <g>\r\n            <path class=\"nt9\" d=\"M389,156.7c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\tC393.7,154.6,391.6,156.7,389,156.7z\" />\r\n\r\n            <path class=\"nt5\" d=\"M389,147.9c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2l0,0\r\n\t\t\tC384.8,149.7,386.7,147.9,389,147.9 M389,146.9c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2l0,0\r\n\t\t\tC394.2,149.2,391.9,146.9,389,146.9z\" />\r\n\r\n            <path class=\"nt5\" d=\"M388.1,152.3v-0.7h1.8v0.7H388.1z\" />\r\n\r\n    </g>\r\n            <circle class=\"nt4\" cx=\"409.2\" cy=\"152.1\" r=\"1.3\" />\r\n\r\n  </g>\r\n</g>\r\n<g>\r\n            <g class=\"glines g5 g4\">\r\n            <path class=\"nt7\" d=\"M329.3,170.2h34c1.7,0,3.2-1.4,3.2-3.2l0,0V132\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 368.9398 162.975)\" class=\"nt4 nt2 nt8\">LEI increasing in any of </text>\r\n            <text transform=\"matrix(1 0 0 1 368.9398 168.975)\" class=\"nt4 nt2 nt8\">the prior 3 months</text>\r\n            <g>\r\n            <path class=\"nt10\" d=\"M329.3,174.9c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC334,172.8,331.9,174.8,329.3,174.9z\" />\r\n\r\n            <g>\r\n            <path class=\"nt5\" d=\"M329.3,166c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\t\tC325.2,167.8,327,166,329.3,166 M329.3,165c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0\r\n\t\t\t\t\tC334.5,167.3,332.2,165,329.3,165z\" />\r\n\r\n            <path class=\"nt5\" d=\"M329.1,170.3h-1.4v-0.6h1.4v-1.5h0.6v1.5h1.4v0.6h-1.4v1.5h-0.6V170.3z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <text transform=\"matrix(1 0 0 1 336.4898 177.285)\" class=\"nt11 nt2 nt8\">H-Factor <tspan y=\"-3\" style=\"font-size:3px;\">TM </tspan> <tspan y=\"0\"> Test</tspan></text>\r\n            <polygon class=\"nt11\" points=\"352.5,171.8 353.8,170.4 351.2,170.4\" />\r\n\r\n            <circle class=\"nt4\" cx=\"366.5\" cy=\"160.8\" r=\"1.3\" />\r\n\r\n  </g>\r\n  \r\n            <g class=\"glines g5 g4 clsLow4\">\r\n            <circle class=\"nt4\" cx=\"366.5\" cy=\"132\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 360.1188 126.3105)\"><tspan x=\"0\" y=\"0\" class=\"nt5 nt2 nt6\">NAA</tspan><tspan x=\"-5.1\" y=\"7.5\" class=\"nt5 nt2 nt6\">Low Vol</tspan><tspan x=\"-1.8\" y=\"15\" class=\"nt5 nt2 nt6\">Index</tspan></text>\r\n  </g>\r\n            <g class=\"glines g4 g5 g6\">\r\n            <path class=\"nt7\" d=\"M293.1,183.8h-29.3c-1.7,0-3.2-1.4-3.2-3.2l0,0v-49.3c0-1.7-1.3-3-3-3l0,0h-36.5\" />\r\n\r\n        <!--<g style=\"transform:rotate(180deg)\">\r\n      <text transform=\"matrix(0 -1 1 0 256.75 166.045)\" class=\"nt4 nt2 nt12\">0</text>\r\n        </g>-->\r\n            <g>\r\n            <path class=\"nt5\" d=\"M254.5,151.6c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\tC250.3,153.5,252.2,151.6,254.5,151.6 M254.5,150.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tc0,0,0,0,0,0C259.7,152.9,257.4,150.6,254.5,150.6z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M254.5,160.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\t\t\tC259.2,158.3,257.1,160.4,254.5,160.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M254.2,156.1h-1.4v-0.6h1.4V154h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V156.1z\" />\r\n\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"302.6\" cy=\"183.8\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 298.14 181.355)\" class=\"nt5 nt2 nt6\">LEI</text>\r\n            <text transform=\"matrix(1 0 0 1 288.91 188.875)\" class=\"nt5 nt2 nt6\">Indicator</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g>\r\n            <g class=\"glines g4 g5 g6\">\r\n            <path class=\"nt7\" d=\"M293.1,183.8h-29.3c-1.7,0-3.2-1.4-3.2-3.2l0,0v-49.3c0-1.7-1.3-3-3-3l0,0h-36.5\" />\r\n\r\n            <g>\r\n            <text y=\"167\" x=\"252\" class=\"nt4 nt2 nt12\">0</text>\r\n      </g>\r\n            <g>\r\n            <path class=\"nt5\" d=\"M254.5,151.6c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0,0,0,0,0,0\r\n\t\t\t\tC250.3,153.5,252.2,151.6,254.5,151.6 M254.5,150.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2\r\n\t\t\t\tc0,0,0,0,0,0C259.7,152.9,257.4,150.6,254.5,150.6z\" />\r\n\r\n            <g>\r\n            <path class=\"nt10\" d=\"M254.5,160.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7l0,0\r\n\t\t\t\t\tC259.2,158.3,257.1,160.4,254.5,160.4z\" />\r\n\r\n            <path class=\"nt5\" d=\"M254.2,156.1h-1.4v-0.6h1.4V154h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V156.1z\" />\r\n\r\n          </g>\r\n        </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"302.6\" cy=\"183.8\" r=\"24.3\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 298.14 181.355)\" class=\"nt5 nt2 nt6\">LEI</text>\r\n            <text transform=\"matrix(1 0 0 1 288.91 188.875)\" class=\"nt5 nt2 nt6\">Indicator</text>\r\n        </g>\r\n      </g>\r\n            <g class=\"gOut gOut-5\">\r\n            <path class=\"nt0\" d=\"M572.8,195c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9H447c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\tC573.3,192.9,573.1,194,572.8,195z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 489.85 203.325)\" class=\"nt1 nt2 nt3\" style=\"font-size:6pt !important\">Cash</text>\r\n            <g>\r\n            <path class=\"nt7\" d=\"M455.5,201.1h-30.1c-1.7,0-3.2-1.4-3.2-3.1c0,0,0,0,0,0v-4.7c0-1.7-1.4-3.2-3.2-3.2h-87.6\" />\r\n\r\n            <g>\r\n            <path class=\"nt9\" d=\"M332.2,194.5c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7c0,0,0,0,0,0\r\n\t\t\t\tC336.8,192.4,334.7,194.5,332.2,194.5z\" />\r\n\r\n            <path class=\"nt5\" d=\"M332.2,185.6c2.3,0,4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2\r\n\t\t\t\tC328,187.5,329.8,185.6,332.2,185.6L332.2,185.6 M332.2,184.6c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2\r\n\t\t\t\tc2.9,0,5.2-2.3,5.2-5.2c0,0,0,0,0,0C337.3,187,335,184.7,332.2,184.6z\" />\r\n\r\n            <path class=\"nt5\" d=\"M331.2,190v-0.7h1.8v0.7H331.2z\" />\r\n\r\n        </g>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 200)\">LEI decreasing 3 consecutive months</text>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 206)\">and latest read is lower than the</text>\r\n            <text class=\"nt4 nt2 nt8\" transform=\"matrix(1 0 0 1 330 212)\">read 6 months prior.</text>\r\n            <circle class=\"nt4\" cx=\"344.2\" cy=\"190.1\" r=\"1.3\" />\r\n\r\n      </g>\r\n            <g>\r\n            <circle class=\"nt4\" cx=\"468.1\" cy=\"200.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 460.0878 202.6312)\" class=\"nt5 nt2 nt6\">100%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n<g>\r\n            <g class=\"\" id=\"gDecisions\">\r\n            <line class=\"nt4\" style=\"stroke: rgb(43, 71, 143);stroke-width: 2px;transform: translate(72px, 115px);\" x1=\"10\" x2=\"23\"></line>\r\n            <polygon class=\"nt4\" points=\"107.1,115 94.7,110.4 94.7,119.5 \t\t\" />\r\n\r\n            <circle class=\"nt4\" cx=\"43.3\" cy=\"115\" r=\"38.8\" />\r\n\r\n            <g id=\"txtDecisions\">\r\n            <text transform=\"matrix(1 0 0 1 20.2 111.455)\" class=\"nt5 nt2 nt14\"></text>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 117.83 26.145)\" class=\"nt4 nt2 nt15\">Current LEI </text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 36.945)\" class=\"nt16 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 36.945)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 36.945)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 36.945)\" class=\"nt9 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 36.945)\" class=\"nt4 nt2 nt15\">) 6 month</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 47.745)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 58.545)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 58.545)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 58.545)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 58.545)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 58.545)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 58.545)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 58.545)\" class=\"nt4 nt2 nt15\">)</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 101.985)\" class=\"nt4 nt2 nt15\">Current VIX</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 112.785)\" class=\"nt16 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 112.785)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 112.785)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 112.785)\" class=\"nt9 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 112.785)\" class=\"nt4 nt2 nt15\">) 200 day</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 123.585)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 134.3849)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 134.3849)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 134.3849)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 134.3849)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 134.3849)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 134.3849)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 134.3849)\" class=\"nt4 nt2 nt15\">)</text>\r\n            <g [ngStyle]=\"{'display': (valueHtop == 'HFJTT' || valueHtop == 'HFUTT' || valueHtop == 'HFETT') ? 'none' : 'block' }\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current SPTR</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFETT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">Europe BMI</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFUTT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">UK BMI</text>\r\n        </g>\r\n            <g *ngIf=\"valueHtop == 'HFJTT'\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 177.815)\" class=\"nt4 nt2 nt15\">Current S&P</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 187.815)\" class=\"nt4 nt2 nt15\">Japan BMI</text>\r\n        </g>\r\n            <g class=\"mvbtm\" [ngStyle]=\"{'transform': (valueHtop == 'HFJTT' || valueHtop == 'HFUTT' || valueHtop == 'HFETT') ? 'translate(0px, 10px)' : 'translate(0px, 0px)' }\">\r\n            <text transform=\"matrix(1 0 0 1 117.83 188.615)\" class=\"nt16 nt17 nt15\">&gt;</text>\r\n            <text transform=\"matrix(1 0 0 1 122.92 188.615)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 125.26 188.615)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 128.11 188.615)\" class=\"nt9 nt17 nt15\">&lt;</text>\r\n            <text transform=\"matrix(1 0 0 1 133.21 188.615)\" class=\"nt4 nt2 nt15\">) 200 day</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 199.415)\" class=\"nt4 nt2 nt15\">moving</text>\r\n            <text transform=\"matrix(1 0 0 1 117.83 210.215)\" class=\"nt4 nt2 nt15\">average</text>\r\n            <text transform=\"matrix(1 0 0 1 152.34 210.215)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 154.68 210.215)\" class=\"nt16 nt17 nt15\">+</text>\r\n            <text transform=\"matrix(1 0 0 1 159.78 210.215)\" class=\"nt5 nt2 nt15\"> </text>\r\n            <text transform=\"matrix(1 0 0 1 162.11 210.215)\" class=\"nt4 nt2 nt15\">(</text>\r\n            <text transform=\"matrix(1 0 0 1 164.97 210.215)\" class=\"nt9 nt17 nt15\">-</text>\r\n            <text transform=\"matrix(1 0 0 1 167.83 210.215)\" class=\"nt4 nt2 nt15\">)</text>\r\n          </g>\r\n        </g>\r\n            <g>\r\n            <g class=\"GreyRBox\">\r\n            <path class=\"nt0\" d=\"M269.8,202.5c-46.9-48.9-46.9-126.1,0-175.1l0,0c5.3-5.3,5.3-13.9,0-19.2c-2.5-2.6-6-4-9.6-4h-33.8l0,0\r\n\t\t\tc-7.2,0-14,3.6-18,9.5l0,0c-40.4,61.4-40.4,141,0,202.4l0,0c4,6,10.8,9.6,18,9.5l0,0h33.8c7.5,0,13.6-6.1,13.6-13.6\r\n\t\t\tC273.8,208.6,272.4,205.1,269.8,202.5L269.8,202.5z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"269.48\" y1=\"3.255\" x2=\"314.9736\" y2=\"3.255\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n          </g>\r\n            <g class=\"\" id=\"LEI\">\r\n            <path class=\"nt20\" d=\"M265.4,23c-6.1,6.1-11.5,12.7-16.3,19.9l0,0c-5,7.5-9.1,15.5-12.4,23.9c-2,5.1-6.9,8.5-12.3,8.5h-25.9\r\n\t\t\tc-4.3,0-7.8-3.5-7.8-7.7c0-0.7,0.1-1.4,0.3-2.1c2.2-7.7,5-15.2,8.3-22.5l0,0c0.2-0.4,0.3-0.7,0.5-1.1c3.9-8.5,8.5-16.7,13.8-24.5\r\n\t\t\tc2.9-4.2,7.7-6.8,12.9-6.7h33.8c4,0,7.3,3.3,7.3,7.3C267.6,19.7,266.8,21.6,265.4,23z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 206.93 38.685)\" class=\"nt5 nt2 nt6\">Economic</text>\r\n            <text transform=\"matrix(1 0 0 1 205.22 46.2049)\" class=\"nt5 nt2 nt6\">Conditions</text>\r\n            <text transform=\"matrix(1 0 0 1 202.61 53.725)\" class=\"nt5 nt2 nt6\">LEI Indicator</text>\r\n            <g *ngIf=\"LEI==0\" style=\"transform: translate(-10px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"244.5\" cy=\"22\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M243.6,22.2v-0.7h1.9v0.7H243.6z\" />\r\n\r\n        </g>\r\n            <g *ngIf=\"LEI==1\" style=\"transform: translate(5px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"230\" cy=\"22\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M229.8,22.1h-1.4v-0.6h1.4V20h0.6v1.4h1.4v0.6h-1.4v1.4h-0.6V22.1z\" />\r\n\r\n        </g>\r\n            <g *ngIf=\"LEI==1 && (selectedIndexData.indexId == 4 || selectedIndexData.indexId == 9 || selectedIndexData.indexId == 107 || selectedIndexData.indexId == 104)\" class=\"info-eco\" style=\"cursor:pointer\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"253px\" y=\"12px\" width=\"11\" height=\"11\"\r\n                 viewBox=\"0 0 172 172\" style=\" fill:#000000;\">\r\n            <g transform=\"translate(4.73,4.73) scale(0.945,0.945)\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"none\" stroke-linecap=\"butt\" stroke-linejoin=\"none\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g stroke=\"#cccccc\" stroke-width=\"10\" stroke-linejoin=\"round\"><path d=\"M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z\" fill=\"#2b478f\"></path><path d=\"M78.83333,78.83333h14.33333v39.41667h-14.33333zM94.95833,59.125c0,4.94142 -4.01692,8.95833 -8.95833,8.95833c-4.94142,0 -8.95833,-4.01692 -8.95833,-8.95833c0,-4.94142 4.01692,-8.95833 8.95833,-8.95833c4.94142,0 8.95833,4.01692 8.95833,8.95833z\" fill=\"#ffffff\"></path></g><path d=\"M0,172v-172h172v172z\" fill=\"none\" stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"></path><g stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"><path d=\"M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z\" fill=\"#2b478f\"></path><path d=\"M78.83333,78.83333h14.33333v39.41667h-14.33333zM94.95833,59.125c0,4.94142 -4.01692,8.95833 -8.95833,8.95833c-4.94142,0 -8.95833,-4.01692 -8.95833,-8.95833c0,-4.94142 4.01692,-8.95833 8.95833,-8.95833c4.94142,0 8.95833,4.01692 8.95833,8.95833z\" fill=\"#ffffff\"></path></g><path d=\"\" fill=\"none\" stroke=\"none\" stroke-width=\"1\" stroke-linejoin=\"miter\"></path></g></g>\r\n          </svg>\r\n            <g class=\"tooltip-i\" style=\"display:none;\">\r\n            <rect class=\"st6\" x=\"160\" y=\"-44\" rx=\"10\" width=\"145\" height=\"50\" style=\"fill:#2b478f\"></rect>\r\n            <text x=\"167\" y=\"-33\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">When benchmark interest rate is zero,</text>\r\n            <text x=\"167\" y=\"-23\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">the unscheduled rebalance will be</text>\r\n            <text x=\"167\" y=\"-13\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">triggered when the LEI Indicator</text>\r\n            <text x=\"167\" y=\"-3\" style=\"fill: #fff;font-family: 'OpenSans-Semibold';font-size: 7px;\">changes sign</text>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g class=\"\" id=\"VIX\">\r\n            <path class=\"nt18\" d=\"M228.2,115c0-6.8,0.5-13.6,1.6-20.3c0.9-5.7-3-11-8.7-11.9c-0.5-0.1-1.1-0.1-1.6-0.1h-23.1\r\n\t\t\tc-5.2,0-9.6,3.8-10.3,9c-2.1,15.5-2.1,31.2,0,46.7c0.7,5.2,5.1,9,10.3,9h23.1c5.7,0,10.4-4.6,10.4-10.4c0-0.5,0-1.1-0.1-1.6\r\n\t\t\tC228.8,128.6,228.2,121.8,228.2,115z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"275.7619\" y1=\"75.4052\" x2=\"352.538\" y2=\"75.4052\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n            <text transform=\"matrix(1 0 0 1 196.09 111.065)\" class=\"nt5 nt2 nt6\">Market</text>\r\n            <text transform=\"matrix(1 0 0 1 191.34 118.585)\" class=\"nt5 nt2 nt6\">Sentiment</text>\r\n            <text transform=\"matrix(1 0 0 1 202.12 126.105)\" class=\"nt5 nt2 nt6\">VIX</text>\r\n            <g *ngIf=\"VIX==0\" style=\"transform: translate(-7px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"214.6\" cy=\"94.2\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M213.7,94.4v-0.7h1.8v0.7H213.7z\" />\r\n\r\n            </g>\r\n            <g *ngIf=\"VIX==1\" style=\"transform: translate(7px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"200\" cy=\"94.2\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M199.8,94.4h-1.4v-0.6h1.4v-1.4h0.7v1.4h1.4v0.6h-1.4v1.4h-0.6L199.8,94.4z\" />\r\n\r\n            </g>\r\n          </g>\r\n            <g class=\"\" id=\"SP\">\r\n            <path class=\"nt19\" d=\"M265.4,207c-6.1-6.1-11.5-12.7-16.3-19.9l0,0c-5-7.5-9.1-15.5-12.4-23.9c-2-5.1-6.9-8.5-12.3-8.5h-25.9\r\n\t\t\tc-4.3,0-7.8,3.5-7.8,7.7c0,0.7,0.1,1.4,0.3,2.1c2.2,7.7,5,15.2,8.3,22.5l0,0c0.2,0.4,0.3,0.7,0.5,1.1c3.9,8.5,8.5,16.7,13.8,24.5\r\n\t\t\tc2.9,4.2,7.7,6.8,12.9,6.7h33.8c4,0,7.3-3.3,7.3-7.3C267.6,210.2,266.8,208.3,265.4,207z\" />\r\n\r\n            <linearGradient id=\"SVGIDR_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"275.7619\" y1=\"-68.8151\" x2=\"352.538\" y2=\"-68.8151\" gradientTransform=\"matrix(1 0 0 -1 -84.98 118.25)\">\r\n            <stop offset=\"0\" style=\"stop-color:#054CA3\" />\r\n\r\n            <stop offset=\"0.11\" style=\"stop-color:#0466B5\" />\r\n\r\n            <stop offset=\"0.29\" style=\"stop-color:#028ACE\" />\r\n\r\n            <stop offset=\"0.45\" style=\"stop-color:#01A4DF\" />\r\n\r\n            <stop offset=\"0.6\" style=\"stop-color:#00B4EA\" />\r\n\r\n            <stop offset=\"0.72\" style=\"stop-color:#00B9EE\" />\r\n\r\n            </linearGradient>\r\n            <text transform=\"matrix(1 0 0 1 214.33 188.405)\" class=\"nt5 nt2 nt6\">Market</text>\r\n            <text transform=\"matrix(1 0 0 1 207.41 195.925)\" class=\"nt5 nt2 nt6\">Momentum</text>\r\n            <g *ngIf=\"SP==0\" style=\"transform: translate(-7px, 0px);\">\r\n            <circle class=\"nt21\" cx=\"221.8\" cy=\"166.5\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M220.9,166.7V166h1.8v0.7L220.9,166.7z\" />\r\n\r\n            </g>\r\n            <g *ngIf=\"SP==1\" style=\"transform: translate(7px, 0px);\">\r\n            <circle class=\"nt22\" cx=\"207.3\" cy=\"166.5\" r=\"4.2\" />\r\n\r\n            <path class=\"nt5\" d=\"M207.1,166.6h-1.4V166h1.4v-1.4h0.6v1.5h1.4v0.6h-1.4v1.4h-0.6V166.6z\" />\r\n\r\n            </g>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g *ngIf=\"(selectedIndexData.indexId == 4 || selectedIndexData.indexId == 9 || selectedIndexData.indexId == 107 || selectedIndexData.indexId == 104)\" class=\"info-eco\" style=\"cursor:pointer\">\r\n              <text x=\"115\" y=\"242\" style=\"fill: #284d95;font-family: 'Open Sans SemiBold';font-size: 5pt;font-style: italic;\">When benchmark interest rate is zero, the unscheduled rebalance will be triggered when the LEI Indicator changes sign.</text>\r\n            <!--<text x=\"115\" y=\"260\" style=\"fill: #284d95;font-family: 'OpenSans-Semibold';font-size: 5pt;font-style: italic;\"></text>-->\r\n      </g>\r\n</svg>\r\n          </div>\r\n          <div *ngIf=\"selectedIndexData.indexId == 54\" (click)=\"onSvgClick('dvSvgGlobal')\">\r\n            <svg version=\"1.1\" class=\"devWorld\" id=\"dvSvgGlobal\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"-20 -10 680 330\" style=\"width:100%;height:100%\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n  .devWorld .st0 {\r\n    fill: #324D91;\r\n  }\r\n\r\n  .devWorld .st1 {\r\n    font-family: 'Open Sans SemiBold';\r\n  }\r\n\r\n  .devWorld .st2 {\r\n    font-size: 9px;\r\n  }\r\n\r\n  .devWorld .st3 {\r\n    fill: #00B9EE;\r\n  }\r\n\r\n  .devWorld .st4 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  .devWorld .st5 {\r\n    fill: #D1D8DD;\r\n  }\r\n\r\n  .devWorld .st6 {\r\n    enable-background: new;\r\n  }\r\n\r\n  .devWorld .st7 {\r\n    font-size: 7px;\r\n  }\r\n\r\n  .devWorld .st8 {\r\n    fill: #324E90;\r\n  }\r\n\r\n  .devWorld .st9 {\r\n    fill: #FFFFFF;\r\n  }\r\n\r\n  .devWorld .st10 {\r\n    font-size: 6.27px;\r\n  }\r\n\r\n  .devWorld .st11 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .devWorld .st12 {\r\n    font-size: 6.5px;\r\n  }\r\n\r\n  .devWorld .st13 {\r\n    fill: none;\r\n    stroke: #00B9EE;\r\n    stroke-miterlimit: 10;\r\n  }\r\n\r\n  .devWorld .st14 {\r\n    fill: #D3D8DC;\r\n  }\r\n\r\n  .as-of-date{\r\n    transform: matrix(1, 0, 0, 1, 500, 10);\r\n    font-size: 8px;\r\n    font-family: Open Sans SemiBold;\r\n    fill: #2b478f;\r\n  }\r\n</style>\r\n<text transform=\"matrix(1 0 0 1 97.6956 18)\" class=\"st0 st1 st2\">New Age Alpha</text>\r\n<text transform=\"matrix(1 0 0 1 97.6956 30.5466)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('US LC')\">U.S. Large-Cap RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 124.3055 85.6264)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('US SC')\">U.S. Small-Cap RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 135.1755 137.9064)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('Europe')\">Europe Ex U.K. RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 134.6202 192.2264)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('UK')\">U.K. RiskSelect Index</text>\r\n<text transform=\"matrix(1 0 0 1 121.3547 244.1064)\" class=\"st3 st1 st4\" style=\"cursor:pointer\" (click)=\"riskSelDev('Japan')\">Japan RiskSelect Index</text>\r\n<!-- Large Cap -->\r\n<g>\r\n  <text class=\"as-of-date\">As of {{Rbdisplaydate(selectedDate)}}</text>\r\n</g>\r\n<g class=\"LC\">\r\n            <g class=\"LC-1\" *ngIf=\"sLC == '1'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"8\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"16.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-2\" *ngIf=\"sLC == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 143.1757 62.6562)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(216, -24)\" (click)=\"riskSelDev('US LC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115.3185 63.9688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-3\" *ngIf=\"sLC == '3'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"8\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"16.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"LC-4\" *ngIf=\"sLC == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US LC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 143.1757 62.6562)\" class=\"st6\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- Bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(216, -24)\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115.3185 63.9688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n    </g>\r\n            <g class=\"LC-5\" *ngIf=\"sLC == '5'\">\r\n            <path class=\"st11\" d=\"M99.1,55h224.1c4.4,0,8,3.6,8,8v80.1c0,2.2,1.8,4,4,4h56.2\" />\r\n\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,60.6c-2.1-5.9-4.4-11.7-6.9-17.5c-1.9-4.2-6-7-10.7-7h-48.9h-59.3c-4.7,0-8.4,3.8-8.4,8.5\r\n\t\tc0,2.2,0.9,4.3,2.4,5.8l0.2,0.2c4.6,4.8,8.8,9.9,12.6,15.4c3.2,4.6,8.4,7.3,14,7.3h96.1c5.3,0,9.5-4.3,9.5-9.6\r\n\t\tC226.6,62.6,226.4,61.6,226.1,60.6z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143.1754 43.5214)\" class=\"st6\"><tspan x=\"0\" y=\"13\" class=\"st0 st1 st7\">Cash</tspan></text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"54.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115.3185 50.5688)\" y=\"6\" x=\"-1\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US LC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"54.8\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 240.1731 56.2361)\" class=\"st9 st1 st12\">*{{HFLAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  </g>\r\n<!--Japan -->\r\n<g class=\"Japan\">\r\n<g class=\"Ja-1\" *ngIf=\"sJAP == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-4\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"4\">Leading Index</text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"Ja-2\" *ngIf=\"sJAP == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-13\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-5\">Leading Index</text>\r\n    </g>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"5\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"13\">Low Vol Index</text>\r\n    </g>\r\n    <!-- Bottom  -->\r\n            <g class=\"rounded-hover\" transform=\"translate(209, 188)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M98.7,267.3h224.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115 263.5)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115 275.5)\" class=\"st9 st1 st10\">50%</text>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"Ja-3\" *ngIf=\"sJAP == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-4\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"4\">Low Vol Index</text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"Ja-4\" *ngIf=\"sJAP == '4'\">\r\n\t\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-13\">NAA Japan</text>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"-5\">Low Vol Index</text>\r\n    </g>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(218, 157)\" (click)=\"riskSelDev('Japan V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\" y=\"9\">Cash</text>\r\n    </g>\r\n    <!-- Bottom  -->\r\n    <!--<g class=\"rounded-hover\" transform=\"translate(209, 188)\" (click)=\"riskSelDev('Japan')\">\r\n      <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n           viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n      <g>\r\n      <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n      <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n    </g>-->\r\n  </g>\r\n            <g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 115 263.5)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 115 275.5)\" class=\"st9 st1 st10\">50%</text>\r\n    </g>\r\n            <path class=\"st11\" d=\"M98.7,267.3h224.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n      </g>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"Ja-5\" *ngIf=\"sJAP == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M221.7,267.3h101.4c4.4,0,8-3.6,8-8v-81c0-2.2,1.8-4,4-4h56.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"252.5\" cy=\"267.2\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 240.1732 268.6596)\" class=\"st9 st1 st12\">*{{HFJAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.1,261.2c-2.1,5.9-4.4,11.7-6.9,17.5c-1.9,4.2-6.1,6.9-10.7,6.9h-48.9h-59.3c-4.7,0-8.4-3.8-8.4-8.5\r\n\t\t\tc0-2.2,0.9-4.3,2.4-5.8l0.2-0.1c4.6-4.8,8.8-9.9,12.6-15.4c3.2-4.6,8.4-7.3,14-7.3h96.1c5.3,0,9.5,4.3,9.5,9.6\r\n\t\t\tC226.6,259.1,226.4,260.2,226.1,261.2z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 144.961 269.7499)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"121.4\" cy=\"267\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 113.3258 268.8963)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, 172)\" (click)=\"riskSelDev('Japan')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n</g>\r\n<!-- UK -->\r\n<g class=\"UK\">\r\n<g class=\"uk-1\" *ngIf=\"sUK == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st6\"><tspan x=\"0\" y=\"-4\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"4.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n                <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n                </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"uk-2\" *ngIf=\"sUK == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9754 202.7214)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9756 221.8562)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(225, 133)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1185 209.7688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1185 223.1688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n  <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n  </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-3\" *ngIf=\"sUK == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st6\"><tspan x=\"0\" y=\"-4\" class=\"st0 st1 st7\">NAA UK Low </tspan><tspan x=\"0\" y=\"4.4\" class=\"st0 st1 st7\">Vol Index</tspan></text>\r\n    <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n    </g>\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-4\" *ngIf=\"sUK == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9754 202.7214)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA UK Low</tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Vol Index</tspan></text>\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 103)\" (click)=\"riskSelDev('UK V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9756 221.8562)\" class=\"st4\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- Bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(225, 133)\" (click)=\"riskSelDev('UK')\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n                  </g>\r\n                 </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1185 209.7688)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1185 223.1688)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n  <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                 </svg> -->\r\n  </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"uk-5\" *ngIf=\"sUK == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.4,214.2h182.8c4.4,0,8-3.6,8-8v-34.4c0-2.2,1.8-4,4-4h64.2\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"214.1\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6003 215.4999)\" class=\"st9 st1 st12\">*{{HFUAT}}</text>\r\n                </g>\r\n              </g>\r\n\t</g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,195.5h-91.8c-4,0-7.4,2.7-8.4,6.6c-1.5,6.3-3.5,12.4-6,18.4c-1.8,4.4,0.3,9.4,4.6,11.2\r\n\t\t\tc1.1,0.4,2.2,0.7,3.4,0.7h95.1c4.8,0,9-3.3,10.1-8c1.3-5.7,2.3-11.4,3.2-17.2c0.8-5.6-3.1-10.8-8.7-11.6\r\n\t\t\tC227.7,195.5,227.2,195.5,226.6,195.5z\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 165.7855 215.9713)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"213.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.1755 215.6767)\" class=\"st9 st1 st10\">100%</text>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 119)\" (click)=\"riskSelDev('UK')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n</g>\r\n<!-- Europe -->\r\n<g class=\"Europe\">\r\n            <g class=\"Eu-1\" *ngIf=\"sEUR == '1'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <path class=\"st13\" d=\"M136.8,161.2\" />\r\n\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.3955 162.6213)\" class=\"st9 st1 st10\">100%</text>\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"-4\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"4\">Leading Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-2\" *ngIf=\"sEUR == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <path class=\"st13\" d=\"M136.8,161.2\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-13\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-5\">Leading Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"5\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"13\">Low Vol Index</text>\r\n        <!-- Bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 82)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143 157)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 143 170)\" class=\"st9 st1 st10\">50%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n            <path class=\"st11\" d=\"M130,161.2h250.9\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-3\" *ngIf=\"sEUR == '3'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"-4\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"4\">Low Vol Index</text>\r\n          <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n          </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n          </g>\r\n        </g>\r\n      </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n    </g>\r\n            <g class=\"Eu-4\" *ngIf=\"sEUR == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-13\">NAA Europe ex UK</text>\r\n            <text transform=\"matrix(1 0 0 1 168 163.0091)\" class=\"st0 st1 st7\" y=\"-5\">Low Vol Index</text>\r\n        <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(228, 49)\" (click)=\"riskSelDev('Europe V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n        </g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\" y=\"8\">Cash</text>\r\n        <!-- Bottom -->\r\n        <!--<g class=\"rounded-hover\" transform=\"translate(228, 82)\" (click)=\"riskSelDev('Europe')\">\r\n          <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n               viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n          <g>\r\n          <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n          <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n        </g>\r\n        </svg>\r\n        </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 143 157)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 143 170)\" class=\"st9 st1 st10\">50%</text>\r\n        </g>\r\n      </g>\r\n            <path class=\"st11\" d=\"M130,161.2h250.9\" />\r\n\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n      \r\n    </g>\r\n  </g>\r\n            <g class=\"Eu-5\" *ngIf=\"sEUR == '5'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M238.8,160.8c0-2.7,0-5.4-0.1-8.1c-0.2-5.8-4.9-10.4-10.7-10.4h-88c-5.9,0-10.7,4.8-10.7,10.7\r\n\t\t\tc0,0.2,0,0.4,0,0.6c0.1,2.4,0.2,4.8,0.2,7.1v0.1c0,2.4-0.1,4.8-0.2,7.2c-0.3,5.9,4.2,10.9,10.1,11.3c0.2,0,0.4,0,0.6,0h88.1\r\n\t\t\tc5.8,0,10.5-4.6,10.7-10.4C238.8,166.3,238.8,163.6,238.8,160.8L238.8,160.8L238.8,160.8z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 170.961 163.0091)\" class=\"st0 st1 st7\">Cash</text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"149.3\" cy=\"160.9\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 141.2449 162.621)\" class=\"st9 st1 st10\">100%</text>\r\n        </g>\r\n      </g>\r\n    </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M238,161.2h142.9\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"269.5\" cy=\"161\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 257.1732 162.4723)\" class=\"st9 st1 st12\">*{{HFEAT}}</text>\r\n        </g>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(121, 66)\" (click)=\"riskSelDev('Europe')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n  </g>\r\n<!-- Small Cap -->\r\n<g class=\"SC\">\r\n<g class=\"SC-1\" *ngIf=\"sSC == '1'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n\t\t          </g>\r\n\t            </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n                  <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(205, -58)\" (click)=\"riskSelDev('US SC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n                  </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n                  </g>\r\n                </g>\r\n                <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(90, -40)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                  </g>\r\n                  </svg> -->\r\n                </g>\r\n              </g>\r\n</g>\r\n<g class=\"SC-2\" *ngIf=\"sSC == '2'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9613 96.5714)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Leading Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC L50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9615 115.7062)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. LC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- bottom -->\r\n            <g class=\"rounded-hover\" transform=\"translate(227, 27)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1043 103.6188)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1043 117.0188)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-3\" *ngIf=\"sSC == '3'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g style=\"cursor:pointer\">\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-4\" *ngIf=\"sSC == '4'\">\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.9613 96.5714)\" class=\"st4\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st7\">NAA U.S. SC </tspan><tspan x=\"0\" y=\"8.4\" class=\"st0 st1 st7\">Low Vol Index</tspan></text>\r\n      <!-- Top -->\r\n            <g class=\"rounded-hover\" transform=\"translate(220, -4)\" (click)=\"riskSelDev('US SC V50')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n                    </g>\r\n                    </svg> -->\r\n      </g>\r\n            <text transform=\"matrix(1 0 0 1 164.9615 115.7062)\" class=\"st4\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n      <!-- bottom -->\r\n      <!--<g class=\"rounded-hover\" transform=\"translate(227, 27)\">\r\n        <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n        <g>\r\n        <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n        <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n                    </g>\r\n                    </svg>\r\n      </g>-->\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.7\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 137.1043 103.6188)\" class=\"st9 st1 st10\">50%</text>\r\n            <text transform=\"matrix(1 0 0 1 137.1043 117.0188)\" class=\"st9 st1 st10\">50%</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n    <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n    </g>\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n<g class=\"SC-5\" *ngIf=\"sSC == '5'\">\r\n            <g>\r\n            <path class=\"st11\" d=\"M123.5,108.2h182.6c4.4,0,8,3.6,8,8v34.5c0,2.2,1.8,4,4,4h62.8\" />\r\n\r\n            <g>\r\n            <circle class=\"st3\" cx=\"265.5\" cy=\"108\" r=\"15\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 254.6002 109.4536)\" class=\"st9 st1 st12\">*{{HFSAT}}</text>\r\n      </g>\r\n    </g>\r\n  </g>\r\n            <g>\r\n            <path class=\"st5\" d=\"M226.6,126.2h-91.8c-4,0-7.4-2.7-8.4-6.6c-1.5-6.3-3.5-12.4-6-18.4c-1.8-4.4,0.3-9.4,4.6-11.2\r\n\t\t\tc1.1-0.4,2.2-0.7,3.4-0.7h95.1c4.8,0,9,3.3,10.1,8c1.3,5.7,2.3,11.4,3.2,17.1c0.8,5.6-3.1,10.8-8.7,11.6\r\n\t\t\tC227.7,126.2,227.2,126.2,226.6,126.2z\" />\r\n\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 164.4812 106.1362)\" class=\"st6\"><tspan x=\"0\" y=\"3\" class=\"st0 st1 st7\">Cash </tspan></text>\r\n            <g>\r\n            <circle class=\"st8\" cx=\"143.2\" cy=\"107.8\" r=\"13.9\" />\r\n\r\n            <text transform=\"matrix(1 0 0 1 135.2353 109.6838)\" class=\"st9 st1 st10\">100%</text>\r\n      </g>\r\n      <!-- Middle -->\r\n            <g class=\"rounded-hover\" transform=\"translate(115, 14)\" (click)=\"riskSelDev('US SC')\">\r\n            <!-- <svg version=\"1.1\" class=\"circleHvr\" id=\"hover-Round\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 10 10\" style=\"enable-background:new 0 0 10 10;\" xml:space=\"preserve\" width=\"15px\">\r\n            <g>\r\n            <circle class=\"Ct0\" cx=\"5\" cy=\"5\" r=\"1.8\" />\r\n\r\n            <circle class=\"Ct1\" cx=\"5\" cy=\"5\" r=\"3.5\" />\r\n\r\n        </g>\r\n        </svg> -->\r\n      </g>\r\n    </g>\r\n  </g>\r\n</g>\r\n</g>\r\n<g>\r\n            <g>\r\n            <path class=\"st14\" d=\"M511.8,178.8H394.2c-10.1,0-18.3-8.2-18.3-18.3v0c0-10.1,8.2-18.3,18.3-18.3h117.7\r\n\t\t\tc10.1,0,18.3,8.2,18.3,18.3v0C530.1,170.6,521.9,178.8,511.8,178.8z\" />\r\n\r\n\t</g>\r\n            <g>\r\n            <g>\r\n            <text transform=\"matrix(1 0 0 1 394.8491 155.9445)\"><tspan x=\"0\" y=\"0\" class=\"st0 st1 st2\">New Age Alpha Developed </tspan><tspan x=\"8.9\" y=\"14.8\" class=\"st0 st1 st2\">World RiskSelect Index</tspan></text>\r\n                </g>\r\n            <g><text style=\"fill: #284d95; font-family: 'OpenSans-Semibold' ;font-size: 6pt;font-style: italic;\" transform=\"matrix(1 0 0 1 80 308)\">* The regional allocations are calculated based on the proportional regional weights in the S&amp;P Developed World BMI Index</text></g>\r\n              </g>\r\n</g>\r\n</svg>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!selectedIndexData\" style=\"\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\">\r\n    <img src=\"../../assets/images/NAA.gif\" alt=\"Loader\" style=\"    height: 35px;\">\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-content id=\"content\" class=\"content\" *ngIf=\"mobile\">\r\n  \r\n  <div class=\"HeaderDiv\">\r\n    <div class=\"CountryDiv\">\r\n      <span (click)=\"OnItemClick(item)\" class=\"contryItem\" *ngFor=\"let item of CountryClasificationList\">\r\n        <p class=\"CountryP\" [ngStyle]=\"{'color': selectedCountry == item ? '#ffffff' : '#99acde', 'zoom':selectedCountry == item ? '110%' : '100%' , 'margin-top' : selectedCountry == item ? '5px' : '10px'}\">{{item}}</p>\r\n        <span class=\"underScoreSpan\" *ngIf=\"selectedCountry == item\"></span>\r\n      </span>\r\n    </div>\r\n    <div class=\"dropDownDiv\">\r\n      <ion-button (click)=\"openPicker()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <div class=\"innerdropDownDiv\">\r\n          <span class=\"innerdropDownsapn\" *ngIf=\"selectedIndexData && selectedIndexName\">{{selectedIndexName}} ({{selectedIndexData.indexCode}})</span> <span><ion-icon name=\"chevron-down-outline\"></ion-icon></span></div>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div *ngIf=\"selectedIndexData\">\r\n        <div class=\"PerfomanceDateDiv\">\r\n          <span class=\"perfLabel\">Perfomance</span>\r\n          <span class=\"perfDate\">As of {{selectedIndexData.date}}</span>\r\n        </div>\r\n          <div id='desc' class=\"descDiv\">\r\n            <p>\r\n            <span id=\"desc\" [innerHTML]='description'>\r\n            </span>\r\n            </p>\r\n          </div>\r\n          <div class=\"DataDiv\" id='DataDiv'>\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Value</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.value)}}</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Daily</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.dailyReturn*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">YTD</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.ytdReturn*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">1 Year</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y1Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">3 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y3Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">5 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y5Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text >\r\n                <p class=\"rowHeading\">10 Year*</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.y10Return*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Cumulative Inception</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.cumReturns*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">Annualized Inception</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.annReturns*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">2019</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.year1*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-text>\r\n                <p class=\"rowHeading\">2018</p>\r\n                <p class=\"rowValue\">{{roundValue(selectedIndexData.year2*100)}}%</p>\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2017</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year3*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2016</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year4*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2015</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year5*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2014</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year6*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2013</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year7*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2012</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year8*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2011</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year9*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n            \r\n              <ion-item lines='none'>\r\n                <ion-text>\r\n                  <p class=\"rowHeading\">2010</p>\r\n                  <p class=\"rowValue\">{{roundValue(selectedIndexData.year10*100)}}%</p>\r\n                </ion-text>\r\n              </ion-item>\r\n          </div>\r\n          <div class=\"FooterDiv\">\r\n          <div class=\"Footer1\">\r\n            <p>First Value Date: <span style=\"color: #394e8b;\">{{selectedIndexData.firstValueDt}}</span></p>\r\n            <p>Launch Date: <span style=\"color: #394e8b;\">{{selectedIndexData.inception}}</span></p>\r\n          </div>\r\n          <div class=\"Footer2\">\r\n            <p>Calculated by S&P Dow Jones Indices</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>-->\r\n\r\n<ion-content forceOverscroll=false *ngIf=\"!mobile\">\r\n  <!-- <app-index></app-index> -->\r\n</ion-content>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
        this.valueHtop = null;
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
    riskSelDev(val) {
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