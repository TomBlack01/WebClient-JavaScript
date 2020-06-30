import L from 'leaflet';
export {
	L
};

import {
	MapDocLayer,
	MapTileLayer,
	MapWMTSLayer,
	MapVectorLayer,
	CRS,
	crs,
    ArcGISLayer,
	TDTLayer,
    BaiduTileLayer,
    TiandituType,
    GoogleLayerType,
    ArcGISLayerType,
    OpenStreetLayerType
} from '../../leaflet/layer';

import {
	ServiceBase
} from '../../service/ServiceBase';

import {
	AnyLine,
	Arc,
	Zondy,
	CAttStruct,
	CAttDataRow,
	CDisplayStyle,
	CDisplayStyleExtend,
	CDynNoteInfo,
	CGDBInfo,
	Circle,
	CLineInfo,
	CPointInfo,
	CRegionInfo,
	DynNoteLableType,
	DynShowStyle,
	XClsType,
	VectClsType,
	FeatureType,
	FontShape,
	LabelLinType,
	LabelRegType,
	LabelPntType,
	RepeatType,
	LabelSpreadType,
	LineConstrain,
	EightDirType,
	ISShowArc,
	NetAnalyType,
	NetElemType,
	CLinAdjustType,
	CLinHeadType,
	CLinJointType,
	CLinStyleMakeType,
	CItemType,
	MapType,
	LayerStatusType,
	Feature,
	FeatureGeometry,
	FeatureGraphicBase,
	FeatureSet,
	GLine,
	GPoint,
	GRegion,
	LabelLinInfo,
	LabelRegInfo,
	LablePntInfo,
	MultiPolygon,
	Point2D,
	Polygon,
	PolyLine,
	Rectangle,
	Tangram,
	VectCls,
	WebGraphicsInfo,
	extend,
	isArray,
	extendDeep,
	copy,
	copyExcluce,
	reset,
	getElement,
	isElement,
	removeItem,
	indexOf,
	modifyDOMElement,
	applyDefaults,
	getParameterString,
	getWFParameterString,
	urlAppend,
	getParameters,
	IS_GECKO,
	Browser,
	getBrowser,
	isSupportCanvas,
	supportCanvas,
	isInTheSameDomain,
	toJSON,
	transformResult,
	copyAttributes,
	copyAttributesWithClip,
	cloneObject,
	newGuid,
	bind,
	bindAsEventListener,
	getTopAnalysisResult,
	ChineseToUtf8,
	DeepMerge,
	merge,
	mixin
} from '../../service/common';

import {
	ContourNoteParam,
	ContourParam,
	ContourZValue,
	ContourRegionInfo,
	MeshingParam,
	NetAnalyse,
	NetAnalysisExtent,
	SlopLineParam
} from '../../service/extend';

import {
	CommonServiceBase,
	Events,
	CORS,
	RequestTimeout,
	FetchRequest,
	IgsServiceBase,
	JSONFormat
} from '../../service/baseserver';

import {
	ColorInfo,
	GDBInfo,
	MapDoc,
	CatalogService,
	TileLayer,
	VectorLayer
} from '../../service/MRCS';

import {
	EditDocFeature,
	EditLayerFeature,
	EditServiceBase,
	MultiGeoQuery,
	MultiGeoQueryParameter,
	ObjClsQuery,
	ObjClsQueryParameter,
	QueryByLayerParameter,
	QueryDocFeature,
	QueryFeatureRule,
	QueryFeatureStruct,
	QueryLayerFeature,
	QueryParameter,
	QueryParameterBase,
	QueryServiceBase
} from '../../service/MRFS';

import {
	AnalysisBase,
	ClassBufferBase,
	ClassBufferByMultiplyRing,
	ClassBufferBySingleRing,
	ClipBase,
	ClipByCircle,
	ClipByLayer,
	ClipByPolygon,
	ContourAnalyse,
	FeatureBuffBase,
	FeatureBuffByMultiplyRing,
	FeatureBuffBySingleRing,
	NetAnalysis,
	OverlayBase,
	OverlayByLayer,
	OverlayByPolygon,
	ProjectBase,
	ProjectByLayer,
	ProjectBySRID
} from '../../service/MRFWS';

import {
	CalArea,
	CalPolyLineLength,
	CalServiceBase,
	CProjectBySRSID,
	CProjectParam,
	GeometryAnalysisBase,
	ProjectDots,
	ProjectRang,
	Smooth,
	TopAnalysis
} from '../../service/MRGS';

import {
	GetDocImageService,
	GetLayerImageService,
	GetMapImageService,
	GetMapInfoService,
	GetTileImageService,
	MapServiceBase
} from '../../service/MRMS';

import {
	CAllOtherDataItemInfoSource,
	CAnnInfo,
	CChartLabelFormat,
	CChartTheme,
	CChartThemeInfo,
	CChartThemeRepresentInfo,
	CChartType,
	CDotDensityTheme,
	CFourColorTheme,
	CGraduatedSymbolTheme,
	CLinInfo,
	CMultiClassTheme,
	CPntInfo,
	CRandomTheme,
	CRangeTheme,
	CRangeThemeInfo,
	CRegInfo,
	CSimpleTheme,
	CTheme,
	CThemeInfo,
	CUniqueTheme,
	CUniqueThemeInfo,
	ExpInfo,
	FolderInfo,
	FolderInfoAttribute,
	ItemValue,
	ThemeOper,
	ThemesInfo
} from '../../service/theme';

import {
	EPSG4214,
	EPSG4490,
	EPSG4610
} from '../../leaflet/crs';

import {
    WMSCapabilities,
    WMTSCapabilities,
    OGCWMTSInfo,
    OGCWMSInfo
} from '../../service/OGC';

