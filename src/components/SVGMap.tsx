import React from 'react';

interface Location {
    id: string;
    name?: string;
    path: string;
}

interface MapData {
    viewBox: string;
    locations: Location[];
    label?: string;
}

interface SVGMapProps {
    map: MapData;
    className?: string;
    role?: string;
    locationClassName?: string | ((location: Location, index: number) => string);
    locationTabIndex?: string | ((location: Location, index: number) => string);
    locationRole?: string;
    locationAriaLabel?: (location: Location, index: number) => string;
    onLocationMouseOver?: (event: React.MouseEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationMouseOut?: (event: React.MouseEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationMouseMove?: (event: React.MouseEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationClick?: (event: React.MouseEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationKeyDown?: (event: React.KeyboardEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationFocus?: (event: React.FocusEvent<SVGPathElement>, location: Location, index: number) => void;
    onLocationBlur?: (event: React.FocusEvent<SVGPathElement>, location: Location, index: number) => void;
    isLocationSelected?: (location: Location, index: number) => boolean;
    childrenBefore?: React.ReactNode;
    childrenAfter?: React.ReactNode;
}

const SVGMap = ({
    map,
    className = 'svg-map',
    role = 'none',
    locationClassName = 'svg-map__location',
    locationTabIndex = '0',
    locationRole = 'none',
    locationAriaLabel,
    onLocationMouseOver,
    onLocationMouseOut,
    onLocationMouseMove,
    onLocationClick,
    onLocationKeyDown,
    onLocationFocus,
    onLocationBlur,
    isLocationSelected,
    childrenBefore,
    childrenAfter,
}: SVGMapProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={map.viewBox}
            className={className}
            role={role}
            aria-label={map.label}
        >
            {childrenBefore}
            {map.locations.map((location, index) => (
                <path
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    d={location.path}
                    className={
                        typeof locationClassName === 'function'
                            ? locationClassName(location, index)
                            : locationClassName
                    }
                    tabIndex={
                        typeof locationTabIndex === 'function'
                            ? Number(locationTabIndex(location, index))
                            : Number(locationTabIndex)
                    }
                    role={locationRole}
                    aria-label={locationAriaLabel ? locationAriaLabel(location, index) : location.name}
                    aria-checked={isLocationSelected ? isLocationSelected(location, index) : undefined}
                    onMouseOver={(event) => onLocationMouseOver?.(event, location, index)}
                    onMouseOut={(event) => onLocationMouseOut?.(event, location, index)}
                    onMouseMove={(event) => onLocationMouseMove?.(event, location, index)}
                    onClick={(event) => onLocationClick?.(event, location, index)}
                    onKeyDown={(event) => onLocationKeyDown?.(event, location, index)}
                    onFocus={(event) => onLocationFocus?.(event, location, index)}
                    onBlur={(event) => onLocationBlur?.(event, location, index)}
                />
            ))}
            {childrenAfter}
        </svg>
    );
};

export default SVGMap;