export {
	MapDocLayer,
	MapTileLayer,
	MapWMTSLayer,
	MapVectorLayer,
	CRS,
	crs,
    ArcGISLayer,
	TDTLayer,
    BaiduTileLayer,
    TiandituType,
    GoogleLayerType,
    ArcGISLayerType,
    OpenStreetLayerType
	// TDT_WGS84,
	// TDT_Mercator
};

export {
	EPSG4214,
	EPSG4490,
	EPSG4610
};

export {
	ServiceBase
};


export {
	AnyLine,
	Arc,
	Zondy,
	CAttStruct,
	CAttDataRow,
	CDisplayStyle,
	CDisplayStyleExtend,
	CDynNoteInfo,
	CGDBInfo,
	Circle,
	CLineInfo,
	CPointInfo,
	CRegionInfo,
	DynNoteLableType,
	DynShowStyle,
	XClsType,
	VectClsType,
	FeatureType,
	FontShape,
	LabelLinType,
	LabelRegType,
	LabelPntType,
	RepeatType,
	LabelSpreadType,
	LineConstrain,
	EightDirType,
	ISShowArc,
	NetAnalyType,
	NetElemType,
	CLinAdjustType,
	CLinHeadType,
	CLinJointType,
	CLinStyleMakeType,
	CItemType,
	MapType,
	LayerStatusType,
	Feature,
	FeatureGeometry,
	FeatureGraphicBase,
	FeatureSet,
	GLine,
	GPoint,
	GRegion,
	LabelLinInfo,
	LabelRegInfo,
	LablePntInfo,
	MultiPolygon,
	Point2D,
	Polygon,
	PolyLine,
	Rectangle,
	Tangram,
	VectCls,
	WebGraphicsInfo,
	extend,
	isArray,
	extendDeep,
	copy,
	copyExcluce,
	reset,
	getElement,
	isElement,
	removeItem,
	indexOf,
	modifyDOMElement,
	applyDefaults,
	getParameterString,
	getWFParameterString,
	urlAppend,
	getParameters,
	IS_GECKO,
	Browser,
	getBrowser,
	isSupportCanvas,
	supportCanvas,
	isInTheSameDomain,
	toJSON,
	transformResult,
	copyAttributes,
	copyAttributesWithClip,
	cloneObject,
	newGuid,
	bind,
	bindAsEventListener,
	getTopAnalysisResult,
	ChineseToUtf8,
	DeepMerge,
	merge,
	mixin
};
export {
	ContourNoteParam,
	ContourParam,
	ContourZValue,
	ContourRegionInfo,
	MeshingParam,
	NetAnalyse,
	NetAnalysisExtent,
	SlopLineParam
};
export {
	CommonServiceBase,
	Events,
	CORS,
	RequestTimeout,
	FetchRequest,
	IgsServiceBase,
	JSONFormat
};
export {
	ColorInfo,
	GDBInfo,
	MapDoc,
	CatalogService,
	TileLayer,
	VectorLayer
};
export {
	EditDocFeature,
	EditLayerFeature,
	EditServiceBase,
	MultiGeoQuery,
	MultiGeoQueryParameter,
	ObjClsQuery,
	ObjClsQueryParameter,
	QueryByLayerParameter,
	QueryDocFeature,
	QueryFeatureRule,
	QueryFeatureStruct,
	QueryLayerFeature,
	QueryParameter,
	QueryParameterBase,
	QueryServiceBase
};
export {
	AnalysisBase,
	ClassBufferBase,
	ClassBufferByMultiplyRing,
	ClassBufferBySingleRing,
	ClipBase,
	ClipByCircle,
	ClipByLayer,
	ClipByPolygon,
	ContourAnalyse,
	FeatureBuffBase,
	FeatureBuffByMultiplyRing,
	FeatureBuffBySingleRing,
	NetAnalysis,
	OverlayBase,
	OverlayByLayer,
	OverlayByPolygon,
	ProjectBase,
	ProjectByLayer,
	ProjectBySRID
};
export {
	CalArea,
	CalPolyLineLength,
	CalServiceBase,
	CProjectBySRSID,
	CProjectParam,
	GeometryAnalysisBase,
	ProjectDots,
	ProjectRang,
	Smooth,
	TopAnalysis
};
export {
	GetDocImageService,
	GetLayerImageService,
	GetMapImageService,
	GetMapInfoService,
	GetTileImageService,
	MapServiceBase
};
export {
	CAllOtherDataItemInfoSource,
	CAnnInfo,
	CChartLabelFormat,
	CChartTheme,
	CChartThemeInfo,
	CChartThemeRepresentInfo,
	CChartType,
	CDotDensityTheme,
	CFourColorTheme,
	CGraduatedSymbolTheme,
	CLinInfo,
	CMultiClassTheme,
	CPntInfo,
	CRandomTheme,
	CRangeTheme,
	CRangeThemeInfo,
	CRegInfo,
	CSimpleTheme,
	CTheme,
	CThemeInfo,
	CUniqueTheme,
	CUniqueThemeInfo,
	ExpInfo,
	FolderInfo,
    FolderInfoAttribute,
    ItemValue,
    ThemeOper,
    ThemesInfo
};

export {
    WMSCapabilities,
    WMTSCapabilities,
    OGCWMTSInfo,
    OGCWMSInfo
};

// 大数据相关 
import {
    EchartsLayer,
    MapvLayer,
    StreamLayer,
    HeaterLayer,
	ClusterLayer,
	MarkerClusterLayer
} from '../../leaflet/overlay/index.js';

export {
    EchartsLayer,
    MapvLayer,
    StreamLayer,
    HeaterLayer,
	ClusterLayer,
	MarkerClusterLayer
}
